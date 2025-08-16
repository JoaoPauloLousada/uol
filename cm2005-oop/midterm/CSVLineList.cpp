/**
 * This code was written by me, without assistance.
 */
#include "CSVLineList.h"
#include <map>
#include <iostream>

CSVLineList::CSVLineList()
{
}

std::vector<CSVLine> CSVLineList::getLines()
{
    return lines;
}

std::map<int, std::vector<CSVLine> >& CSVLineList::getLinesByYear()
{
    return linesByYear;
}

void CSVLineList::groupByYear()
{
    std::cout << "Grouping lines by year" << std::endl;
    for (CSVLine& line : lines) {
        int year = line.getYear();
        linesByYear[year].push_back(line);
    }
} 

void CSVLineList::addLine(CSVLine& line)
{
    lines.push_back(line);
}