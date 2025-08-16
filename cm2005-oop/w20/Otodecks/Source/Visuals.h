/*
  ==============================================================================

    Visuals.h
    Created: 16 Aug 2025 5:17:32pm
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>
#include <juce_gui_basics/juce_gui_basics.h>

//==============================================================================
/*
*/
class Visuals  : public juce::LookAndFeel_V4
{
public:
    Visuals();
    ~Visuals() override = default;

//    void paint (juce::Graphics&) override;
//    void resized() override;
    // --- Optional: centralize your palette here ---
    struct Palette
    {
       juce::Colour bg           { 0xff141518 }; // app background
       juce::Colour panel        { 0xff1c1e22 }; // panels (decks/playlist)
       juce::Colour accent       { 0xff49a6ff }; // primary accent (buttons/thumbs)
       juce::Colour accentAlt    { 0xff7bd389 }; // secondary accent (meters/ok)
       juce::Colour text         { 0xffe6e6e6 }; // main text
       juce::Colour textMuted    { 0xff9aa3ab };
       juce::Colour outline      { 0xff30343a };
       juce::Colour danger       { 0xfff25f5c }; // (if needed)
       juce::Colour selection    { 0x3333aaff }; // semi transparent
    };
    const Palette& getPalette() const noexcept { return palette; }

        // --- Look&Feel custom draws (keep lightweight at first) ---
        void drawButtonBackground (juce::Graphics& g,
                                   juce::Button& button,
                                   const juce::Colour& backgroundColour,
                                   bool isMouseOverButton,
                                   bool isButtonDown) override;

        void drawLinearSlider (juce::Graphics& g,
                               int x, int y, int width, int height,
                               float sliderPos,
                               float minSliderPos,
                               float maxSliderPos,
                               const juce::Slider::SliderStyle,
                               juce::Slider& slider) override;

        void drawTableHeaderBackground (juce::Graphics& g, juce::TableHeaderComponent& header) override;

        // --- Optional: fonts ---
        juce::Font getTextButtonFont (juce::TextButton&, int buttonHeight) override
        {
            return juce::Font (juce::jmin (14, buttonHeight - 4)).boldened();
        }

private:
    Palette palette;
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (Visuals)
};
