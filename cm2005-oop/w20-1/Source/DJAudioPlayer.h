/*
  ==============================================================================

    DJAudioPlayer.h
    Created: 10 Aug 2025 8:35:47am
    Author:  joao

  ==============================================================================
*/

#pragma once

#include "../JuceLibraryCode/JuceHeader.h"

/**
 * Audio player class that handles audio file playback, transport control, and
 * audio processing This class inherits from AudioSource and provides
 * functionality for loading, playing, stopping, and controlling audio playback
 * with features like gain control, speed adjustment, and position seeking.
 */
class DJAudioPlayer : public AudioSource {
public:
  /**
   * Constructor for DJAudioPlayer
   * @param _formatManager Reference to the audio format manager for handling
   * different audio formats
   */
  DJAudioPlayer(AudioFormatManager &_formatManager);

  /**
   * Destructor for DJAudioPlayer
   */
  ~DJAudioPlayer();

  /**
   * Prepares the audio player for playback
   * @param samplesPerBlockExpected Expected number of samples per audio block
   * @param sampleRate The sample rate for audio processing
   */
  void prepareToPlay(int samplesPerBlockExpected, double sampleRate) override;

  /**
   * Fills the audio buffer with the next block of audio data
   * @param bufferToFill Audio buffer to be filled with audio samples
   */
  void getNextAudioBlock(const AudioSourceChannelInfo &bufferToFill) override;

  /**
   * Releases audio resources when playback is stopped
   */
  void releaseResources() override;

  /**
   * Loads an audio file from the specified URL
   * @param audioURL URL pointing to the audio file to load
   */
  void loadURL(URL audioURL);

  /**
   * Sets the gain (volume) of the audio player
   * @param gain Gain value
   */
  void setGain(double gain);

  /**
   * Sets the playback speed ratio
   * @param ratio Speed ratio
   */
  void setSpeed(double ratio);

  /**
   * Sets the playback position in seconds
   * @param posInSecs Position in seconds from the start of the audio file
   */
  void setPosition(double posInSecs);

  /**
   * Sets the playback position as a relative value
   * @param pos Relative position
   */
  void setPositionRelative(double pos);

  /**
   * Starts audio playback
   */
  void start();

  /**
   * Stops audio playback
   */
  void stop();

  /**
   * Gets the current playback position as a relative value
   * @return Relative position
   */
  double getPositionRelative();

private:
  AudioFormatManager &formatManager;
  std::unique_ptr<AudioFormatReaderSource> readerSource;
  AudioTransportSource transportSource;
  ResamplingAudioSource resampleSource{&transportSource, false, 2};
};
