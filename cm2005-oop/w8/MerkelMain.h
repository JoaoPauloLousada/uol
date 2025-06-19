#pragma once
#include <vector>
#include <string>
#include "OrderBookEntry.h"
#include "OrderBook.h"

class MerkelMain
{
    public:
        MerkelMain() = default;
        void init();
    private:
        void printMenu();
        void printHelp();
        void printMarketStats();
        void enterAsk();
        void enterBid();
        void printWallet();
        void gotoNextTimeframe();
        int getUserOption();
        void processUserOption(int userOption);
        std::string currentTime;
        OrderBook orderBook{"test.csv"};
        // OrderBook orderBook{"dataset.csv"};
};