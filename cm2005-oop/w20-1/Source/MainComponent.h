/*
  ==============================================================================

    This file was auto-generated!

  ==============================================================================
*/

#pragma once

#include "../JuceLibraryCode/JuceHeader.h"
#include "DJAudioPlayer.h"
#include "DeckGUI.h"
#include "MixerComponent.h"
#include "PlaylistComponent.h"


/**
 * Main component class that serves as the central audio application component
 * It handles audio routing, crossfading, and master volume control.
 */
class MainComponent : public AudioAppComponent {
public:
  /**
   * Constructor for MainComponent
   * Set application size
   * Request audio permissions
   * Add child components
   * Set deck references in playlist component
   * Setup mixer callbacks
   * Initialize mixer with default values to set proper initial gains
   * Start with both decks at equal volume
   * Start with 70% master volume
   */
  MainComponent();

  /**
   * Destructor for MainComponent
   * shuts down the audio device and clears the audio source.
   */
  ~MainComponent();

  /**
   * Prepares the main component for audio playback
   * @param samplesPerBlockExpected Expected number of samples per audio block
   * @param sampleRate The sample rate for audio processing
   */
  void prepareToPlay(int samplesPerBlockExpected, double sampleRate) override;

  /**
   * Fills the audio buffer with the next block of mixed audio data
   * @param bufferToFill Audio buffer to be filled with mixed audio samples
   */
  void getNextAudioBlock(const AudioSourceChannelInfo &bufferToFill) override;

  /**
   * Releases audio resources when the application is stopped
   */
  void releaseResources() override;

  /**
   * Handles the painting of the main component
   * @param g Graphics context for drawing operations
   */
  void paint(Graphics &g) override;

  /**
   * Handles the resizing of the main component and its child components
   */
  void resized() override;

  /**
   * Callback function for when the crossfader value changes
   * This function will adjust each deck's gain based on the crossfader value
   * @param value Crossfader value
   */
  void onCrossfaderChanged(double value);

  /**
   * Callback function for when the master volume changes
   * @param volume Master volume value
   */
  void onMasterVolumeChanged(double volume);

private:
  AudioFormatManager formatManager;
  AudioThumbnailCache thumbCache{100};

  DJAudioPlayer player1{formatManager};
  DeckGUI deckGUI1{&player1, formatManager, thumbCache};

  DJAudioPlayer player2{formatManager};
  DeckGUI deckGUI2{&player2, formatManager, thumbCache};

  MixerAudioSource mixerSource;

  PlaylistComponent playlistComponent;
  MixerComponent mixerComponent;

  JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(MainComponent)
};
