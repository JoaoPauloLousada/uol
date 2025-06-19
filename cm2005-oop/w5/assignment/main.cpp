#include <fstream>
#include <string>
#include <vector>
#include <iostream>
#include <sstream>
#include "iris.h"
#include "tokenizer.h"

int main()
{
    std::string csvFilename{"iris.csv"};
    std::ifstream csvFile{csvFilename};
    std::string line;
    if (csvFile.is_open())
    {
        std::cout << "Opened file " << csvFilename << std::endl;
        // Skip the header
        std::getline(csvFile, line);
        while (std::getline(csvFile, line))
        {
            try
            {
                std::vector<std::string> tokens;
                tokens = Tokenizer::tokenize(line, ',');
                std::cout << "Line: " << line << std::endl;
                Iris iris = Iris::create(
                    tokens[0],
                    tokens[1],
                    tokens[2],
                    tokens[3],
                    tokens[4]);
                iris.print();
                std::cout << "===============" << std::endl;
            }
            catch (std::exception &e)
            {
                std::cout << "Invalid format" << std::endl;
            }
        }
        csvFile.close();
    }
    else
    {
        std::cout << "Problem opening file " << csvFilename << std::endl;
    }
    return 0;
}