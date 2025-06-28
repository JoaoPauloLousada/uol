#include "Menu.h"
#include <iostream>
#include "CountryFilter.h"

Menu::Menu()
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
    std::cout << "Summary: " << std::endl;
    std::cout << "\t" << " selected Country: " << countryFilter.getCountry() << std::endl;
    std::cout << "1: Select country" << std::endl;
    std::cout << "5: Exit app" << std::endl;
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
        //
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