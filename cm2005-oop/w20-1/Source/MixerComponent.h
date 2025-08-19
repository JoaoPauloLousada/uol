/*
  ==============================================================================

    MixerComponent.h
    Created: 19 Aug 2025 9:05:39am
    Author:  joao

  ==============================================================================
*/

#pragma once

#include "../JuceLibraryCode/JuceHeader.h"

//==============================================================================
/**
 * MixerComponent - Simple mixer interface with crossfader and master controls
 * Follows encapsulation principle by keeping mixer controls separate from deck controls
 */
class MixerComponent : public Component, public Slider::Listener
{
public:
    MixerComponent();
    ~MixerComponent();

    void paint (Graphics&) override;
    void resized() override;
    
    /** implement Slider::Listener */
    void sliderValueChanged (Slider *slider) override;
    
    /** Set the crossfader value (0.0 = full left, 0.5 = center, 1.0 = full right) */
    void setCrossfaderValue(double value);
    
    /** Get the crossfader value */
    double getCrossfaderValue() const;
    
    /** Set master volume */
    void setMasterVolume(double volume);

private:
    Slider crossfader;
    Slider masterVolume;
    
    Label crossfaderLabel;
    Label masterVolumeLabel;
    
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MixerComponent)
};
