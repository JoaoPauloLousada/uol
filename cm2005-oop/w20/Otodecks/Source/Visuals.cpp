/*
  ==============================================================================

    Visuals.cpp
    Created: 16 Aug 2025 5:17:32pm
    Author:  joao

  ==============================================================================
*/

#include "Visuals.h"

using namespace juce;

Visuals::Visuals()
: LookAndFeel_V4 (LookAndFeel_V4::getMidnightColourScheme()) // start from a dark base
{
    const auto& p = palette;

    // --- Global colours for common widgets ---
    setColour (ResizableWindow::backgroundColourId, p.bg);
    setColour (PopupMenu::backgroundColourId,       p.panel);
    setColour (PopupMenu::textColourId,             p.text);

    // Buttons
    setColour (TextButton::buttonColourId,          p.panel);
    setColour (TextButton::textColourOnId,          p.bg);
    setColour (TextButton::textColourOffId,         p.text);

    // Sliders
    setColour (Slider::thumbColourId,               p.accent);
    setColour (Slider::trackColourId,               p.outline);
    setColour (Slider::backgroundColourId,          p.panel);

    // Labels / Editors
    setColour (Label::textColourId,                 p.text);
    setColour (TextEditor::textColourId,            p.text);
    setColour (TextEditor::backgroundColourId,      p.panel);
    setColour (TextEditor::highlightColourId,       p.selection);

    // Table / List
    setColour (ListBox::backgroundColourId,         p.panel);
    setColour (ListBox::outlineColourId,            p.outline);
    setColour (TableHeaderComponent::textColourId,  p.textMuted);
    setColour (TableHeaderComponent::backgroundColourId, p.panel);

    // GroupComponent (useful for light borders)
    setColour (GroupComponent::outlineColourId,     p.outline);
    setColour (GroupComponent::textColourId,        p.text);
}

// --- Buttons: subtle hover/press effect + accent outline when toggled ---
void Visuals::drawButtonBackground (Graphics& g,
                                    Button& button,
                                    const Colour& /*backgroundColour*/,
                                    bool isMouseOver,
                                    bool isDown)
{
    auto bounds = button.getLocalBounds().toFloat();
    const auto& p = palette;

    auto base = palette.panel;
    if (isDown)        base = base.brighter (0.10f);
    else if (isMouseOver) base = base.brighter (0.05f);

    g.setColour (base);
    g.fillRoundedRectangle (bounds, 6.0f);

    // Outline (accent if toggle on)
    auto outline = button.getToggleState() ? p.accent : p.outline;
    g.setColour (outline);
    g.drawRoundedRectangle (bounds.reduced (0.5f), 6.0f, 1.0f);
}

// --- Sliders: neutral track, coloured thumb; supports horizontal/vertical ---
void Visuals::drawLinearSlider (Graphics& g,
                                int x, int y, int w, int h,
                                float sliderPos,
                                float /*minPos*/,
                                float /*maxPos*/,
                                const Slider::SliderStyle style,
                                Slider& s)
{
    const auto& p = palette;
    auto bounds = Rectangle<float> ((float) x, (float) y, (float) w, (float) h);

    // Track
    g.setColour (p.outline.withAlpha (0.9f));
    if (style == Slider::LinearBar || style == Slider::LinearHorizontal)
    {
        auto track = bounds.withHeight (4.0f).withCentre (bounds.getCentre());
        g.fillRoundedRectangle (track, 2.0f);

        // Filled portion (optional subtle)
        g.setColour (p.accent.withAlpha (0.25f));
        auto filled = Rectangle<float> (track.getX(), track.getY(), sliderPos - track.getX(), track.getHeight());
        g.fillRoundedRectangle (filled, 2.0f);

        // Thumb
        g.setColour (p.accent);
        g.fillRoundedRectangle (Rectangle<float> (8.0f, track.getHeight() * 2.5f)
                                    .withCentre (Point<float> (sliderPos, track.getCentreY())), 3.5f);
    }
    else // Vertical styles
    {
        auto track = bounds.withWidth (4.0f).withCentre (bounds.getCentre());
        g.fillRoundedRectangle (track, 2.0f);

        g.setColour (p.accent.withAlpha (0.25f));
        auto filled = Rectangle<float> (track.getX(),
                                        sliderPos,
                                        track.getWidth(),
                                        (track.getBottom() - sliderPos));
        g.fillRoundedRectangle (filled, 2.0f);

        g.setColour (p.accent);
        g.fillRoundedRectangle (Rectangle<float> (track.getWidth() * 2.5f, 8.0f)
                                    .withCentre (Point<float> (track.getCentreX(), sliderPos)), 3.5f);
    }
}

// --- Table header: flat bar with subtle bottom line ---
void Visuals::drawTableHeaderBackground (Graphics& g, TableHeaderComponent& header)
{
    const auto& p = palette;
    auto r = header.getLocalBounds().toFloat();

    g.setColour (p.panel.brighter (0.04f));
    g.fillRect (r);

    g.setColour (p.outline);
    g.fillRect (r.removeFromBottom (1.0f));
}
