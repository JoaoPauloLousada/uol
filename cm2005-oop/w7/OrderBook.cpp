#include "OrderBook.h"
#include <iostream>
#include <map>
#include <string>

OrderBook::OrderBook(std::string filename)
{
    orders = CSVReader::readCSV(filename);
    std::cout << "order book has: " << orders.size() << " orders" << std::endl;
}
std::vector<std::string> OrderBook::getKnownProducts()
{
    std::vector<std::string> products;
    std::map<std::string, bool> prodMap;
    for (OrderBookEntry &e : orders)
    {
        prodMap[e.product] = true;
    }
    // flatten the map into a vector of strings
    for (auto const &e : prodMap)
    {
        products.push_back(e.first);
    }
    return products;
}

std::vector<OrderBookEntry> OrderBook::getOrders(OrderBookType type, std::string product, std::string timestamp)
{
    std::vector<OrderBookEntry> orders_sub;
    for (OrderBookEntry &e : orders)
    {
        if (e.type == type && e.product == product && e.timestamp == timestamp)
        {
            orders_sub.push_back(e);
        }
    }
    return orders_sub;
}

double OrderBook::getHighPrice(std::vector<OrderBookEntry> &orders)
{
    double max = orders[0].price;
    for (OrderBookEntry &e : orders)
    {
        if (e.price > max)
            max = e.price;
    }
    return max;
}

double OrderBook::getLowPrice(std::vector<OrderBookEntry> &orders)
{
    double min = orders[0].price;
    for (OrderBookEntry &e : orders)
    {
        if (e.price < min)
            min = e.price;
    }
    return min;
}
double OrderBook::getSpread(std::vector<OrderBookEntry> &asks, std::vector<OrderBookEntry>& bids)
{
    double low_ask = getLowPrice(asks);
    double high_bid = getHighPrice(bids);
    return low_ask - high_bid;
}

std::string OrderBook::getEarliestTime()
{
    return orders[0].timestamp;
}

std::string OrderBook::getNextTime(std::string timestamp)
{
    std::string next_timestamp = "";
    for (OrderBookEntry &e : orders)
    {
        if (e.timestamp > timestamp)
        {
            next_timestamp = e.timestamp;
            break;
        }
    }
    if (next_timestamp == "")
    {
        next_timestamp = orders[0].timestamp;
    }
    return next_timestamp;
}