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
}