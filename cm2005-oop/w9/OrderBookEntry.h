#pragma once
#include <string>

enum OrderBookType {bid, ask, unknown, asksale, bidsale};

class OrderBookEntry
{
    public:
        static OrderBookType stringToOrderBookType(const std::string& s);
        OrderBookEntry(
            double _price,
            double _amount,
            std::string _timestamp,
            std::string _product,
            OrderBookType _type,
            std::string username = "dataset"
        );
        static bool compareByTimestamp(OrderBookEntry& e1, OrderBookEntry& e2)
        {
            return e1.timestamp < e2.timestamp;
        }
        static bool compareByPriceAsc(OrderBookEntry& e1, OrderBookEntry& e2)
        {
            return e1.price < e2.price;
        }
        static bool compareByPriceDesc(OrderBookEntry& e1, OrderBookEntry& e2)
        {
            return e1.price > e2.price;
        }
        double price;
        double amount;
        std::string timestamp;
        std::string product;
        OrderBookType type;
        std::string username;
};