#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include "CSVReader.h"
#include "Tokeniser.h"
#include "CSVLine.h"
#include "CSVLineList.h"
#include "Candlestick.h"
#include "CandlestickPlotter.h"
#include <limits>
#include "Menu.h"

int main() {
    std::cout << "Starting..." << std::endl;

    // Read CSV file
    std::cout << "Reading CSV file" << std::endl;
    std::string csvFile = "opsd-weather_data-2020-09-16/weather_data.csv";
    CSVReader csvReader;
    std::vector<std::string> lines = csvReader.readCSV(csvFile);

    // Print number of lines
    std::cout << "Number of lines: " << lines.size() << std::endl;
    std::unordered_map<std::string, int> columnMap;
    std::vector<std::string> headerTokens = Tokeniser::tokenise(lines[0], ',');
    
    // Create columnMap
    int i = 0;
    for (std::string token : headerTokens)
    {
        columnMap[token] = i;
        i++;
    }

    // Create CSVLineList
    std::cout << "Creating CSVLineList" << std::endl;
    CSVLineList csvLineList;
    for (int i = 1; i < lines.size(); i++)
    {
        std::vector<std::string> tokens = Tokeniser::tokenise(lines[i], ',');
        CSVLine line(tokens, columnMap);
        csvLineList.addLine(line);
    }

    // Group lines by year
    csvLineList.groupByYear();

    // Initialise menu
    Menu menu(csvLineList);
    menu.run();
    std::cout << "Finishing..." << std::endl;
}
