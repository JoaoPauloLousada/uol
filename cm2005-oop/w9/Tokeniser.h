#pragma once
#include <vector>
#include <string>

class Tokeniser
{
public:
    static std::vector<std::string> tokenise(std::string csvLine, char separator);
};
