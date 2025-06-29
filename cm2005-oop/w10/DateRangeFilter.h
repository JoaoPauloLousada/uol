#pragma once

class DateRangeFilter {
    public:
        DateRangeFilter(int startYear, int endYear);
        int getStartYear() const;
        int getEndYear() const;
        bool isInRange(int year) const;
        bool isOneYearBefore(int year) const;
    private:
        int startYear;
        int endYear;
};