/**
 * This code was written by me, without assistance.
 */
#include <vector>
#include "Candlestick.h"
#include "CandlestickPlotter.h"
#include <iostream>
#include <iomanip>

// ANSI color codes
#define GREEN "\033[32m"
#define RED "\033[31m"
#define WHITE "\033[37m"
#define RESET "\033[0m"

CandlestickPlotter::CandlestickPlotter(std::vector<Candlestick>& _candlesticks): candlesticks(_candlesticks)
{}

void CandlestickPlotter::plot()
{
    std::cout << "Plotting candlesticks" << std::endl;
    double minTemp = candlesticks[0].getLow();
    double maxTemp = candlesticks[0].getHigh();
    std::cout << "Candlesticks size: " << candlesticks.size() << std::endl;
    for (const Candlestick& candlestick : candlesticks)
    {
        minTemp = std::min(minTemp, candlestick.getLow());
        maxTemp = std::max(maxTemp, candlestick.getHigh());
    }
    std::cout << "Min temp: " << minTemp << " Max temp: " << maxTemp << std::endl;
    for (int temp = maxTemp; temp >= minTemp; temp--)
    {
        std::cout << std::setw(2) << std::setfill('0')<< temp << " ";
        for (const Candlestick& candlestick : candlesticks)
        {
            if (temp < candlestick.getLow() || temp > candlestick.getHigh())
            {
                std::cout << "     ";
                continue;
            }
            int boxTop = std::max(candlestick.getClose(), candlestick.getOpen());
            int boxBottom = std::min(candlestick.getClose(), candlestick.getOpen());
            if (temp <= boxTop && temp >= boxBottom)
            {
                if (candlestick.getClose() > candlestick.getOpen())
                {
                    std::cout << GREEN << " [ ] " << RESET;
                }
                else if (candlestick.getClose() < candlestick.getOpen())
                {
                    std::cout << RED << " [ ] " << RESET;
                }
                else
                {
                    std::cout << WHITE << " [=] " << RESET;
                }
            } 
            else 
            {
                if (candlestick.getClose() > candlestick.getOpen())
                {
                    std::cout << GREEN << "  |  " << RESET;
                }
                else if (candlestick.getClose() < candlestick.getOpen())
                {
                    std::cout << RED << "  |  " << RESET;
                }
                else
                {
                    std::cout << WHITE << "  |  " << RESET;
                }
            }
        }
        std::cout << std::endl;
    }
    // std::cout << std::endl;
    // Print x-axis
    std::cout << "   ";
    for (int i = 0; i < candlesticks.size(); i++)
    {
        std::cout << candlesticks[i].getYear() << " ";
    }
    std::cout << std::endl;
}