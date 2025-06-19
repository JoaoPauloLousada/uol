#include <string>
#include <vector>
#include <iostream>

enum OrderBookType
{
    bid,
    ask
};

class OrderBookEntry
{
    public:
        OrderBookEntry(
            double _price,
            double _amount,
            std::string _timestamp,
            std::string _product,
            OrderBookType _type)
            : price(_price), amount(_amount), timestamp(_timestamp), product(_product), type(_type) {

            };
        double price;
        double amount;
        std::string timestamp;
        std::string product;
        OrderBookType type;
        void print() {
            std::cout << "Order book entry" << std::endl;
            std::cout << "price:" << this->price << std::endl;
            std::cout << "amount:" << this->amount << std::endl;
            std::cout << "timestamp:" << this->timestamp << std::endl;
            std::cout << "product:" << this->product << std::endl;
            std::cout << "type:" << this->type << std::endl;
            std::cout << "=================" << std::endl;
        }
};

double computeAveragePrice(std::vector<OrderBookEntry>& entries)
{
    double avg = 0;
    for (OrderBookEntry entry : entries) {
        avg += entry.price;
    }
    avg = avg / entries.size();
    return avg;
};

double computeLowPrice(std::vector<OrderBookEntry>& entries)
{
    double lowest = entries[0].price;
    for (OrderBookEntry entry : entries) {
        if (entry.price < lowest) {
            lowest = entry.price;
        }
    }
    return lowest;
}

double computeHighPrice(std::vector<OrderBookEntry>& entries)
{
    double highest = entries[0].price;
    for (OrderBookEntry entry : entries) {
        if (entry.price > highest) {
            highest = entry.price;
        }
    }
    return highest;
}

double computePriceSpread(std::vector<OrderBookEntry>& entries) {
    double lowest = computeLowPrice(entries);
    double highest = computeHighPrice(entries);
    return highest - lowest;
}

void printOrders(std::vector<OrderBookEntry>& entries) {
    for (OrderBookEntry entry: entries) {
        entry.print();
    } 
}

int main()
{
    std::vector<OrderBookEntry> entries;
    entries.push_back(OrderBookEntry(1000,
                                    0.02,
                                    "2020/03/17 17:01:24.884492",
                                    "BTC/USDT",
                                    OrderBookType::bid));
    entries.push_back(OrderBookEntry(2000,
                                    0.02,
                                    "2020/03/17 17:01:24.884492",
                                    "BTC/USDT",
                                    OrderBookType::bid));
    entries.push_back(OrderBookEntry(3000,
                                    0.03,
                                    "2020/03/17 17:01:24.884492",
                                    "BTC/USDT",
                                    OrderBookType::bid));
    
    printOrders(entries);
    std::cout << "lowest price:" << computeLowPrice(entries) << std::endl;
    std::cout << "highest price:" << computeHighPrice(entries) << std::endl;
    std::cout << "average price:" << computeAveragePrice(entries) << std::endl;
    std::cout << "spread:" << computePriceSpread(entries) << std::endl;

    return 0;
}