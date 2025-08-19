/*
  ==============================================================================

    DeckAudioEngine.cpp
    Created: 16 Aug 2025 5:16:06pm
    Author:  joao

  ==============================================================================
*/

#include "DeckAudioEngine.h"
#include <JuceHeader.h>

//==============================================================================

using namespace juce;

DeckAudioEngine::DeckAudioEngine()
{
    resampler = std::make_unique<ResamplingAudioSource> (&transport, false, 2);
    transport.setGain (gain);
}

DeckAudioEngine::~DeckAudioEngine()
{
    transport.setSource (nullptr);
    resampler.reset();
    readerSource.reset();
}

bool DeckAudioEngine::loadFile (const File& file, AudioFormatManager& fm)
{
    stop();

    std::unique_ptr<AudioFormatReader> reader (fm.createReaderFor (file));
    if (reader == nullptr)
    {
        return false;
    }

    const double sampleRate = reader->sampleRate;
    
    // Transport takes ownership of a ReaderSource (not the reader itself)
    readerSource.reset(new AudioFormatReaderSource(reader.release(), true));
    transport.setSource (readerSource.get(), 0, nullptr, sampleRate);

    setPosition (0.0);
    return true;
}

void DeckAudioEngine::start()
{
    if (transport.getLengthInSeconds() > 0.0)
    {
        transport.start();
    }
}

void DeckAudioEngine::stop()
{
    transport.stop();
}

void DeckAudioEngine::setGain (float g)
{
    gain = juce::jlimit (0.0f, 1.0f, g);
    transport.setGain (muted ? 0.0f : gain);
}

void DeckAudioEngine::setMuted (bool m)
{
    muted = m;
    transport.setGain (muted ? 0.0f : gain);
}

void DeckAudioEngine::setSpeedRatio (double ratio)
{
    speedRatio = juce::jlimit (0.25, 2.0, ratio);
    resampler->setResamplingRatio (1.0 / speedRatio); // >1 speeds up, so invert for ResamplingAudioSource
}

double DeckAudioEngine::getLengthInSeconds() const
{
    return transport.getLengthInSeconds();
}

double DeckAudioEngine::getCurrentTime() const
{
    return transport.getCurrentPosition();
}

void DeckAudioEngine::setPosition (double seconds)
{
    transport.setPosition (juce::jlimit (0.0, getLengthInSeconds(), seconds));
}

void DeckAudioEngine::prepareToPlay (int samplesPerBlockExpected, double sampleRate)
{
    transport.prepareToPlay (samplesPerBlockExpected, sampleRate);
    resampler->prepareToPlay (samplesPerBlockExpected, sampleRate);
}

void DeckAudioEngine::releaseResources()
{
    resampler->releaseResources();
    transport.releaseResources();
}

