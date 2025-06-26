#include "Candlestick.h"
#include "CSVLine.h"
#include <string>
#include <vector>

Candlestick::Candlestick(std::vector<CSVLine> _lines) {
  lines = _lines;
  date = lines[0].getDate();
  close = calculateClose();
  high = calculateHigh();
  low = calculateLow();
}

std::string Candlestick::getDate() { return date; }

double Candlestick::getClose() { return close; }

double Candlestick::calculateClose() {
  double close = 0;
  for (CSVLine line : lines) {
    close += line.getGB_temperature();
  }
  return close / lines.size();
}

double Candlestick::calculateHigh() {
  double high = 0;
  for (CSVLine line : lines) {
    if (line.getGB_temperature() > high) {
      high = line.getGB_temperature();
    }
  }
  return high;
}

double Candlestick::calculateLow() {
  double low = 0;
  for (CSVLine line : lines) {
    if (line.getGB_temperature() < low) {
      low = line.getGB_temperature();
    }
  }
  return low;
}