#include "Menu.h"
#include <iostream>
#include "CountryFilter.h"
#include "Candlestick.h"
#include "CandlestickPlotter.h"
#include "TemperaturePredictor.h"

Menu::Menu(CSVLineList _csvLineList) : 
csvLineList(_csvLineList), 
dateRangeFilter(1980, 2025),
countryFilter("GB")
{
    status = MenuStatus::INITIALISING;
}

void Menu::run()
{
    status = MenuStatus::RUNNING;
    while (status == MenuStatus::RUNNING)
    {
        if (status != MenuStatus::RUNNING)
        {
            break;
        }
        printMenu();
        int userOption = getUserOption();
        processUserOption(userOption);
    }
}

void Menu::printMenu()
{
    std::cout << "=== MENU ===" << std::endl;
    std::cout << "Applied filters: " << std::endl;
    std::cout << "\t" << " selected Country: " << countryFilter.getCountry() << std::endl;
    std::cout << "\t" << " selected Date range: " << dateRangeFilter.getStartYear() << " - " << dateRangeFilter.getEndYear() << std::endl;
    std::cout << "Options: " << std::endl;
    std::cout << "1: Select country" << std::endl;
    std::cout << "2: Select date range" << std::endl;
    std::cout << "3: Plot chart" << std::endl;
    std::cout << "4: Predict temperature" << std::endl;
    std::cout << "5: Exit app" << std::endl;
    std::cout << "=== END MENU ===" << std::endl;
}

int Menu::getUserOption()
{
    int userOption = 0;

    std::string line;
    std::cout << "Type in 1-6" << std::endl;
    std::getline(std::cin, line);
    try {
        userOption = std::stoi(line);
    }catch(const std::exception& e) {
        std::cout << "Invalid choice. Choose 1-6" << std::endl;
    }
    std::cout << "You chose: " << userOption << std::endl;
    return userOption;
}

void Menu::processUserOption(int userOption)
{
    switch (userOption)
    {
        case 1:
            selectCountry();
            break;
        case 2:
            selectDateRange();
            break;
        case 3:
            plotChart();
            break;
        case 4:
            predictTemperature();
            break;
        case 5:
            exit();
            break;
        default:
            std::cout << "Invalid choice. Choose 1-1" << std::endl;
            break;
    }
}

void Menu::selectCountry()
{
    std::cout << "=== SELECT COUNTRY ===" << std::endl;
    std::cout << "Available countries: " << CountryFilter::allowedCountries[0];
    for (int i = 1; i < CountryFilter::allowedCountries.size(); i++) {
        std::cout << ", " << CountryFilter::allowedCountries[i];
    }
    std::cout << "." << std::endl;
    std::cout << "Enter country: ";
    std::string country;
    std::getline(std::cin, country);
    std::cout << "You chose: " << country << std::endl;
    try{
        countryFilter = CountryFilter(country);
        std::cout << countryFilter.getAsColumnName() << std::endl;
    } catch(const std::exception& e) {
        std::cout << "Invalid country" << std::endl;
    }
}

void Menu::exit()
{
    std::cout << "Exit app" << std::endl;
    status = MenuStatus::EXIT;
}

void Menu::plotChart()
{
    std::cout << "=== PLOT CHART ===" << std::endl;
    // Create candlesticks
    std::vector<Candlestick> candlesticks;
    double open = std::numeric_limits<double>::lowest();
    std::map<int, std::vector<CSVLine> >& linesByYear = csvLineList.getLinesByYear();
    for (auto it = linesByYear.begin(); it != linesByYear.end(); it++)
    {
        if (dateRangeFilter.isOneYearBefore(it->first))
        {
            Candlestick candlestick(it->second, countryFilter, open);
            open = candlestick.getClose();
            continue;
        }
        if (!dateRangeFilter.isInRange(it->first))
        {
            continue;
        }
        Candlestick candlestick(it->second, countryFilter, open);
        candlesticks.push_back(candlestick);
        open = candlestick.getClose();
        std::cout << "Candlestick: " << candlestick.getDate() << " " << candlestick.getOpen() << " " << candlestick.getClose() << " " << candlestick.getHigh() << " " << candlestick.getLow() << std::endl;
    }
    // Plot candlesticks
    CandlestickPlotter candlestickPlotter(candlesticks);
    candlestickPlotter.plot();
}

void Menu::selectDateRange()
{
    std::cout << "=== SELECT DATE RANGE ===" << std::endl;
    std::cout << "Enter start year: ";
    std::string startYear;
    std::getline(std::cin, startYear);
    std::cout << "Enter end year: ";
    std::string endYear;
    std::getline(std::cin, endYear);
    try{
        dateRangeFilter = DateRangeFilter(std::stoi(startYear), std::stoi(endYear));
    } catch(const std::invalid_argument& e) {
        std::cout << "Invalid date range: " << e.what() << std::endl;
    } catch(const std::out_of_range& e) {
        std::cout << "Date range out of range: " << e.what() << std::endl;
    }
}

void Menu::predictTemperature()
{
    std::cout << "=== TEMPERATURE PREDICTION ===" << std::endl;
    std::cout << "Selected Country: " << countryFilter.getCountry() << std::endl;
    std::cout << "Enter number of years to predict (1-5): ";
    std::string input;
    std::getline(std::cin, input);
    int yearsToPredict = 0;
    try {
        yearsToPredict = std::stoi(input);
    } catch(const std::exception& e) {
        std::cout << "Invalid input. Please enter a number between 1-5." << std::endl;
        return;
    }
    if (yearsToPredict < 1 || yearsToPredict > 5) {
        std::cout << "Invalid range. Please enter a number between 1-5." << std::endl;
        return;
    }
    std::cout << "Analyzing historical data..." << std::endl;
    try {
        TemperaturePredictor predictor(csvLineList, countryFilter);
        predictor.displayPredictions(yearsToPredict);
    } catch(const std::exception& e) {
        std::cout << "Error during prediction: " << e.what() << std::endl;
    }
}