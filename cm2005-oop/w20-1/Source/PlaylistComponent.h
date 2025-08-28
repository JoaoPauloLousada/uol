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

/**
 * This class was written by me without assistance based on the code provided in the module,
 * the juce documentation and tutorials about how to use the juce library.
 * I adjusted the PlaylistComponent that have been built during the module
 * and added the functionality to load and save the playlist to persistent storage.
 * I also added the buttons to load the tracks to the decks.
 */

/**
 * PlaylistComponent - A component that displays a playlist of audio tracks
 * and allows the user to load and assign them to the decks
 */
class PlaylistComponent  : public juce::Component, 
                          public juce::TableListBoxModel,
                          public juce::Button::Listener
{
public:
    /** 
     * Constructor 
     * Initializes the playlist component and sets up the table, load button
     * and application properties
    */
    PlaylistComponent();

    /** 
     * Destructor
     * Saves the current playlist to persistent storage
    */
    ~PlaylistComponent() override;

    /** 
     * Paints the playlist component
     * @param Graphics - The graphics context to paint on
     */
    void paint (juce::Graphics&) override;

    /** 
     * Handles the resizing of the playlist component 
     */
    void resized() override;

    /** 
     * Returns the number of rows in the playlist table
     * @return The number of rows in the playlist table
     */
    int getNumRows() override;

    /** 
     * Paints the background of a specific row in the playlist table
     * @param Graphics - The graphics context to paint on
     * @param rowNumber - The row number of the cell
     * @param width - The width of the cell
     * @param height - The height of the cell
     * @param rowIsSelected - Whether the row is selected
     */
    void paintRowBackground (Graphics&,
                                     int rowNumber,
                                     int width, int height,
                                     bool rowIsSelected) override;

    /** 
     * Paints the content of a specific cell in the playlist table
     * @param Graphics - The graphics context to paint on
     * @param rowNumber - The row number of the cell
     * @param columnId - The column ID of the cell
     * @param width - The width of the cell
     * @param height - The height of the cell
     * @param rowIsSelected - Whether the row is selected
     */
    void paintCell (Graphics&,
                            int rowNumber,
                            int columnId,
                            int width, int height,
                            bool rowIsSelected) override;
    
    /** 
     * Refreshes the component for a specific cell in the playlist table
     * @param rowNumber - The row number of the cell
     * @param columnId - The column ID of the cell
     * @param isRowSelected - Whether the row is selected
     * @param existingComponentToUpdate - The existing component to update
     * @return The refreshed component
    */
    Component* refreshComponentForCell (int rowNumber, int columnId, bool isRowSelected,
                                       Component* existingComponentToUpdate) override;

    /** 
     * Handles button click events from the playlist interface
     * @param button - The button that was clicked
    */
    void buttonClicked (Button* button) override;

    /** 
     * Sets references to the two deck GUI components for track loading
     * @param deck1 - The first deck GUI component
     * @param deck2 - The second deck GUI component
    */
    void setDeckReferences(DeckGUI* deck1, DeckGUI* deck2);

    /** 
     * Adds a new audio track to the playlist 
     * @param audioFile - The audio file to add to the playlist
    */
    void addTrack(const juce::File& audioFile);
    
    /** 
     * Clears all tracks from the playlist 
     */
    void clearTracks();

    /** 
     * Saves the current playlist to persistent storage 
     */
    void savePlaylist();

    /** 
     * Loads a previously saved playlist from persistent storage 
     */
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
