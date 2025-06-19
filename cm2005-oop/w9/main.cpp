//g++ --std=c++11 main.cpp OrderBookEntry.cpp MerkelMain.cpp CSVReader.cpp Tokeniser.cpp OrderBook.cpp -o main
#include "MerkelMain.h"
#include "CSVReader.h"
#include "OrderBookEntry.h"
#include <iostream>
#include "Wallet.h"

int main()
{
    MerkelMain app;
    app.init();
    // Wallet wallet;
    // wallet.insertCurrency("BTC", 10);
    // wallet.insertCurrency("USDT", 100);
    // std::cout << wallet.toString() << std::endl;
    // wallet.removeCurrency("USDT", 10);
    // std::cout << wallet.toString() << std::endl;
    // wallet.removeCurrency("USD", 100);
    // std::cout << wallet.toString() << std::endl;
}