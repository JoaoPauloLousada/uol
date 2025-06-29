#pragma once

#include <string>
#include "CountryFilter.h"
#include "CSVLineList.h"

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
        CountryFilter countryFilter = CountryFilter("GB");
        void printMenu();
        int getUserOption();
        void processUserOption(int userOption);
        void selectCountry();
        void exit();
        void plotChart();
        // void printOptions();
        // void printExit();
};
