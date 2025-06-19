// build command: g++ main.cpp -o merkelrex
// exec command: ./merkelrex
#include <iostream>

int main() {
    while (true) {
        std::cout << "1: Print help" << std::endl;
        std::cout << "2: Print exchange stats" << std::endl;
        std::cout << "3: Place an ask" << std::endl;
        std::cout << "4: Place a bid" << std::endl;
        std::cout << "5: Print wallet" << std::endl;
        std::cout << "6: Continue" << std::endl;
        int userOption;
        std::cout << "Type in 1-6" << std::endl;
        std::cin >> userOption;
        switch (userOption) {
            case 1:
            std::cout << "Option selected: help" << std::endl;
            break;
            case 2:
            std::cout << "Option selected: exchange stats" << std::endl;
            break;
            case 3:
            std::cout << "Option selected: place an ask" << std::endl;
            break;
            case 4:
            std::cout << "Option selected: place a bid" << std::endl;
            break;
            case 5:
            std::cout << "Option selected: print a wallet" << std::endl;
            break;
            case 6:
            std::cout << "Option selected: continue" << std::endl;
            break;
            default:
            std::cout << "Option selected: unknown option" << std::endl;
            break;
        }
    }
    return 0;
}