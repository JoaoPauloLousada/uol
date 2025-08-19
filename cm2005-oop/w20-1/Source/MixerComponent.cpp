/*
  ==============================================================================

    MixerComponent.cpp
    Created: 19 Aug 2025 9:05:39am
    Author:  joao

  ==============================================================================
*/


#include "MixerComponent.h"

//==============================================================================
MixerComponent::MixerComponent()
{
    // Setup crossfader
    addAndMakeVisible(crossfader);
    crossfader.setSliderStyle(Slider::LinearHorizontal);
    crossfader.setRange(0.0, 1.0, 0.01);
    crossfader.setValue(0.5); // Center position
    crossfader.addListener(this);
    
    // Setup master volume
    addAndMakeVisible(masterVolume);
    masterVolume.setSliderStyle(Slider::LinearVertical);
    masterVolume.setRange(0.0, 1.0, 0.01);
    masterVolume.setValue(0.7);
    masterVolume.addListener(this);
    
    // Setup labels
    addAndMakeVisible(crossfaderLabel);
    crossfaderLabel.setText("Crossfader", dontSendNotification);
    crossfaderLabel.setJustificationType(Justification::centred);
    
    addAndMakeVisible(masterVolumeLabel);
    masterVolumeLabel.setText("Master", dontSendNotification);
    masterVolumeLabel.setJustificationType(Justification::centred);
}

MixerComponent::~MixerComponent()
{
}

void MixerComponent::paint (Graphics& g)
{
    g.fillAll (Colours::darkgrey);
    
    g.setColour (Colours::white);
    g.drawRect (getLocalBounds(), 2);
    
    g.setColour (Colours::lightgrey);
    g.setFont (16.0f);
    g.drawText ("MIXER", getLocalBounds().removeFromTop(30),
                Justification::centred, true);
}

void MixerComponent::resized()
{
    auto area = getLocalBounds();
    area.removeFromTop(30); // Space for title
    
    auto crossfaderArea = area.removeFromTop(area.getHeight() / 2);
    crossfaderLabel.setBounds(crossfaderArea.removeFromTop(20));
    crossfader.setBounds(crossfaderArea.reduced(10));
    
    masterVolumeLabel.setBounds(area.removeFromTop(20));
    masterVolume.setBounds(area.reduced(20, 10));
}

void MixerComponent::sliderValueChanged (Slider *slider)
{
    if (slider == &crossfader)
    {
        // Handle crossfader change
        // This will be connected to the audio mixing logic
    }
    else if (slider == &masterVolume)
    {
        // Handle master volume change
        // This will be connected to the master output gain
    }
}

void MixerComponent::setCrossfaderValue(double value)
{
    crossfader.setValue(value, dontSendNotification);
}

double MixerComponent::getCrossfaderValue() const
{
    return crossfader.getValue();
}

void MixerComponent::setMasterVolume(double volume)
{
    masterVolume.setValue(volume, dontSendNotification);
}
