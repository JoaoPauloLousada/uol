/*
  ==============================================================================

    DeckAudioEngine.h
    Created: 16 Aug 2025 5:16:06pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class DeckAudioEngine  : public juce::Component
{
public:
    DeckAudioEngine();
    ~DeckAudioEngine() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (DeckAudioEngine)
};
