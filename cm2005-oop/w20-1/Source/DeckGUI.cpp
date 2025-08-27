/*
  ==============================================================================

    DeckGUI.cpp
    Created: 13 Mar 2020 6:44:48pm
    Author:  matthew

  ==============================================================================
*/

#include "../JuceLibraryCode/JuceHeader.h"
#include "DeckGUI.h"
#include <cmath>

//==============================================================================
DeckGUI::DeckGUI(DJAudioPlayer* _player, 
                AudioFormatManager & 	formatManagerToUse,
                AudioThumbnailCache & 	cacheToUse
           ) : player(_player), 
               waveformDisplay(formatManagerToUse, cacheToUse),
               isUpdatingPosition(false)
{

    addAndMakeVisible(playButton);
    addAndMakeVisible(pauseButton);
    addAndMakeVisible(stopButton);
       
    addAndMakeVisible(volSlider);
    addAndMakeVisible(speedSlider);
    addAndMakeVisible(posSlider);

    addAndMakeVisible(waveformDisplay);


    playButton.addListener(this);
    pauseButton.addListener(this);
    stopButton.addListener(this);

    volSlider.addListener(this);
    speedSlider.addListener(this);
    posSlider.addListener(this);

    volSlider.setSliderStyle(Slider::LinearVertical);
    volSlider.setRange(0.0, 1.0);
    volSlider.setValue(0.5);
    
    speedSlider.setSliderStyle(Slider::LinearVertical);
    speedSlider.setRange(0.1, 3.0);  
    speedSlider.setValue(1.0);       

    posSlider.setSliderStyle(Slider::LinearHorizontal);
    posSlider.setRange(0.0, 1.0);
    posSlider.setValue(0.0);

    playButton.setButtonText("PLAY");
    pauseButton.setButtonText("PAUSE");
    stopButton.setButtonText("STOP");

    startTimer(500);


}

DeckGUI::~DeckGUI()
{
    stopTimer();
}

void DeckGUI::paint (Graphics& g)
{
    g.fillAll (getLookAndFeel().findColour (ResizableWindow::backgroundColourId));

    g.setColour (Colours::grey);
    g.drawRect (getLocalBounds(), 1);

    g.setColour (Colours::white);
    g.setFont (14.0f);
    g.drawText ("DeckGUI", getLocalBounds(),
                Justification::centred, true);
}

/**
 * This function was written by me based on the code provided in the lecture,
 * the JUCE documentation related to FlexBox 
 * and the JUCE examples and tutorials (mentioned in the report pdf)
 */
void DeckGUI::resized()
{
    auto area = getLocalBounds();
    area.removeFromTop(30);
    
    FlexBox mainLayout;
    mainLayout.flexDirection = FlexBox::Direction::column;
    
    FlexBox row1Layout;
    row1Layout.flexDirection = FlexBox::Direction::column;
    
    FlexItem waveformItem(waveformDisplay);
    waveformItem.height = 120;
    waveformItem.minHeight = 120;
    waveformItem.maxHeight = 120;
    
    FlexItem positionItem(posSlider);
    positionItem.height = 40;
    positionItem.minHeight = 40;
    positionItem.maxHeight = 40;
    
    row1Layout.items.add(waveformItem);
    row1Layout.items.add(positionItem);
    
    FlexBox row2Layout;
    row2Layout.flexDirection = FlexBox::Direction::row;
    
    FlexItem emptyColumn;
    emptyColumn.flexGrow = 0.6f;
    
    FlexItem speedItem(speedSlider);
    speedItem.flexGrow = 0.2f;
    
    FlexItem volumeItem(volSlider);
    volumeItem.flexGrow = 0.2f;
    
    row2Layout.items.add(emptyColumn);
    row2Layout.items.add(speedItem);
    row2Layout.items.add(volumeItem);
    
    FlexBox row3Layout;
    row3Layout.flexDirection = FlexBox::Direction::row;
    row3Layout.justifyContent = FlexBox::JustifyContent::spaceBetween;
    
    FlexItem playItem(playButton);
    playItem.flexGrow = 1.0f;
    playItem.height = 40;
    playItem.minHeight = 40;
    playItem.maxHeight = 40;
    playItem.margin = FlexItem::Margin(0, 5, 0, 0);
    
    FlexItem pauseItem(pauseButton);
    pauseItem.flexGrow = 1.0f;
    pauseItem.height = 40;
    pauseItem.minHeight = 40;
    pauseItem.maxHeight = 40;
    pauseItem.margin = FlexItem::Margin(0, 5, 0, 5);
    
    FlexItem stopItem(stopButton);
    stopItem.flexGrow = 1.0f;
    stopItem.height = 40;
    stopItem.minHeight = 40;
    stopItem.maxHeight = 40;
    stopItem.margin = FlexItem::Margin(0, 0, 0, 5);
    
    row3Layout.items.add(playItem);
    row3Layout.items.add(pauseItem);
    row3Layout.items.add(stopItem);
    
    FlexItem row1Item;
    row1Item.associatedFlexBox = &row1Layout;
    row1Item.height = 160;
    row1Item.minHeight = 160;
    row1Item.maxHeight = 160;
    
    FlexItem row2Item;
    row2Item.associatedFlexBox = &row2Layout;
    row2Item.flexGrow = 1.0f;
    
    FlexItem row3Item;
    row3Item.associatedFlexBox = &row3Layout;
    row3Item.height = 50;
    row3Item.minHeight = 50;
    row3Item.maxHeight = 50;
    row3Item.margin = FlexItem::Margin(10, 15, 10, 15);
    
    mainLayout.items.add(row1Item);
    mainLayout.items.add(row2Item);
    mainLayout.items.add(row3Item);
    
    mainLayout.performLayout(area);
}

void DeckGUI::buttonClicked(Button* button)
{
    if (button == &playButton)
    {
        std::cout << "Play button was clicked " << std::endl;
        player->start();
    }
    if (button == &pauseButton)
    {
        std::cout << "Pause button was clicked " << std::endl;
        player->stop();
    }
    if (button == &stopButton)
    {
        std::cout << "Stop button was clicked " << std::endl;
        player->stop();
        player->setPositionRelative(0.0);
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
        if (!isUpdatingPosition)
        {
            player->setPositionRelative(slider->getValue());
        }
    }
    
}

void DeckGUI::timerCallback()
{
    if (player == nullptr)
        return;
    
    double currentPosition = player->getPositionRelative();
    
    if (std::isnan(currentPosition) || std::isinf(currentPosition) || 
        currentPosition < 0.0 || currentPosition > 1.0)
    {
        return;
    }
    
    waveformDisplay.setPositionRelative(currentPosition);
    
    isUpdatingPosition = true;
    posSlider.setValue(currentPosition, dontSendNotification);
    isUpdatingPosition = false;
    
    if (currentPosition >= 0.99)
    {
        player->stop();
        player->setPositionRelative(0.0);
        
        std::cout << "Track finished - stopped and reset to beginning" << std::endl;
    }
}

void DeckGUI::loadTrack(const juce::File& audioFile)
{
    if (audioFile.existsAsFile())
    {
        player->loadURL(URL{audioFile});
        waveformDisplay.loadURL(URL{audioFile});
        std::cout << "Loaded track: " << audioFile.getFileName() << std::endl;
    }
}