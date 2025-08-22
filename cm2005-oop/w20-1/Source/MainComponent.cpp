/*
  ==============================================================================

    This file was auto-generated!

  ==============================================================================
*/

#include "MainComponent.h"

//==============================================================================
MainComponent::MainComponent()
{
    // Make sure you set the size of the component after
    // you add any child components.
    setSize (1200, 600);

    // Some platforms require permissions to open input channels so request that here
    if (RuntimePermissions::isRequired (RuntimePermissions::recordAudio)
        && ! RuntimePermissions::isGranted (RuntimePermissions::recordAudio))
    {
        RuntimePermissions::request (RuntimePermissions::recordAudio,
                                     [&] (bool granted) { if (granted)  setAudioChannels (2, 2); });
    }  
    else
    {
        // Specify the number of input and output channels that we want to open
        setAudioChannels (0, 2);
    }  

    addAndMakeVisible(deckGUI1); 
    addAndMakeVisible(deckGUI2);  
    addAndMakeVisible(playlistComponent);
    addAndMakeVisible(mixerComponent);

    // Set deck references in playlist component
    playlistComponent.setDeckReferences(&deckGUI1, &deckGUI2);
    
    // Setup mixer callbacks
    mixerComponent.setCrossfaderCallback([this](double value) { onCrossfaderChanged(value); });
    mixerComponent.setMasterVolumeCallback([this](double volume) { onMasterVolumeChanged(volume); });
    
    // Initialize mixer with default values to set proper initial gains
    onCrossfaderChanged(0.5);  // Start with both decks at equal volume
    onMasterVolumeChanged(0.7);  // Start with 70% master volume

    formatManager.registerBasicFormats();
}

MainComponent::~MainComponent()
{
    // This shuts down the audio device and clears the audio source.
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
    // This will be called when the audio device stops, or when it is being
    // restarted due to a setting change.

    // For more details, see the help for AudioProcessor::releaseResources()
    player1.releaseResources();
    player2.releaseResources();
    mixerSource.releaseResources();
}

//==============================================================================
void MainComponent::paint (Graphics& g)
{
    // (Our component is opaque, so we must completely fill the background with a solid colour)
    g.fillAll (getLookAndFeel().findColour (ResizableWindow::backgroundColourId));

    // You can add your drawing code here!
}

void MainComponent::resized()
{
//    deckGUI1.setBounds(0, 0, getWidth()/2, getHeight()/2);
//    deckGUI2.setBounds(getWidth()/2, 0, getWidth()/2, getHeight()/2);
//    playlistComponent.setBounds(0, getHeight()/2, getWidth(), getHeight()/2);
    auto area = getLocalBounds();
        
    int deckWidth = area.getWidth() / 3;  // Each deck takes 1/3 of width
    int centerWidth = area.getWidth() / 3; // Center section takes 1/3 of width
    int topHeight = area.getHeight() / 2;  // Top half for playlist
    int bottomHeight = area.getHeight() / 2; // Bottom half for mixer
    
    deckGUI1.setBounds(0, 0, deckWidth, area.getHeight());
    playlistComponent.setBounds(deckWidth, 0, centerWidth, topHeight);
    deckGUI2.setBounds(deckWidth + centerWidth, 0, deckWidth, area.getHeight());
    
    mixerComponent.setBounds(deckWidth, topHeight, centerWidth, bottomHeight);
}

void MainComponent::onCrossfaderChanged(double value)
{
    // Crossfader logic: 0.0 = full left (deck1), 0.5 = center (both equal), 1.0 = full right (deck2)
    // Calculate gains for each deck based on crossfader position
    double deck1Gain, deck2Gain;
    
    if (value <= 0.5) 
    {
        // Crossfader is on the left half - fade from deck1 only to both decks equally
        deck1Gain = 1.0;  // Deck 1 always at full volume when crossfader is left of center
        deck2Gain = value * 2.0;  // Deck 2 fades in from 0 to 1 as crossfader moves to center
    }
    else 
    {
        // Crossfader is on the right half - fade from both decks equally to deck2 only
        deck1Gain = 2.0 * (1.0 - value);  // Deck 1 fades out from 1 to 0 as crossfader moves right
        deck2Gain = 1.0;  // Deck 2 always at full volume when crossfader is right of center
    }
    
    // Apply the calculated gains to each deck
    player1.setGain(deck1Gain);
    player2.setGain(deck2Gain);
}

void MainComponent::onMasterVolumeChanged(double volume)
{
    // Master volume affects the overall output by scaling both deck gains
    // We'll apply master volume by adjusting the mixer source gain
    // For now, we'll apply it to both players equally and maintain crossfader ratios
    
    // Get current crossfader value to maintain the balance
    double crossfaderValue = mixerComponent.getCrossfaderValue();
    
    // Recalculate and apply gains with master volume scaling
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

