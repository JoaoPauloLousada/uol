#pragma once
#include <string>
#include <vector>

class CSVReader {
    public:
        std::vector<std::string> readCSV(std::string csvFile);
};