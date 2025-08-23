/*
  ==============================================================================

    PlaylistComponent.cpp
    Created: 15 Aug 2025 8:40:03am
    Author:  joao

  ==============================================================================
*/

#include <JuceHeader.h>
#include "PlaylistComponent.h"

//==============================================================================
PlaylistComponent::PlaylistComponent() : deckGUI1(nullptr), deckGUI2(nullptr)
{
    // In your constructor, you should add any child components, and
    // initialise any special settings that your component needs.
    
    // Set up application properties for persistence
    PropertiesFile::Options options;
    options.applicationName = "OtoDecks";
    options.filenameSuffix = ".settings";
    options.osxLibrarySubFolder = "Application Support";
    
    appProperties.reset(new ApplicationProperties());
    appProperties->setStorageParameters(options);
    
    // Set up table columns: Left Button | Track Title | Right Button
    tableComponent.getHeader().addColumn("Deck 1", 1, 80);      // Left button column
    tableComponent.getHeader().addColumn("Track Title", 2, 240); // Track title column  
    tableComponent.getHeader().addColumn("Deck 2", 3, 80);      // Right button column
    
    tableComponent.setModel(this);
    addAndMakeVisible(tableComponent);
    
    // Add and configure the load button
    addAndMakeVisible(loadButton);
    loadButton.addListener(this);
    
    // Load saved playlist
    loadPlaylist();
}

PlaylistComponent::~PlaylistComponent()
{
    // Save playlist when component is destroyed
    savePlaylist();
}

void PlaylistComponent::paint (juce::Graphics& g)
{
    g.fillAll (getLookAndFeel().findColour (juce::ResizableWindow::backgroundColourId));   // clear the background

    g.setColour (juce::Colours::grey);
    g.drawRect (getLocalBounds(), 1);   // draw an outline around the component
}

void PlaylistComponent::resized()
{
    // This method is where you should set the bounds of any child
    // components that your component contains..
    
    auto area = getLocalBounds();
    
    // Reserve space for the load button at the top
    auto buttonArea = area.removeFromTop(30);
    loadButton.setBounds(buttonArea.reduced(5)); // Add some padding
    
    // Use remaining space for the table
    tableComponent.setBounds(area);
}

int PlaylistComponent::getNumRows()
{
    return tracks.size();
}

void PlaylistComponent::paintRowBackground (Graphics& g,
                                 int rowNumber,
                                 int width, int height,
                                 bool rowIsSelected)
{
    if (rowIsSelected)
    {
        g.fillAll(Colours::orange);
    }
    else
    {
        g.fillAll(Colours::darkgrey);
    }
}

void PlaylistComponent::paintCell (Graphics& g,
                        int rowNumber,
                        int columnId,
                        int width, int height,
                        bool rowIsSelected)
{
    if (columnId == 2) // Track title column
    {
        g.drawText(tracks[rowNumber].title, 2, 0, width - 4, height, Justification::centredLeft);
    }
    // Columns 1 and 3 will have buttons, so we don't paint text for them
}

Component* PlaylistComponent::refreshComponentForCell (int rowNumber, int columnId, bool isRowSelected,
                                                      Component* existingComponentToUpdate)
{
    if (columnId == 1 || columnId == 3) // Button columns
    {
        // Create a container component to hold the button with padding
        Component* container = existingComponentToUpdate;
        TextButton* button = nullptr;
        
        if (container == nullptr)
        {
            container = new Component();
            button = new TextButton();
            button->addListener(this);
            container->addAndMakeVisible(button);
        }
        else
        {
            // Get the existing button from the container
            button = dynamic_cast<TextButton*>(container->getChildComponent(0));
        }
        
        if (button != nullptr)
        {
            // Set button text and properties based on column
            if (columnId == 1) // Left deck button
            {
                button->setButtonText("Load");
                button->setComponentID(String(rowNumber) + "_left");
            }
            else // Right deck button (columnId == 3)
            {
                button->setButtonText("Load");  
                button->setComponentID(String(rowNumber) + "_right");
            }
            
            // Set button bounds with padding (1px padding on all sides)
            auto containerBounds = Rectangle<int>(0, 0, 80, tableComponent.getRowHeight());
            container->setSize(containerBounds.getWidth(), containerBounds.getHeight());
            button->setBounds(containerBounds.reduced(1));
        }
        
        return container;
    }
    
    return nullptr;
}

void PlaylistComponent::buttonClicked (Button* button)
{
    if (button == &loadButton)
    {
        // Open file chooser to load a new track
        fileChooser.launchAsync(FileBrowserComponent::openMode | FileBrowserComponent::canSelectFiles,
                               [this](const FileChooser& chooser)
                               {
                                   auto results = chooser.getResults();
                                   if (results.size() > 0)
                                   {
                                       addTrack(results[0]);
                                   }
                               });
        return;
    }
    
    // Handle deck loading buttons
    String componentId = button->getComponentID();
    int rowNumber = componentId.upToFirstOccurrenceOf("_", false, false).getIntValue();
    bool isLeftDeck = componentId.contains("left");
    
    if (rowNumber >= 0 && rowNumber < tracks.size())
    {
        if (isLeftDeck && deckGUI1 != nullptr)
        {
            // Load track into left deck (deck 1)
            if (tracks[rowNumber].filePath.existsAsFile())
            {
                deckGUI1->loadTrack(tracks[rowNumber].filePath);
                DBG("Loading " + tracks[rowNumber].title + " into left deck");
            }
            else
            {
                DBG("Track file does not exist: " + tracks[rowNumber].title);
            }
        }
        else if (!isLeftDeck && deckGUI2 != nullptr)
        {
            // Load track into right deck (deck 2)  
            if (tracks[rowNumber].filePath.existsAsFile())
            {
                deckGUI2->loadTrack(tracks[rowNumber].filePath);
                DBG("Loading " + tracks[rowNumber].title + " into right deck");
            }
            else
            {
                DBG("Track file does not exist: " + tracks[rowNumber].title);
            }
        }
    }
}

void PlaylistComponent::setDeckReferences(DeckGUI* deck1, DeckGUI* deck2)
{
    deckGUI1 = deck1;
    deckGUI2 = deck2;
}

void PlaylistComponent::addTrack(const juce::File& audioFile)
{
    if (audioFile.existsAsFile())
    {
        TrackInfo newTrack;
        newTrack.title = audioFile.getFileNameWithoutExtension().toStdString();
        newTrack.filePath = audioFile;
        tracks.push_back(newTrack);
        tableComponent.updateContent();
        
        // Auto-save playlist when new track is added
        savePlaylist();
    }
}

void PlaylistComponent::clearTracks()
{
    tracks.clear();
    tableComponent.updateContent();
    
    // Auto-save playlist when cleared
    savePlaylist();
}

void PlaylistComponent::savePlaylist()
{
    if (appProperties != nullptr)
    {
        auto* userSettings = appProperties->getUserSettings();
        if (userSettings != nullptr)
        {
            // Get current playlist size before clearing
            int currentPlaylistSize = userSettings->getIntValue("playlistSize", 0);
        
            // Clear existing playlist entries
            userSettings->removeValue("playlistSize");
            for (int i = 0; i < currentPlaylistSize; ++i)
            {
                userSettings->removeValue("track_" + String(i) + "_title");
                userSettings->removeValue("track_" + String(i) + "_path");
            }
            
            // Save current playlist
            userSettings->setValue("playlistSize", (int)tracks.size());
            for (int i = 0; i < tracks.size(); ++i)
            {
                userSettings->setValue("track_" + String(i) + "_title", String(tracks[i].title));
                userSettings->setValue("track_" + String(i) + "_path", tracks[i].filePath.getFullPathName());
            }
            
            appProperties->saveIfNeeded();
            DBG("Playlist saved with " + String(tracks.size()) + " tracks");
        }
    }
}

void PlaylistComponent::loadPlaylist()
{
    if (appProperties != nullptr)
    {
        auto* userSettings = appProperties->getUserSettings();
        if (userSettings != nullptr)
        {
            tracks.clear();
            
            int playlistSize = userSettings->getIntValue("playlistSize", 0);
            for (int i = 0; i < playlistSize; ++i)
            {
                String title = userSettings->getValue("track_" + String(i) + "_title");
                String path = userSettings->getValue("track_" + String(i) + "_path");
                
                if (title.isNotEmpty() && path.isNotEmpty())
                {
                    File audioFile(path);
                    if (audioFile.existsAsFile())
                    {
                        TrackInfo track;
                        track.title = title.toStdString();
                        track.filePath = audioFile;
                        tracks.push_back(track);
                    }
                    else
                    {
                        DBG("Saved track file no longer exists: " + path);
                    }
                }
            }
            
            tableComponent.updateContent();
            DBG("Playlist loaded with " + String(tracks.size()) + " tracks");
        }
    }
}


