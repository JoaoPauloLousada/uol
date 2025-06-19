#include <string>
#include <vector>
#include <iostream>

std::vector<std::string> tokenize(std::string csvLine, char separator)
{
    std::vector<std::string> tokens;
    std::string token;
    signed int start, end;
    start = csvLine.find_first_not_of(separator, 0);
    do
    {
        end = csvLine.find_first_of(separator, start);
        if (start == csvLine.length() || start == end)
            break;
        if (end >= 0)
            token = csvLine.substr(start, end - start);
        else
            token = csvLine.substr(start, csvLine.length() - start);
        tokens.push_back(token);
        start = end + 1;
    } while (end != std::string::npos);
    return tokens;
}

int main()
{
    std::vector<std::string> tokens;
    std::string csvLine = "thing1,thing2,thing3";
    tokens = tokenize(csvLine, ',');
    for (std::string& token : tokens) {
        std::cout << token << std::endl;
    }
    return 0;
}