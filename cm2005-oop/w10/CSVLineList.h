#include "CSVLine.h"
#include <vector>
#include <map>

class CSVLineList {
    public:
        CSVLineList(std::vector<CSVLine> _lines = std::vector<CSVLine>());
        std::vector<CSVLine> getLines();
        std::map<int, std::vector<CSVLine> > groupByYear();
        void addLine(CSVLine line);
    private:
        std::vector<CSVLine> lines;
};