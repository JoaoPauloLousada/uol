/**
 * This code was written by me, without assistance.
 */
#pragma once

#include <vector>
#include "Candlestick.h"

class CandlestickPlotter {
    public:
        CandlestickPlotter(std::vector<Candlestick>& _candlesticks);
        void plot();
    private:
        std::vector<Candlestick>& candlesticks;
};