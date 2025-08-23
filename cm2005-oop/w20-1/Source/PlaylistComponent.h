/*
  ==============================================================================

    PlaylistComponent.h
    Created: 15 Aug 2025 8:40:03am
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>
#include <vector>
#include <string>
#include "DeckGUI.h"

//==============================================================================
/*
*/
class PlaylistComponent  : public juce::Component, 
                          public juce::TableListBoxModel,
                          public juce::Button::Listener
{
public:
    PlaylistComponent();
    ~PlaylistComponent() override;

    void paint (juce::Graphics&) override;
    void resized() override;
    int getNumRows() override;
    void paintRowBackground (Graphics&,
                                     int rowNumber,
                                     int width, int height,
                                     bool rowIsSelected) override;
    void paintCell (Graphics&,
                            int rowNumber,
                            int columnId,
                            int width, int height,
                            bool rowIsSelected) override;
    
    Component* refreshComponentForCell (int rowNumber, int columnId, bool isRowSelected,
                                       Component* existingComponentToUpdate) override;

    void buttonClicked (Button* button) override;
    
    void setDeckReferences(DeckGUI* deck1, DeckGUI* deck2);
    void addTrack(const juce::File& audioFile);
    void clearTracks();
    void savePlaylist();
    void loadPlaylist();

    
private:
    TableListBox tableComponent;
    TextButton loadButton{"Load Track"};
    juce::FileChooser fileChooser{"Select an audio file...", 
                                  juce::File::getSpecialLocation(juce::File::userMusicDirectory),
                                  "*.mp3;*.wav;"};
    
    struct TrackInfo {
        std::string title;
        juce::File filePath;
    };
    
    std::vector<TrackInfo> tracks;
    DeckGUI* deckGUI1;
    DeckGUI* deckGUI2;
    std::unique_ptr<ApplicationProperties> appProperties;
    
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (PlaylistComponent)
};
