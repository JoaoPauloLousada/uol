/*
  ==============================================================================

    Visuals.h
    Created: 16 Aug 2025 5:17:32pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class Visuals  : public juce::Component
{
public:
    Visuals();
    ~Visuals() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (Visuals)
};
