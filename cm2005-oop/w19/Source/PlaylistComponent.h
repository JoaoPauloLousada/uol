/*
  ==============================================================================

    PlaylistComponent.h
    Created: 15 Aug 2025 8:40:03am
    Author:  joao

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>
#include <vector>
#include <string>
//==============================================================================
/*
*/
class PlaylistComponent  : public juce::Component, public juce::TableListBoxModel, public Button::Listener
{
public:
    PlaylistComponent();
    ~PlaylistComponent() override;

    void paint (juce::Graphics&) override;
    void resized() override;
    int getNumRows() override;
    void paintRowBackground (Graphics&,
                                     int rowNumber,
                                     int width, int height,
                                     bool rowIsSelected) override;
    void paintCell (Graphics&,
                            int rowNumber,
                            int columnId,
                            int width, int height,
                            bool rowIsSelected) override;
    Component* refreshComponentForCell (int rowNumber, int columnId, bool isRowSelected,
                                                Component* existingComponentToUpdate) override;
    void buttonClicked (Button*) override;


    
private:
    TableListBox tableComponent;
    std::vector<std::string> trackTitles;
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (PlaylistComponent)
};
