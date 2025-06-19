#pragma once
#include <string>

class Iris {
public:
    static Iris create(
        const std::string& sepalLength,
        const std::string& sepalWidth,
        const std::string& petalLength,
        const std::string& petalWidth,
        const std::string& species
    );

    Iris(
        float _sepalLength,
        float _sepalWidth,
        float _petalLength,
        float _petalWidth,
        const std::string& _species
    );

    void print() const;

private:
    float sepalLength;
    float sepalWidth;
    float petalLength;
    float petalWidth;
    std::string species;
};