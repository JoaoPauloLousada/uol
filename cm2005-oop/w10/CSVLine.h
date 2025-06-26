#pragma once
#include <string>
#include <vector>

class CSVLine {
    public:
        CSVLine(std::vector<std::string> tokens, std::unordered_map<std::string, int> columnMap);
        std::string getDate();
        int getYear();
        double getGB_temperature();
    private:
        int year;  
        std::string date;
        double GB_temperature;
};