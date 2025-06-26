#pragma once
#include <string>
#include <vector>
#include "CSVLine.h"

class Candlestick {
    public:
        Candlestick(std::vector<CSVLine> lines);
        std::string getDate();
        double getClose();
    private:
        std::string date;
        std::vector<CSVLine> lines;
        // double open;
        double close;
        double calculateClose();
        double high;
        double calculateHigh();
        double low;
        double calculateLow();
};