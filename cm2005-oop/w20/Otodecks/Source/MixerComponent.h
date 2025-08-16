/*
  ==============================================================================

    MixerComponent.h
    Created: 16 Aug 2025 5:15:28pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class MixerComponent  : public juce::Component
{
public:
    MixerComponent();
    ~MixerComponent() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MixerComponent)
};
