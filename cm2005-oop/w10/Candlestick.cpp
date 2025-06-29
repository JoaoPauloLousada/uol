#include "Candlestick.h"
#include "CSVLine.h"
#include <string>
#include <vector>
#include <limits>

Candlestick::Candlestick(std::vector<CSVLine>& _lines, CountryFilter _country, double _open) : lines(_lines) {
  country = _country;
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
    close += line.getTemperature(country.getAsColumnName());
  }
  return close / lines.size();
}

double Candlestick::calculateHigh() {
  double high = std::numeric_limits<double>::lowest();
  for (CSVLine line : lines) {
    double temp = line.getTemperature(country.getAsColumnName());
    if (temp > high) {
      high = temp;
    }
  }
  return high;
}

double Candlestick::calculateLow() {
  double low = std::numeric_limits<double>::max();
  for (CSVLine line : lines) {
    double temp = line.getTemperature(country.getAsColumnName());
    if (temp < low) {
      low = temp;
    }
  }
  return low;
}