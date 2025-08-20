/*
  ==============================================================================

    DeckGUI.cpp
    Created: 13 Mar 2020 6:44:48pm
    Author:  matthew

  ==============================================================================
*/

#include "../JuceLibraryCode/JuceHeader.h"
#include "DeckGUI.h"

//==============================================================================
DeckGUI::DeckGUI(DJAudioPlayer* _player, 
                AudioFormatManager & 	formatManagerToUse,
                AudioThumbnailCache & 	cacheToUse
           ) : player(_player), 
               waveformDisplay(formatManagerToUse, cacheToUse)
{

    addAndMakeVisible(playButton);
    addAndMakeVisible(stopButton);
    addAndMakeVisible(loadButton);
       
    addAndMakeVisible(volSlider);
    addAndMakeVisible(speedSlider);
    addAndMakeVisible(posSlider);

    addAndMakeVisible(waveformDisplay);


    playButton.addListener(this);
    stopButton.addListener(this);
    loadButton.addListener(this);

    volSlider.addListener(this);
    speedSlider.addListener(this);
    posSlider.addListener(this);

    volSlider.setSliderStyle(Slider::LinearVertical);
    volSlider.setRange(0.0, 1.0);
    volSlider.setValue(0.5);
    
    speedSlider.setSliderStyle(Slider::LinearVertical);
    speedSlider.setRange(0.0, 100.0);
    speedSlider.setValue(1.0);

    posSlider.setSliderStyle(Slider::LinearHorizontal);
    posSlider.setRange(0.0, 1.0);

    // volSlider.setRange(0.0, 1.0);
    // speedSlider.setRange(0.0, 100.0);
    // posSlider.setRange(0.0, 1.0);
    playButton.setButtonText("PLAY");
    stopButton.setButtonText("PAUSE");
    loadButton.setButtonText("LOAD");

    startTimer(500);


}

DeckGUI::~DeckGUI()
{
    stopTimer();
}

void DeckGUI::paint (Graphics& g)
{
    /* This demo code just fills the component's background and
       draws some placeholder text to get you started.

       You should replace everything in this method with your own
       drawing code..
    */

    g.fillAll (getLookAndFeel().findColour (ResizableWindow::backgroundColourId));   // clear the background

    g.setColour (Colours::grey);
    g.drawRect (getLocalBounds(), 1);   // draw an outline around the component

    g.setColour (Colours::white);
    g.setFont (14.0f);
    g.drawText ("DeckGUI", getLocalBounds(),
                Justification::centred, true);   // draw some placeholder text
}

void DeckGUI::resized()
{
    auto area = getLocalBounds();
    area.removeFromTop(30); // Space for deck label
    
    // Layout according to your sketch:
    // Top: Waveform (full width)
    auto waveformArea = area.removeFromTop(area.getHeight() * 0.3);
    waveformDisplay.setBounds(waveformArea);
    
    // Middle section: Main area with volume slider on the right
    auto middleArea = area.removeFromBottom(60); // Leave space for buttons at bottom
    auto volumeArea = middleArea.removeFromRight(60);
    volSlider.setBounds(volumeArea);
    
    // Speed and position controls in the remaining middle area
    auto controlsArea = middleArea;
    speedSlider.setBounds(controlsArea.removeFromRight(60));
    posSlider.setBounds(controlsArea.removeFromTop(40));
    
    // Bottom: Play and Pause buttons
    auto buttonArea = area;
    int buttonWidth = buttonArea.getWidth() / 3;
    playButton.setBounds(buttonArea.removeFromLeft(buttonWidth));
    stopButton.setBounds(buttonArea.removeFromLeft(buttonWidth));
    loadButton.setBounds(buttonArea); // Remaining space
}

void DeckGUI::buttonClicked(Button* button)
{
    if (button == &playButton)
    {
        std::cout << "Play button was clicked " << std::endl;
        player->start();
    }
     if (button == &stopButton)
    {
        std::cout << "Stop button was clicked " << std::endl;
        player->stop();

    }
    if (button == &loadButton)
    {
       auto fileChooserFlags = 
        FileBrowserComponent::canSelectFiles;
        fChooser.launchAsync(fileChooserFlags, [this](const FileChooser& chooser)
        {
            File chosenFile = chooser.getResult();
            if (chosenFile.exists()){
                player->loadURL(URL{chooser.getResult()});
                waveformDisplay.loadURL(URL{chooser.getResult()});
            }
        });
    }
}

void DeckGUI::sliderValueChanged (Slider *slider)
{
    if (slider == &volSlider)
    {
        player->setGain(slider->getValue());
    }

    if (slider == &speedSlider)
    {
        player->setSpeed(slider->getValue());
    }
    
    if (slider == &posSlider)
    {
        player->setPositionRelative(slider->getValue());
    }
    
}

bool DeckGUI::isInterestedInFileDrag (const StringArray &files)
{
  std::cout << "DeckGUI::isInterestedInFileDrag" << std::endl;
  return true; 
}

void DeckGUI::filesDropped (const StringArray &files, int x, int y)
{
  std::cout << "DeckGUI::filesDropped" << std::endl;
  if (files.size() == 1)
  {
    player->loadURL(URL{File{files[0]}});
    waveformDisplay.loadURL(URL{File{files[0]}});
  }
}

void DeckGUI::timerCallback()
{
    //std::cout << "DeckGUI::timerCallback" << std::endl;
    waveformDisplay.setPositionRelative(
            player->getPositionRelative());
}


    

