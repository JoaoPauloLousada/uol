#include "MainComponent.h"

//==============================================================================
MainComponent::MainComponent()
{
    // Initial size
    setSize (600, 400);
    setLookAndFeel (&visuals);
    // Create children
    deckA    = std::make_unique<DeckComponent>();
    deckB    = std::make_unique<DeckComponent>();
    playlist = std::make_unique<PlaylistComponent>();
    mixer    = std::make_unique<MixerComponent>();
    // Add to component tree (left, center, right)
    addAndMakeVisible (*deckA);
    addAndMakeVisible (centerPanel);   // acts as a container for playlist + mixer
    addAndMakeVisible (*deckB);
    // Add center children to center panel
    centerPanel.addAndMakeVisible (*playlist);
    centerPanel.addAndMakeVisible (*mixer);
    setSize (1100, 700);
}

MainComponent::~MainComponent()
{
    setLookAndFeel (nullptr);
}

//==============================================================================

void MainComponent::paint (juce::Graphics& g)
{
    // Use the standard background colour (Visuals can override this if desired)
    g.fillAll (getLookAndFeel().findColour (juce::ResizableWindow::backgroundColourId));

    // Optional: subtle separators to help visualise the skeleton during early development
    g.setColour (juce::Colours::black.withAlpha (0.08f));
    g.fillRect (getLocalBounds().removeFromLeft (1));
    g.fillRect (getLocalBounds().removeFromRight (1));
}

void MainComponent::resized()
{
    auto area = getLocalBounds().reduced (8);

    // ----- Root row: Deck A | Center | Deck B -----
    rootRow.items.clear();
    rootRow.flexDirection = juce::FlexBox::Direction::row;
    rootRow.flexWrap      = juce::FlexBox::Wrap::noWrap;
    rootRow.alignContent  = juce::FlexBox::AlignContent::stretch;
    rootRow.alignItems    = juce::FlexBox::AlignItems::stretch;
    rootRow.justifyContent= juce::FlexBox::JustifyContent::spaceBetween;

    // Decks: give them flexible width with sensible minimums
    constexpr float deckMinWidth   = 280.0f;
    constexpr float centerMinWidth = 340.0f;

    rootRow.items.add (juce::FlexItem (*deckA).withFlex (1.0f)
                                          .withMinWidth (deckMinWidth)
                                          .withMargin ({ 0, 8, 0, 0 }));

    rootRow.items.add (juce::FlexItem (centerPanel).withFlex (1.0f)
                                                  .withMinWidth (centerMinWidth)
                                                  .withMargin ({ 0, 8, 0, 8 }));

    rootRow.items.add (juce::FlexItem (*deckB).withFlex (1.0f)
                                          .withMinWidth (deckMinWidth)
                                          .withMargin ({ 0, 0, 0, 8 }));

    rootRow.performLayout (area);

    // ----- Center column: Playlist (top) | Mixer (bottom) -----
    auto centerBounds = centerPanel.getLocalBounds().reduced (8);

    centerColumn.items.clear();
    centerColumn.flexDirection = juce::FlexBox::Direction::column;
    centerColumn.flexWrap      = juce::FlexBox::Wrap::noWrap;
    centerColumn.alignContent  = juce::FlexBox::AlignContent::stretch;
    centerColumn.alignItems    = juce::FlexBox::AlignItems::stretch;
    centerColumn.justifyContent= juce::FlexBox::JustifyContent::spaceBetween;

    // Playlist gets ~2/3, Mixer ~1/3 of the center height; min heights safeguard small windows
    centerColumn.items.add (juce::FlexItem (*playlist).withFlex (2.0f)
                                                     .withMinHeight (180.0f)
                                                     .withMargin ({ 0, 0, 8, 0 }));

    centerColumn.items.add (juce::FlexItem (*mixer).withFlex (1.0f)
                                                   .withMinHeight (120.0f));

    centerColumn.performLayout (centerBounds);
}
