#pragma once
#include <string>

enum OrderBookType {bid, ask};

class OrderBookEntry
{
    public:
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