#pragma once

#include <string>
#include "CountryFilter.h"
#include "CSVLineList.h"
#include "DateRangeFilter.h"

enum MenuStatus {
    INITIALISING,
    EXIT,
    RUNNING
};

class Menu
{
    public:
        Menu(CSVLineList csvLineList);
        void run();
    private:
        CSVLineList csvLineList;
        MenuStatus status;
        CountryFilter countryFilter;
        DateRangeFilter dateRangeFilter;
        void printMenu();
        int getUserOption();
        void processUserOption(int userOption);
        void selectCountry();
        void selectDateRange();
        void exit();
        void plotChart();
        // void printOptions();
        // void printExit();
};
