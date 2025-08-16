#pragma once

#include <JuceHeader.h>
#include <juce_gui_basics/juce_gui_basics.h>
#include "Visuals.h"
#include "DeckComponent.h"
#include "PlaylistComponent.h"
#include "MixerComponent.h"

//==============================================================================
/*
    This component lives inside our window, and this is where you should put all
    your controls and content.
*/
class MainComponent  : public juce::Component
{
public:
    //==============================================================================
    MainComponent();
    ~MainComponent() override;

    //==============================================================================
    void paint (juce::Graphics&) override;
    void resized() override;

private:
    // Style
    Visuals visuals;
    // Left / Right decks
    std::unique_ptr<DeckComponent> deckA;
    std::unique_ptr<DeckComponent> deckB;
    // Center panel that hosts Playlist (top) and Mixer (bottom)
    juce::Component centerPanel;
    std::unique_ptr<PlaylistComponent> playlist;
    std::unique_ptr<MixerComponent> mixer;
    // Layout helpers
    juce::FlexBox rootRow;      // A | Center | B
    juce::FlexBox centerColumn; // Playlist (top) | Mixer (bottom)
    

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainComponent)
};
