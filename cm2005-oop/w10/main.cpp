#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include "CSVReader.h"
#include "Tokeniser.h"

int main() {
    std::cout << "Initial!" << std::endl;
    std::string csvFile = "opsd-weather_data-2020-09-16/weather_data.csv";
    CSVReader csvReader;
    std::vector<std::string> lines = csvReader.readCSV(csvFile);
    std::cout << "Number of lines: " << lines.size() << std::endl;
    std::unordered_map<std::string, int> columnMap;
    std::vector<std::string> headerTokens = Tokeniser::tokenise(lines[0], ',');
    int i = 0;
    for (std::string token : headerTokens)
    {
        columnMap[token] = i;
        i++;
    }
}