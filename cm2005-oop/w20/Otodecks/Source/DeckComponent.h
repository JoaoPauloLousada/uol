/*
  ==============================================================================

    DeckComponent.h
    Created: 16 Aug 2025 5:15:00pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class DeckComponent  : public juce::Component
{
public:
    DeckComponent();
    ~DeckComponent() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (DeckComponent)
};
