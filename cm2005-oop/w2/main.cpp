// build command: g++ main.cpp -o merkelrex
// exec command: ./merkelrex
#include <iostream>

void printMenu()
{
    std::cout << "1: Print help" << std::endl;
    std::cout << "2: Print exchange stats" << std::endl;
    std::cout << "3: Place an ask" << std::endl;
    std::cout << "4: Place a bid" << std::endl;
    std::cout << "5: Print wallet" << std::endl;
    std::cout << "6: Continue" << std::endl;
}

int getUserOption()
{
    int userOption;
    std::cout << "Type in 1-6" << std::endl;
    std::cin >> userOption;
    std::cout << "You choose: " << userOption << std::endl;
    return userOption;
}

void printHelp() {
    std::cout << "Option selected: help" << std::endl;
}

void printMarketStats() {
    std::cout << "Option selected: exchange stats" << std::endl;
}

void enterOffer() {
    std::cout << "Option selected: place an ask" << std::endl;
}

void enterBid() {
    std::cout << "Option selected: place a bid" << std::endl;
}

void printWallet() {
    std::cout << "Option selected: print a wallet" << std::endl;
}

void gotoNextTimeframe() {
    std::cout << "Option selected: continue" << std::endl;
}

void processuserOption(int userOption)
{
    switch (userOption)
    {
    case 1:
        printHelp();
        break;
    case 2:
        printMarketStats();
        break;
    case 3:
        enterOffer();
        break;
    case 4:
        enterBid();
        break;
    case 5:
        printWallet();
        break;
    case 6:
        gotoNextTimeframe();
        break;
    default:
        std::cout << "Option selected: unknown option" << std::endl;
        break;
    }
}

int main()
{
    while (true)
    {
        printMenu();
        int userOption = getUserOption();
        processuserOption(userOption);
    }
    return 0;
}