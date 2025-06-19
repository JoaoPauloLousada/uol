#include "iris.h"
#include <iostream>
#include <stdexcept>

Iris Iris::create(
    const std::string& sepalLength,
    const std::string& sepalWidth,
    const std::string& petalLength,
    const std::string& petalWidth,
    const std::string& species
) {
    float _sepalLength = sepalLength.empty() ? 0.0f : std::stof(sepalLength);
    float _sepalWidth = sepalWidth.empty() ? 0.0f : std::stof(sepalWidth);
    float _petalLength = petalLength.empty() ? 0.0f : std::stof(petalLength);
    float _petalWidth = petalWidth.empty() ? 0.0f : std::stof(petalWidth);

    return Iris(
        _sepalLength,
        _sepalWidth,
        _petalLength,
        _petalWidth,
        species
    );
}

Iris::Iris(
    float _sepalLength,
    float _sepalWidth,
    float _petalLength,
    float _petalWidth,
    const std::string& _species
)
    : sepalLength(_sepalLength),
      sepalWidth(_sepalWidth),
      petalLength(_petalLength),
      petalWidth(_petalWidth),
      species(_species)
{}

void Iris::print() const {
    std::cout << "Species: " << species << "\n"
              << "Sepal Length: " << sepalLength << "\n"
              << "Sepal Width: " << sepalWidth << "\n"
              << "Petal Length: " << petalLength << "\n"
              << "Petal Width: " << petalWidth << "\n";
}
