/*
  ==============================================================================

    AudioRouter.h
    Created: 16 Aug 2025 5:16:16pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class AudioRouter  : public juce::Component
{
public:
    AudioRouter();
    ~AudioRouter() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (AudioRouter)
};
