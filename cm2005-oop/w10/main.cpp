#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include "CSVReader.h"
#include "Tokeniser.h"
#include "CSVLine.h"
#include "CSVLineList.h"
#include "Candlestick.h"

int main() {
    std::cout << "Initial!" << std::endl;
    std::string csvFile = "opsd-weather_data-2020-09-16/weather_data.csv";
    // Read CSV file
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
    CSVLineList csvLineList;
    for (int i = 1; i < lines.size(); i++)
    {
        std::vector<std::string> tokens = Tokeniser::tokenise(lines[i], ',');
        CSVLine line(tokens, columnMap);
        csvLineList.addLine(line);
    }
    std::map<int, std::vector<CSVLine> > groupedLines = csvLineList.groupByYear();
    for (auto it = groupedLines.begin(); it != groupedLines.end(); it++)
    {
        std::cout << "Year: " << it->first << " Number of lines: " << it->second.size() << std::endl;
    }
    // Create candlesticks
    std::vector<Candlestick> candlesticks;
    double open = 0;
    for (auto it = groupedLines.begin(); it != groupedLines.end(); it++)
    {
        Candlestick candlestick(it->second, open);
        candlesticks.push_back(candlestick);
        open = candlestick.getClose();
    }
    for (Candlestick candlestick : candlesticks)
    {
        std::cout << "Date: " << candlestick.getDate() << " Open: " << candlestick.getOpen() << " Close: " << candlestick.getClose() << " High: " << candlestick.getHigh() << " Low: " << candlestick.getLow() << std::endl;
    }
}