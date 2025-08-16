#pragma once
#include <string>
#include <vector>

class Tokeniser {
    public:
        static std::vector<std::string> tokenise(std::string csvLine, char separator);
};