#include "CSVLine.h"
#include <vector>
#include <string>
#include <iostream>

CSVLine::CSVLine(std::vector<std::string> tokens, std::unordered_map<std::string, int> columnMap)
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
    try{
        GB_temperature = std::stod(tokens[columnMap["GB_temperature"]]);
    }
    catch(const std::exception& e)
    {
        std::cout << "Error converting values from csv line" << std::endl;
        std::cerr << "Error: " << e.what() << std::endl;
    }
}

std::string CSVLine::getDate()
{
    return date;
}

int CSVLine::getYear()
{
    return year;
}
