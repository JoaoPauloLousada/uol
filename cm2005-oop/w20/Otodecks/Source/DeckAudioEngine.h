/*
  ==============================================================================

    DeckAudioEngine.h
    Created: 16 Aug 2025 5:16:06pm
    Author:  joao

  ==============================================================================
*/

#pragma once
#include <juce_audio_utils/juce_audio_utils.h>

//==============================================================================
/*
*/
class DeckAudioEngine
{
public:
    DeckAudioEngine();
    ~DeckAudioEngine();
    
    // Connect this engine to a mixer via this AudioSource
    juce::AudioSource* getAudioSource() noexcept { return resampler.get(); }
    // Media
    bool loadFile (const juce::File& file, juce::AudioFormatManager& fm);
    void start();                 // play
    void stop();                  // pause/stop
    // Params
    void setGain (float g);       // 0..1 (volume)
    void setMuted (bool m);       // hard mute (overrides gain to 0)
    bool isMuted() const noexcept { return muted; }
    /** Speed ratio. 1.0 = normal, 0.5 = half, 2.0 = double. */
    void setSpeedRatio (double ratio);
    double getSpeedRatio() const noexcept { return speedRatio; }
    /** For UI feedback (e.g., waveform time) */
    double getLengthInSeconds() const;
    double getCurrentTime() const;
    void   setPosition (double seconds);
    /** Mixer will call these via MixerAudioSource → ResamplingAudioSource → TransportSource. */
   void prepareToPlay (int samplesPerBlockExpected, double sampleRate);
   void releaseResources();

private:
    std::unique_ptr<juce::AudioFormatReaderSource> readerSource;
    std::unique_ptr<juce::ResamplingAudioSource>   resampler;     // wraps transport
    juce::AudioTransportSource                     transport;
    bool   muted       = false;
    float  gain        = 1.0f;   // user volume
    double speedRatio  = 1.0;    // playback speed
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (DeckAudioEngine)
};
