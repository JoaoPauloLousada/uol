#include "CSVReader.h"
#include <exception>
#include <string>
#include <vector>
#include <iostream>
#include <fstream>

std::vector<std::string> CSVReader::readCSV(std::string csvFilename)
{
    std::vector<std::string> lines;
    std::ifstream csvFile{csvFilename};
    std::string line;
    int lineNumber = 0;
    if (csvFile.is_open())
    {
        while (std::getline(csvFile, line))
        {
            try {
                lines.push_back(line);
            }catch(const std::exception& e)
            {
                std::cout << "Something went wrong on line " << lineNumber << std::endl;
            }
            lineNumber++;
        }
        csvFile.close();
    }
    else
    {
        std::cout << "Problem opening file " << csvFilename << std::endl;
    }
    return lines;
}