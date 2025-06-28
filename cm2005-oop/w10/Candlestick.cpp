#include "Candlestick.h"
#include "CSVLine.h"
#include <string>
#include <vector>

Candlestick::Candlestick(std::vector<CSVLine> _lines, double _open) {
  lines = _lines;
  date = lines[0].getDate();
  year = lines[0].getYear();
  close = calculateClose();
  high = calculateHigh();
  low = calculateLow();
  open = _open;
  if (open == std::numeric_limits<double>::lowest()) {
    open = close;
  }
}

std::string Candlestick::getDate() const { return date; }

int Candlestick::getYear() const { return year; }

double Candlestick::getOpen() const { return open; }

double Candlestick::getClose() const { return close; }

double Candlestick::getHigh() const { return high; }

double Candlestick::getLow() const { return low; }

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