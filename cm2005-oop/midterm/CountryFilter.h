/**
 * This code was written by me, without assistance.
 */
#pragma once

#include <string>
#include <vector>

class CountryFilter 
{
    public:
        CountryFilter();
        CountryFilter(const std::string& country);
        std::string getAsColumnName() const;
        std::string getCountry() const;
        static const std::vector<std::string> allowedCountries;
    private:
        std::string country;
        bool isAllowed(const std::string& country);
};