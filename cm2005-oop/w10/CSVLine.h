#pragma once
#include <string>
#include <vector>

class CSVLine {
    public:
        CSVLine(std::vector<std::string> tokens, std::unordered_map<std::string, int> columnMap);
        std::string getDate();
        int getYear() const;
        double getTemperature(std::string country);
    private:
        std::vector<std::string> tokens;
        std::unordered_map<std::string, int> columnMap;
        int year;  
        std::string date;
        double GB_temperature;
};