/*
  ==============================================================================

    AudioRouter.h
    Created: 16 Aug 2025 5:16:16pm
    Author:  joao

  ==============================================================================
*/

#pragma once


//==============================================================================
/*
*/
class AudioRouter
{
public:
    AudioRouter();
    ~AudioRouter();
    
    juce::AudioFormatManager& getFormatManager() noexcept { return formatManager; }

    /** Adds a deck into the mixer; call once per DeckAudioEngine. */
    void addInput (juce::AudioSource* source);
    void removeInput (juce::AudioSource* source);

    /** Device init (stereo out, no input). */
    void initialiseAudio();

private:
    juce::AudioDeviceManager deviceManager;
    juce::AudioSourcePlayer  player;
    juce::MixerAudioSource   mixer;

    juce::AudioFormatManager formatManager;
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (AudioRouter)
};
