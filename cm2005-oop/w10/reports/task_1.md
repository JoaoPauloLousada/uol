# Candlestick Computation Implementation Report

## Overview
This report documents the implementation of a candlestick computation system for analyzing weather data. The system processes CSV weather data and generates candlestick information based on temperature readings, grouping data by year to create meaningful time-series analysis.

## Architecture Overview

The implementation follows an object-oriented design with clear separation of concerns across multiple classes:

### Core Classes

1. **CSVReader** - Handles file I/O operations
2. **Tokeniser** - Parses CSV lines into tokens
3. **CSVLine** - Represents individual data records
4. **CSVLineList** - Manages collections of CSV lines and grouping operations
5. **Candlestick** - Computes and stores candlestick data

## Implementation Details

### 1. Data Input and Parsing

#### CSVReader Class
- **Purpose**: Reads CSV files and returns lines as strings
- **Key Methods**:
  - `readCSV(std::string csvFile)`: Reads entire CSV file into vector of strings
- **Error Handling**: Includes exception handling for file operations and line processing
- **File Path**: Currently configured for `opsd-weather_data-2020-09-16/weather_data.csv`

#### Tokeniser Class
- **Purpose**: Static utility class for parsing CSV lines
- **Key Methods**:
  - `tokenise(std::string csvLine, char separator)`: Splits CSV line by specified separator
- **Algorithm**: Uses find_first_of/find_first_not_of for robust tokenization
- **Handles**: Edge cases like empty fields and end-of-line scenarios

### 2. Data Representation

#### CSVLine Class
- **Purpose**: Encapsulates individual weather data records
- **Key Attributes**:
  - `date`: Full date string (format: YYYY-MM-DD)
  - `year`: Extracted year as integer
  - `GB_temperature`: Temperature value as double
- **Key Methods**:
  - `getDate()`: Returns date string
  - `getYear()`: Returns year as integer
  - `getGB_temperature()`: Returns temperature value
- **Error Handling**: Try-catch blocks for string-to-number conversions

#### CSVLineList Class
- **Purpose**: Manages collections of CSV lines and provides grouping functionality
- **Key Methods**:
  - `addLine(CSVLine line)`: Adds line to collection
  - `groupByYear()`: Groups lines by year using std::map
  - `getLines()`: Returns all lines
- **Data Structure**: Uses std::map<int, std::vector<CSVLine>> for year-based grouping

### 3. Candlestick Computation

#### Candlestick Class
- **Purpose**: Computes and stores Open, High, Low, Close values for candlestick information
- **Key Attributes**:
  - `date`: Date of the candlestick (from first line in group)
  - `open`: Opening value (passed as parameter)
  - `close`: Average temperature for the period
  - `high`: Maximum temperature in the period
  - `low`: Minimum temperature in the period
  - `lines`: Vector of CSV lines for the period

#### Candlestick Calculation Logic

**Open Value**: 
- First candlestick: Uses provided open value (default 0)
- Subsequent candlesticks: Uses close value from previous candlestick

**Close Value**:
- Calculated as average of all GB_temperature values in the period
- Method: `calculateClose()` - sums all temperatures and divides by count

**High Value**:
- Calculated as maximum GB_temperature in the period
- Method: `calculateHigh()` - iterates through lines to find maximum

**Low Value**:
- Calculated as minimum GB_temperature in the period
- Method: `calculateLow()` - iterates through lines to find minimum

## Main Program Flow

The main.cpp file orchestrates the entire process:

1. **File Reading**: Uses CSVReader to load weather data
2. **Header Processing**: Parses header to create column mapping
3. **Data Parsing**: Creates CSVLine objects from each data row
4. **Data Grouping**: Groups lines by year using CSVLineList
5. **Candlestick Generation**: Creates candlestick objects for each year
6. **Output**: Displays candlestick data (Date, Open, Close, High, Low)

## Data Flow

```
CSV File → CSVReader → Tokeniser → CSVLine → CSVLineList → Candlestick
```

## Key Features

### 1. Robust Error Handling
- File I/O exception handling
- String-to-number conversion error handling
- Graceful degradation for malformed data

### 2. Modular Design
- Clear separation of responsibilities
- Reusable components (Tokeniser, CSVReader)
- Easy to extend and modify

### 3. Memory Efficiency
- Uses references where appropriate
- Efficient data structures (std::map for grouping)
- Minimal memory overhead

### 4. Data Integrity
- Preserves original data structure
- Maintains chronological order
- Handles missing or invalid data gracefully

## Current Limitations and Areas for Improvement

### 1. Data Validation
- Limited validation of temperature values
- No range checking for reasonable temperature values
- Missing validation for date format consistency

### 2. Performance Optimization
- Could implement more efficient algorithms for min/max calculations
- Memory usage could be optimized for large datasets
- No caching mechanism for repeated calculations

### 3. Flexibility
- Hardcoded column names ("GB_temperature")
- Fixed date format assumptions
- Limited to yearly grouping (could support monthly, weekly, etc.)

### 4. Output Format
- Basic console output only
- No export functionality (CSV, JSON, etc.)
- No visualization capabilities

## Testing and Validation

The implementation includes basic testing through console output:
- Line count verification
- Year grouping statistics
- Candlestick data display

## Future Enhancements

1. **Additional Time Periods**: Support for monthly, weekly, or daily candlesticks
2. **Multiple Metrics**: Extend beyond temperature to other weather parameters
3. **Data Export**: Add functionality to export results in various formats
4. **Visualization**: Integrate with charting libraries
5. **Performance**: Implement caching and optimization for large datasets
6. **Configuration**: Make column names and time periods configurable

## Conclusion

The candlestick computation system successfully implements the core functionality for processing weather data and generating candlestick information. The modular design provides a solid foundation for future enhancements while maintaining code clarity and maintainability. The system demonstrates good object-oriented principles and error handling practices.
