#include "CountryFilter.h"
#include <string>
#include <vector>

CountryFilter::CountryFilter(const std::string& _country)
{
  if (!isAllowed(_country))
  {
    throw std::invalid_argument("Invalid country");
  }
  country = _country;
}

const std::string countries[] = {
"AT", "BE", "BG", "CH", "CZ", "DE", "DK", "EE", "ES", "FI",
  "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV",
  "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"
};

const std::vector<std::string> CountryFilter::allowedCountries(
    countries, countries + sizeof(countries)/sizeof(countries[0])
);

bool CountryFilter::isAllowed(const std::string& country) {
    return std::find(allowedCountries.begin(), allowedCountries.end(), country) != allowedCountries.end();
}

std::string CountryFilter::getCountry() const
{
  return country;
}

std::string CountryFilter::getAsColumnName() const
{
  return country + "_temperature";
}