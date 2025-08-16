/**
 * This code was written by me, without assistance.
 */
#include "DateRangeFilter.h"
#include <stdexcept>

DateRangeFilter::DateRangeFilter(int _startYear, int _endYear): startYear(_startYear), endYear(_endYear)
{
    if (startYear > endYear)
    {
        throw std::invalid_argument("Start year must be less than end year");
    }
    if (startYear < 1980 || endYear > 2025)
    {
        throw std::out_of_range("Date range out of range");
    }
}

int DateRangeFilter::getStartYear() const
{
    return startYear;
}

int DateRangeFilter::getEndYear() const
{
    return endYear;
}

bool DateRangeFilter::isInRange(int year) const
{
    return year >= startYear && year <= endYear;
}

bool DateRangeFilter::isOneYearBefore(int year) const
{
    return year == startYear - 1;
}