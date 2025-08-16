/*
  ==============================================================================

    TrackItem.h
    Created: 16 Aug 2025 5:17:00pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>

//==============================================================================
/*
*/
class TrackItem  : public juce::Component
{
public:
    TrackItem();
    ~TrackItem() override;

    void paint (juce::Graphics&) override;
    void resized() override;

private:
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TrackItem)
};
