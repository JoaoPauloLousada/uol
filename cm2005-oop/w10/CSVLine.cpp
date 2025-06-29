#include "CSVLine.h"
#include <vector>
#include <string>
#include <iostream>

CSVLine::CSVLine(std::vector<std::string>& _tokens, std::unordered_map<std::string, int>& _columnMap) : tokens(_tokens), columnMap(_columnMap)
{
    date = tokens[0];
    std::string yearString = date.substr(0, 4);
    try{
        year = std::stoi(yearString);
    }
    catch(const std::exception& e)
    {
        std::cout << "Error converting year string to int" << std::endl;
    }
}

std::string CSVLine::getDate()
{
    return date;
}

int CSVLine::getYear() const
{
    return year;
}

double CSVLine::getTemperature(std::string countryTemperatureColumn)
{
    try{
        return std::stod(tokens[columnMap[countryTemperatureColumn]]);
    }
    catch(const std::exception& e)
    {
        std::cout << "Error converting values from csv line" << std::endl;
        std::cerr << "Error: " << e.what() << std::endl;
        throw std::invalid_argument("Invalid country temperature column");
    }
}
