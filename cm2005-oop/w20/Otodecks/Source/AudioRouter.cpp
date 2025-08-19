/*
  ==============================================================================

    AudioRouter.cpp
    Created: 16 Aug 2025 5:16:16pm
    Author:  joao

  ==============================================================================
*/

#include <JuceHeader.h>
#include "AudioRouter.h"

//==============================================================================
AudioRouter::AudioRouter()
{
    formatManager.registerBasicFormats();
    player.setSource (&mixer);
}

AudioRouter::~AudioRouter()
{
    player.setSource (nullptr);
    deviceManager.removeAudioCallback (&player);
}

void AudioRouter::initialiseAudio()
{
    deviceManager.initialise (0, 2, nullptr, true);
    deviceManager.addAudioCallback (&player);
}

void AudioRouter::addInput (juce::AudioSource* source)
{
    mixer.addInputSource (source, false);
}

void AudioRouter::removeInput (juce::AudioSource* source)
{
    mixer.removeInputSource (source);
}
