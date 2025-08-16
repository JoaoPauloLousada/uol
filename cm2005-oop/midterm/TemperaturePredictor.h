/**
 * This code was written by me, without assistance.
 */
#pragma once

#include <vector>
#include <utility>
#include <string>
#include "CSVLineList.h"
#include "CountryFilter.h"
/**
    This class is used to predict the temperature of a country for a given number of years.
    It uses the simple method of calculating the average yearly temperature change and then predicting the temperature for the given number of years.
    It does not use any machine learning or other complex methods.
 */
class TemperaturePredictor {
public:
    TemperaturePredictor(CSVLineList& csvLineList, CountryFilter& country);
    std::vector<std::pair<int, double> > predict(int yearsToPredict);
    void displayPredictions(int yearsToPredict);

private:
    std::vector<std::pair<int, double> > historicalData; // year, average temperature
    double yearlyChange;    // How much temperature changes per year
    double lastYearTemp;    // Temperature of the most recent year
    CountryFilter country;
    
    void extractHistoricalData(CSVLineList& csvLineList);
    void calculateYearlyChange();
}; 