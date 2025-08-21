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
    speedSlider.setRange(0.0, 100.0);
    speedSlider.setValue(1.0);

    posSlider.setSliderStyle(Slider::LinearHorizontal);
    posSlider.setRange(0.0, 1.0);

    // volSlider.setRange(0.0, 1.0);
    // speedSlider.setRange(0.0, 100.0);
    // posSlider.setRange(0.0, 1.0);
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
    
    // Create main layout: 3 rows
    FlexBox mainLayout;
    mainLayout.flexDirection = FlexBox::Direction::column;
    
    // ROW 1: Waveform and Position slider (stacked vertically)
    FlexBox row1Layout;
    row1Layout.flexDirection = FlexBox::Direction::column;
    
    // Waveform (fixed height)
    FlexItem waveformItem(waveformDisplay);
    waveformItem.height = 120;
    waveformItem.minHeight = 120;
    waveformItem.maxHeight = 120;
    
    // Position slider (fixed height)
    FlexItem positionItem(posSlider);
    positionItem.height = 40;
    positionItem.minHeight = 40;
    positionItem.maxHeight = 40;
    
    row1Layout.items.add(waveformItem);
    row1Layout.items.add(positionItem);
    
    // ROW 2: Three columns (Empty 60%, Speed slider, Volume slider)
    FlexBox row2Layout;
    row2Layout.flexDirection = FlexBox::Direction::row;
    
    // Column 1: Empty space (60% width)
    FlexItem emptyColumn;
    emptyColumn.flexGrow = 0.6f; // 60% of the width
    
    // Column 2: Speed slider
    FlexItem speedItem(speedSlider);
    speedItem.flexGrow = 0.2f; // 20% of the width
    
    // Column 3: Volume slider  
    FlexItem volumeItem(volSlider);
    volumeItem.flexGrow = 0.2f; // 20% of the width
    
    row2Layout.items.add(emptyColumn);
    row2Layout.items.add(speedItem);
    row2Layout.items.add(volumeItem);
    
    // ROW 3: Three columns for buttons with spacing
    FlexBox row3Layout;
    row3Layout.flexDirection = FlexBox::Direction::row;
    row3Layout.justifyContent = FlexBox::JustifyContent::spaceBetween;
    
    // Play button
    FlexItem playItem(playButton);
    playItem.flexGrow = 1.0f;
    playItem.height = 40;
    playItem.minHeight = 40;
    playItem.maxHeight = 40;
    playItem.margin = FlexItem::Margin(0, 5, 0, 0); // right margin of 5px
    
    // Pause button
    FlexItem pauseItem(pauseButton);
    pauseItem.flexGrow = 1.0f;
    pauseItem.height = 40;
    pauseItem.minHeight = 40;
    pauseItem.maxHeight = 40;
    pauseItem.margin = FlexItem::Margin(0, 5, 0, 5); // left and right margin of 5px
    
    // Stop button
    FlexItem stopItem(stopButton);
    stopItem.flexGrow = 1.0f;
    stopItem.height = 40;
    stopItem.minHeight = 40;
    stopItem.maxHeight = 40;
    stopItem.margin = FlexItem::Margin(0, 0, 0, 5); // left margin of 5px
    
    row3Layout.items.add(playItem);
    row3Layout.items.add(pauseItem);
    row3Layout.items.add(stopItem);
    
    // Assemble the 3 rows into main layout
    FlexItem row1Item;
    row1Item.associatedFlexBox = &row1Layout;
    row1Item.height = 160; // 120 (waveform) + 40 (position)
    row1Item.minHeight = 160;
    row1Item.maxHeight = 160;
    
    FlexItem row2Item;
    row2Item.associatedFlexBox = &row2Layout;
    row2Item.flexGrow = 1.0f; // Take remaining space
    
    FlexItem row3Item;
    row3Item.associatedFlexBox = &row3Layout;
    row3Item.height = 50;
    row3Item.minHeight = 50;
    row3Item.maxHeight = 50;
    row3Item.margin = FlexItem::Margin(10, 15, 10, 15); // top, right, bottom, left padding
    
    mainLayout.items.add(row1Item);
    mainLayout.items.add(row2Item);
    mainLayout.items.add(row3Item);
    
    // Apply the layout
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
        player->stop(); // Pause by stopping without resetting position
    }
    if (button == &stopButton)
    {
        std::cout << "Stop button was clicked " << std::endl;
        player->stop();
        player->setPositionRelative(0.0); // Reset position to beginning
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

void DeckGUI::loadTrack(const juce::File& audioFile)
{
    if (audioFile.existsAsFile())
    {
        player->loadURL(URL{audioFile});
        waveformDisplay.loadURL(URL{audioFile});
        std::cout << "Loaded track: " << audioFile.getFileName() << std::endl;
    }
}


    

