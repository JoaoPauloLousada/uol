#pragma once
#include <string>
#include <map>
#include "OrderBookEntry.h"

class Wallet
{
public:
    Wallet();
    /** insert currency to the wallet */
    void insertCurrency(std::string type, double amount);
    /** removes currency to the wallet */
    bool removeCurrency(std::string type, double amount);
    /** check if wallet contains this much currency or more */
    bool containsCurrency(std::string type, double amount);
    /** check if the wallet can cope with this ask or bid */
    bool canFulfillOrder(OrderBookEntry order);
    /** generates a string representation */
    std::string toString();
private:
    std::map<std::string, double> currencies;
};