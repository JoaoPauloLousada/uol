#include "CSVLineList.h"
#include <map>
#include <iostream>

CSVLineList::CSVLineList(std::vector<CSVLine> _lines)
{
    lines = _lines;
}

std::vector<CSVLine> CSVLineList::getLines()
{
    return lines;
}

std::map<int, std::vector<CSVLine> > CSVLineList::getLinesByYear()
{
    return linesByYear;
}

void CSVLineList::groupByYear()
{
    std::cout << "Grouping lines by year" << std::endl;
    std::map<int, std::vector<CSVLine> > groupedLines;
    
    for (CSVLine line : lines) {
        int year = line.getYear();
        groupedLines[year].push_back(line);
    }

    linesByYear = groupedLines;
} 

void CSVLineList::addLine(CSVLine line)
{
    lines.push_back(line);
}