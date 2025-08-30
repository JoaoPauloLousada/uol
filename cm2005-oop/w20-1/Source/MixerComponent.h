/*
  ==============================================================================

    MixerComponent.h
    Created: 19 Aug 2025 9:05:39am
    Author:  joao

  ==============================================================================
*/

#pragma once

#include "../JuceLibraryCode/JuceHeader.h"
#include <functional>

//==============================================================================

/**
 * This class was written by me without assistance based on the code provided in
 * the module, the juce documentation and tutorials about how to use the juce
 * library.
 */

/**
 * MixerComponent - Mixer interface with crossfader and master controls
 * This mixes the audio from the two decks and allows the user to control
 * the master volume.
 * Uses callback pattern to communicate mixer changes to the main audio
 * component
 */
class MixerComponent : public Component, public Slider::Listener {
public:
  /**
   * Constructor - Initializes the mixer component with default values
   * Sets up the crossfader and master volume sliders with appropriate ranges
   * and labels for the DJ mixing interface
   */
  MixerComponent();

  /**
   * Destructor
   */
  ~MixerComponent();

  /**
   * Paint method - Renders the mixer component's visual representation
   * @param g - Graphics context for drawing operations
   */
  void paint(Graphics &g) override;

  /**
   * Resized method - Handles component size changes and repositioning
   * Arranges the crossfader and master volume controls when the component
   * dimensions change.
   */
  void resized() override;

  /**
   * Slider value change handler - Responds to user interactions with sliders.
   * Handles crossfader and master volume slider movements and trigger
   * appropriate callbacks
   * @param slider - Pointer to the slider that triggered the change
   */
  void sliderValueChanged(Slider *slider) override;

  /**
   * Sets the crossfader value
   * @param value - Crossfader position
   */
  void setCrossfaderValue(double value);

  /**
   * Retrieves the current crossfader position value
   * @return Current crossfader value
   */
  double getCrossfaderValue() const;

  /**
   * Sets the master volume level for the entire mix
   * @param volume - Master volume level
   */
  void setMasterVolume(double volume);

  /**
   * Retrieves the current master volume level
   * @return Current master volume value
   */
  double getMasterVolume() const;

  /**
   * Registers a callback function for crossfader value changes.
   * @param callback - Function to be called when crossfader value changes
   */
  void setCrossfaderCallback(std::function<void(double)> callback);

  /**
   * Registers a callback function for master volume changes.
   * @param callback - Function to be called when master volume changes
   */
  void setMasterVolumeCallback(std::function<void(double)> callback);

private:
  Slider crossfader;
  Slider masterVolume;

  Label crossfaderLabel;
  Label masterVolumeLabel;

  // Callback functions for mixer control changes
  std::function<void(double)> crossfaderCallback;
  std::function<void(double)> masterVolumeCallback;

  JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(MixerComponent)
};
