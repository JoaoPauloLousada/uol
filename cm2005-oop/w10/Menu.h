#pragma once

#include <string>
#include "CountryFilter.h"

enum MenuStatus {
    INITIALISING,
    EXIT,
    RUNNING
};

class Menu
{
    public:
        Menu();
        void run();
    private:
        MenuStatus status;
        CountryFilter countryFilter = CountryFilter("GB");
        void printMenu();
        int getUserOption();
        void processUserOption(int userOption);
        void selectCountry();
        void exit();
        // void printOptions();
        // void printExit();
};
