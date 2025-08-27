/*
  ==============================================================================

    DeckGUI.h
    Created: 13 Mar 2020 6:44:48pm
    Author:  matthew

  ==============================================================================
*/

#pragma once

#include "../JuceLibraryCode/JuceHeader.h"
#include "DJAudioPlayer.h"
#include "WaveformDisplay.h"

//==============================================================================
/*
*/
class DeckGUI    : public Component,
                   public Button::Listener, 
                   public Slider::Listener, 
                   public Timer
{
public:
    /**
     * Constructor: Initializes the deck GUI with audio player and format management components
     * @param player Pointer to the DJAudioPlayer that handles audio playback
     * @param formatManagerToUse Reference to audio format manager for loading different audio formats
     * @param cacheToUse Reference to thumbnail cache for waveform generation
     */
    DeckGUI(DJAudioPlayer* player, 
           AudioFormatManager & 	formatManagerToUse,
           AudioThumbnailCache & 	cacheToUse );
    
    /**
     * Destructor: Cleans up resources when the DeckGUI is destroyed
     */
    ~DeckGUI();

    /**
     * Renders the deck GUI components to the screen
     * @param g Graphics context used for drawing the component
     */
    void paint (Graphics&) override;
    
    /**
     * Handles layout and positioning of child components when the deck is resized
     */
    void resized() override;

    /**
     * Responds to button click events (play, pause, stop buttons)
     * @param button Pointer to the button that was clicked
     */
    void buttonClicked (Button *) override;

    /**
     * Responds to slider value changes (volume, speed, position sliders)
     * @param slider Pointer to the slider whose value changed
     */
    void sliderValueChanged (Slider *slider) override;

    /**
     * Called periodically by timer to update the position slider and waveform display
     * Updates the GUI to reflect current playback position
     */
    void timerCallback() override; 

    /**
     * Loads an audio track into the deck for playback
     * @param audioFile Reference to the audio file to be loaded
     */
    void loadTrack(const juce::File& audioFile);

private:
    juce::FileChooser fChooser{"Select a file..."};

    TextButton playButton{"PLAY"};
    TextButton pauseButton{"PAUSE"};
    TextButton stopButton{"STOP"};
  
    Slider volSlider; 
    Slider speedSlider;
    Slider posSlider;

    WaveformDisplay waveformDisplay;

    DJAudioPlayer* player; 
    
    bool isUpdatingPosition;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (DeckGUI)
};
