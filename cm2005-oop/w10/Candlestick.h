#pragma once
#include <string>
#include <vector>
#include "CSVLine.h"

class Candlestick {
    public:
        Candlestick(std::vector<CSVLine> lines, double open);
        std::string getDate() const;
        int getYear() const;
        double getClose() const;
        double getOpen() const;
        double getHigh() const;
        double getLow() const;
    private:
        std::string date;
        int year;
        std::vector<CSVLine> lines;
        double open;
        double close;
        double calculateClose();
        double high;
        double calculateHigh();
        double low;
        double calculateLow();
};