#include "CSVReader.h"
#include "Tokeniser.h"
#include <iostream>
#include <fstream>

CSVReader::CSVReader()
{
}
std::vector<OrderBookEntry> CSVReader::readCSV(std::string csvFilename)
{
    std::vector<OrderBookEntry> entries;
    std::ifstream csvFile{csvFilename};
    std::string line;
    if (csvFile.is_open())
    {
        while (std::getline(csvFile, line))
        {
            try
            {
                std::vector<std::string> tokens;
                tokens = tokenise(line, ',');
                OrderBookEntry entry = stringsToOBE(tokens);
                entries.push_back(entry);
            }
            catch (std::exception &e)
            {
                // std::cout << "Invalid format" << std::endl;
            }
        }
        csvFile.close();
    }
    else
    {
        std::cout << "Problem opening file " << csvFilename << std::endl;
    }
    return entries;
}

std::vector<std::string> CSVReader::tokenise(std::string csvLine, char separator)
{
    return Tokeniser::tokenise(csvLine, separator);
}

OrderBookEntry CSVReader::stringsToOBE(std::vector<std::string> tokens)
{
    double price, amount;
    if (tokens.size() != 5) // bad
    {
        // std::cout << "Bad line " << std::endl;
        throw std::exception{};
    }
    // we have 5 tokens
    try
    {
        price = std::stod(tokens[3]);
        amount = std::stod(tokens[4]);
    }
    catch (const std::exception &e)
    {
        std::cout << "Bad float! " << tokens[3] << std::endl;
        std::cout << "Bad float! " << tokens[4] << std::endl;
        throw;
    }
    OrderBookEntry obe{price,
                       amount,
                       tokens[0],
                       tokens[1],
                       OrderBookEntry::stringToOrderBookType(tokens[2])};
    return obe;
}

OrderBookEntry CSVReader::stringsToOBE(std::string _price,
                                       std::string _amount,
                                       std::string timestamp,
                                       std::string product,
                                       OrderBookType type)
{
    double price, amount;
    try
    {
        price = std::stod(_price);
        amount = std::stod(_amount);
    }
    catch (const std::exception &e)
    {
        std::cout << "Bad float! " << _price << std::endl;
        std::cout << "Bad float! " << _amount << std::endl;
        throw;
    }
    OrderBookEntry obe{price,
                       amount,
                       timestamp,
                       product,
                       type};
    return obe;
}
