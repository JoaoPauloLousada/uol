#include "CSVLineList.h"
#include <map>

CSVLineList::CSVLineList(std::vector<CSVLine> _lines)
{
    lines = _lines;
}

std::vector<CSVLine> CSVLineList::getLines()
{
    return lines;
}

std::map<int, std::vector<CSVLine> > CSVLineList::groupByYear()
{
    std::map<int, std::vector<CSVLine> > groupedLines;
    
    for (const CSVLine& line : lines) {
        int year = line.getYear();
        groupedLines[year].push_back(line);
    }
    
    return groupedLines;
} 

void CSVLineList::addLine(CSVLine line)
{
    lines.push_back(line);
}