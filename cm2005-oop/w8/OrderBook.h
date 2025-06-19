#pragma once
#include "CSVReader.h"
#include "OrderBookEntry.h"
#include <string>
#include <vector>

class OrderBook {
    public:
        /** construct, reading a csv data file */
        OrderBook(std::string filename);
        /** return a vector of all known products in a dataset */
        std::vector<std::string> getKnownProducts();
        /** return a vector of Orders according to the sent filters */
        std::vector<OrderBookEntry> getOrders(OrderBookType type, std::string product, std::string timestamp);
        static double getHighPrice(std::vector<OrderBookEntry>& orders);
        static double getLowPrice(std::vector<OrderBookEntry>& orders);
        /** returns the spread between asks and bids */
        static double getSpread(std::vector<OrderBookEntry>& asks, std::vector<OrderBookEntry>& bids);
        /** returns the earliest time in the order book */
        std::string getEarliestTime();
        /** returns the next time after the sent time */
        std::string getNextTime(std::string timestamp);
        /** insert an order to the order book */
        void insertOrder(OrderBookEntry& order);
        /** match orders */
        std::vector<OrderBookEntry> matchAsksToBids(std::string product, std::string timestamp);

    private:
        std::vector<OrderBookEntry> orders;
};