#include "TemperaturePredictor.h"
#include "Candlestick.h"
#include <iostream>
#include <iomanip>
#include <cmath>
#include <limits>

TemperaturePredictor::TemperaturePredictor(CSVLineList& csvLineList, CountryFilter& _country) 
    : country(_country), yearlyChange(0.0), lastYearTemp(0.0) {
    extractHistoricalData(csvLineList);
    calculateYearlyChange();
}

void TemperaturePredictor::extractHistoricalData(CSVLineList& csvLineList) {
    std::map<int, std::vector<CSVLine> >& linesByYear = csvLineList.getLinesByYear();
    for (auto it = linesByYear.begin(); it != linesByYear.end(); ++it) {
        int year = it->first;
        std::vector<CSVLine>& yearLines = it->second;
        if (!yearLines.empty()) {
            double dummyOpen = std::numeric_limits<double>::lowest();
            Candlestick candlestick(yearLines, country, dummyOpen);
            double avgTemp = candlestick.getClose();
            historicalData.push_back(std::make_pair(year, avgTemp));
        }
    }
}

void TemperaturePredictor::calculateYearlyChange() {
    double firstYearTemp = historicalData.front().second;
    int firstYear = historicalData.front().first;
    lastYearTemp = historicalData.back().second;
    int lastYear = historicalData.back().first;
    int totalYears = lastYear - firstYear;
    yearlyChange = (lastYearTemp - firstYearTemp) / totalYears;
}

std::vector<std::pair<int, double> > TemperaturePredictor::predict(int yearsToPredict) {
    std::vector<std::pair<int, double> > predictions;
    int latestYear = historicalData.back().first;
    for (int i = 1; i <= yearsToPredict; ++i) {
        int futureYear = latestYear + i;
        double predictedTemp = lastYearTemp + (yearlyChange * i);
        predictions.push_back(std::make_pair(futureYear, predictedTemp));
    }
    return predictions;
}

void TemperaturePredictor::displayPredictions(int yearsToPredict) {
    std::vector<std::pair<int, double> > predictions = predict(yearsToPredict);
    std::cout << "Country: " << country.getCountry() << std::endl;
    std::cout << "Last recorded temperature: " << lastYearTemp << "°C" << std::endl;
    std::cout << "Yearly temperature change: " << yearlyChange << "°C per year" << std::endl;
    std::cout << "Predicted temperature for " << yearsToPredict << " years: " << std::endl;
    std::cout << "\nPredicted Average Temperatures:" << std::endl;
    std::cout << std::fixed << std::setprecision(2);
    for (const auto& prediction : predictions) {
        std::cout << prediction.first << ": " << prediction.second << "°C" << std::endl;
    }
}
