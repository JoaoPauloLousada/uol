/**
 * This code was written by me, without assistance.
 */
#pragma once

#include "CSVLine.h"
#include <vector>
#include <map>

class CSVLineList {
    public:
        CSVLineList();
        std::vector<CSVLine> getLines();
        void addLine(CSVLine& line);
        std::map<int, std::vector<CSVLine> >& getLinesByYear();
        void groupByYear();
    private:
        std::vector<CSVLine> lines;
        std::map<int, std::vector<CSVLine> > linesByYear;
};