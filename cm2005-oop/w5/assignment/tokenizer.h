#pragma once
#include <vector>
#include <string>

class Tokenizer
{
public:
    static std::vector<std::string> tokenize(std::string csvLine, char separator);
};
