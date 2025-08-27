/*
  ==============================================================================

    This file was auto-generated!

  ==============================================================================
*/

#include "MainComponent.h"

//==============================================================================
MainComponent::MainComponent()
{
    setSize (1200, 600);

    if (RuntimePermissions::isRequired (RuntimePermissions::recordAudio)
        && ! RuntimePermissions::isGranted (RuntimePermissions::recordAudio))
    {
        RuntimePermissions::request (RuntimePermissions::recordAudio,
                                     [&] (bool granted) { if (granted)  setAudioChannels (2, 2); });
    }  
    else
    {
        setAudioChannels (0, 2);
    }  

    addAndMakeVisible(deckGUI1); 
    addAndMakeVisible(deckGUI2);  
    addAndMakeVisible(playlistComponent);
    addAndMakeVisible(mixerComponent);

    playlistComponent.setDeckReferences(&deckGUI1, &deckGUI2);
    
    mixerComponent.setCrossfaderCallback([this](double value) { onCrossfaderChanged(value); });
    mixerComponent.setMasterVolumeCallback([this](double volume) { onMasterVolumeChanged(volume); });
    
    onCrossfaderChanged(0.5);
    onMasterVolumeChanged(0.7);

    formatManager.registerBasicFormats();
}

MainComponent::~MainComponent()
{
    shutdownAudio();
}

//==============================================================================
void MainComponent::prepareToPlay (int samplesPerBlockExpected, double sampleRate)
{
    player1.prepareToPlay(samplesPerBlockExpected, sampleRate);
    player2.prepareToPlay(samplesPerBlockExpected, sampleRate);
    
    mixerSource.prepareToPlay(samplesPerBlockExpected, sampleRate);

    mixerSource.addInputSource(&player1, false);
    mixerSource.addInputSource(&player2, false);

 }
void MainComponent::getNextAudioBlock (const AudioSourceChannelInfo& bufferToFill)
{
    mixerSource.getNextAudioBlock(bufferToFill);
}

void MainComponent::releaseResources()
{
    player1.releaseResources();
    player2.releaseResources();
    mixerSource.releaseResources();
}

//==============================================================================
void MainComponent::paint (Graphics& g)
{
    g.fillAll (getLookAndFeel().findColour (ResizableWindow::backgroundColourId));
}

void MainComponent::resized()
{
    auto area = getLocalBounds();
        
    int deckWidth = area.getWidth() / 3;
    int centerWidth = area.getWidth() / 3;
    int topHeight = area.getHeight() / 2;
    int bottomHeight = area.getHeight() / 2;
    
    deckGUI1.setBounds(0, 0, deckWidth, area.getHeight());
    playlistComponent.setBounds(deckWidth, 0, centerWidth, topHeight);
    deckGUI2.setBounds(deckWidth + centerWidth, 0, deckWidth, area.getHeight());
    
    mixerComponent.setBounds(deckWidth, topHeight, centerWidth, bottomHeight);
}

/**
 * This function was written by me without assistance based on the code provided in the lecture and
 * the JUCE documentation
 */
void MainComponent::onCrossfaderChanged(double value)
{
    double deck1Gain, deck2Gain;
    
    if (value <= 0.5) 
    {
        deck1Gain = 1.0;
        deck2Gain = value * 2.0;
    }
    else 
    {
        deck1Gain = 2.0 * (1.0 - value);
        deck2Gain = 1.0;
    }
    
    player1.setGain(deck1Gain);
    player2.setGain(deck2Gain);
}

/**
 * This function was written by me without assistance based on the code provided in the lecture and
 * the JUCE documentation
 */
void MainComponent::onMasterVolumeChanged(double volume)
{
    double crossfaderValue = mixerComponent.getCrossfaderValue();
    
    double deck1Gain, deck2Gain;
    
    if (crossfaderValue <= 0.5) 
    {
        deck1Gain = volume;
        deck2Gain = volume * crossfaderValue * 2.0;
    }
    else 
    {
        deck1Gain = volume * 2.0 * (1.0 - crossfaderValue);
        deck2Gain = volume;
    }
    
    player1.setGain(deck1Gain);
    player2.setGain(deck2Gain);
}

