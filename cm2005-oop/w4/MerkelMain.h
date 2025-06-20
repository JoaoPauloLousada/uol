#pragma once
#include <vector>
#include "OrderBookEntry.h"

class MerkelMain
{
    public:
        MerkelMain() = default;
        void init();
    private:
        void loadOrderBook();
        void printMenu();
        void printHelp();
        void printMarketStats();
        void enterOffer();
        void enterBid();
        void printWallet();
        void gotoNextTimeframe();
        int getUserOption();
        void processUserOption(int userOption);
        std::vector<OrderBookEntry> orders;
};