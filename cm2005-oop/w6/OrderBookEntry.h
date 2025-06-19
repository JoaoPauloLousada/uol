#pragma once
#include <string>

enum OrderBookType {bid, ask, unknown};

class OrderBookEntry
{
    public:
        static OrderBookType stringToOrderBookType(const std::string& s);
        OrderBookEntry(
            double _price,
            double _amount,
            std::string _timestamp,
            std::string _product,
            OrderBookType _type
        );
        double price;
        double amount;
        std::string timestamp;
        std::string product;
        OrderBookType type;
};