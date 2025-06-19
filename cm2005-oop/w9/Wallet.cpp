#include <string>
#include <map>
#include "Wallet.h"
#include <iostream>
#include "OrderBookEntry.h"
#include "CSVReader.h"

Wallet::Wallet()
{
}
/** insert currency to the wallet */
void Wallet::insertCurrency(std::string type, double amount) {
    double balance;
    if (amount < 0) {
        throw std::exception{};
    }
    if (currencies.count(type) == 0)
    {
        balance = 0;   
    } else 
    {
        balance = currencies[type];
    }
    balance += amount;
    currencies[type] = balance;
}

bool Wallet::removeCurrency(std::string type, double amount)
{
    double balance;
    if (amount < 0) {
        return false;
    }
    if (currencies.count(type) == 0)
    {
        std::cout << "No currency for: " << type << std::endl;
        return false;
    } else 
    {
        if (containsCurrency(type, amount)) // they have enough
        {
            std::cout << "Removing " << type << ": " << amount << std::endl;
            currencies[type] -= amount;
            return true;
        }
    }
    return false;// they have it but not enough
}

/** check if wallet contains this much currency or more */
bool Wallet::containsCurrency(std::string type, double amount) {
    if (currencies.count(type) == 0)
    {
        return false;
    }
    return currencies[type] >= amount;
}
/** generates a string representation */
std::string Wallet::toString() {
    std::string s;
    for (std::pair<std::string, double> pair : currencies)
    {
        std::string currency = pair.first;
        double amount = pair.second;
        s += currency + " : " + std::to_string(amount) + "\n";
    }
    return s;
}

bool Wallet::canFulfillOrder(OrderBookEntry order)
{
    std::vector<std::string> currs = CSVReader::tokenise(order.product, '/');
    // ask
    if (order.type == OrderBookType::ask) {
        double amount = order.amount;
        std::string currency = currs[0];
        std::cout << "Wallet::canFulfillOrder " << currency << " : " << amount << std::endl;
        return containsCurrency(currency, amount);
    }
    // bid
    if (order.type == OrderBookType::bid)
    {
        double amount = order.amount * order.price;
        std::string currency = currs[1];
        std::cout << "Wallet::canFulfillOrder " << currency << " : " << amount << std::endl;
        return containsCurrency(currency, amount);
    }
    return false;
}