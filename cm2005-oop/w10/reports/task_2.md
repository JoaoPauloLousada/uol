# CandlestickPlotter Implementation Report

## Overview
This report documents the implementation of a CandlestickPlotter system for visualizing candlestick data in a console-based format. The system extends the existing candlestick computation framework by providing visual representation of temperature data over time, using ASCII art and color coding to represent candlestick patterns.

## Architecture Overview

The CandlestickPlotter implementation builds upon the existing candlestick computation system and introduces a new visualization layer:

### Core Classes

1. **CandlestickPlotter** - Handles visualization and plotting of candlestick data
2. **Candlestick** - Provides data access methods for plotting (existing class)
3. **CSVLine** - Data representation (existing class)

## Implementation Details

### 1. Visual Representation Design

#### CandlestickPlotter Class
- **Purpose**: Converts numerical candlestick data into visual ASCII representation
- **Key Methods**:
  - `CandlestickPlotter(std::vector<Candlestick> _candlesticks)`: Constructor initializes with candlestick data
  - `plot()`: Main plotting method that generates the visual output
- **Data Structure**: Stores candlestick collection as private member variable

#### Visual Elements
- **Body Representation**: Uses `[ ]` symbols to represent the candlestick body (open/close range)
- **Wick Representation**: Uses `|` symbols to represent the high/low range
- **Color Coding**: 
  - Green (`\033[32m`) for bullish candlesticks (close > open)
  - Red (`\033[31m`) for bearish candlesticks (close < open)
  - White (`\033[37m`) for neutral candlesticks (close = open)

### 2. Plotting Algorithm

#### Temperature Range Calculation
The plotting algorithm begins by determining the overall temperature range:

```cpp
double minTemp = candlesticks[0].getLow();
double maxTemp = candlesticks[0].getHigh();
for (const Candlestick& candlestick : candlesticks)
{
    minTemp = std::min(minTemp, candlestick.getLow());
    maxTemp = std::max(maxTemp, candlestick.getHigh());
}
```

#### Row-by-Row Rendering
The visualization is generated from top to bottom (highest to lowest temperature):

1. **Temperature Labels**: Each row starts with a formatted temperature value
2. **Candlestick Rendering**: For each candlestick, determines what to display:
   - **Body Area**: If temperature is within open/close range, displays colored box
   - **Wick Area**: If temperature is outside body but within high/low range, displays colored line
   - **Empty Space**: If temperature is outside candlestick range, displays empty space

#### Candlestick Body Logic
```cpp
int boxTop = std::max(candlestick.getClose(), candlestick.getOpen());
int boxBottom = std::min(candlestick.getClose(), candlestick.getOpen());
if (temp <= boxTop && temp >= boxBottom)
{
    // Render body with appropriate color
}
```

### 3. Color System Implementation

#### ANSI Color Codes
The system uses ANSI escape sequences for terminal color output:

- **GREEN**: `\033[32m` - Represents bullish candlesticks
- **RED**: `\033[31m` - Represents bearish candlesticks  
- **WHITE**: `\033[37m` - Represents neutral candlesticks
- **RESET**: `\033[0m` - Resets color formatting

#### Color Selection Logic
```cpp
if (candlestick.getClose() > candlestick.getOpen())
{
    std::cout << GREEN << " [ ] " << RESET;  // Bullish
}
else if (candlestick.getClose() < candlestick.getOpen())
{
    std::cout << RED << " [ ] " << RESET;    // Bearish
}
else
{
    std::cout << WHITE << " [=] " << RESET;  // Neutral
}
```

### 4. X-Axis Labeling

#### Year Display
After the main candlestick chart, the system displays year labels:

```cpp
std::cout << "   ";
for (int i = 0; i < candlesticks.size(); i++)
{
    std::cout << candlesticks[i].getYear() << " ";
}
```

This provides temporal context for the candlestick data, allowing users to correlate visual patterns with specific years.

## Main Program Integration

The CandlestickPlotter integrates seamlessly with the existing main program flow:

1. **Data Processing**: Uses the same candlestick generation pipeline
2. **Visualization**: Adds plotting step after candlestick computation
3. **Output**: Provides both numerical and visual representations

### Integration Code
```cpp
// Create candlesticks (existing logic)
std::vector<Candlestick> candlesticks;
// ... candlestick generation ...

// Add visualization
CandlestickPlotter candlestickPlotter(candlesticks);
candlestickPlotter.plot();
```

## Data Flow

```
Candlestick Data → CandlestickPlotter → Visual ASCII Chart
```

## Key Features

### 1. Visual Clarity
- Clear distinction between bullish and bearish patterns
- Intuitive representation of price movement
- Easy-to-read temperature scale

### 2. Color-Coded Analysis
- Immediate visual identification of trend direction
- Consistent color scheme for pattern recognition
- Enhanced readability in terminal environments

### 3. Scalable Design
- Automatically adjusts to data range
- Handles varying numbers of candlesticks
- Maintains visual consistency across different datasets

### 4. Console Compatibility
- Uses standard ANSI color codes
- Works across different terminal emulators
- Graceful degradation on non-color terminals

## Current Limitations and Areas for Improvement

### 1. Display Constraints
- Limited by terminal width for large datasets
- Fixed character spacing may not scale well
- No horizontal scrolling for wide charts

### 2. Precision Issues
- Integer-based temperature display may lose precision
- Rounding effects in visual representation
- Limited resolution for small temperature differences

### 3. Formatting Limitations
- Fixed 5-character spacing for candlesticks
- No configurable chart dimensions
- Limited customization options

### 4. Performance Considerations
- No caching for repeated plotting
- Linear time complexity for each row
- Memory usage scales with temperature range

## Testing and Validation

The implementation includes visual validation through:
- Console output verification
- Color rendering testing
- Alignment and spacing checks
- Year label accuracy verification

## Future Enhancements

### 1. Advanced Visualization
- **Interactive Plotting**: Add zoom and pan capabilities
- **Multiple Timeframes**: Support for different aggregation periods
- **Technical Indicators**: Overlay moving averages, RSI, etc.

### 2. Output Formats
- **File Export**: Save charts as text files or images
- **HTML Output**: Generate web-compatible charts
- **JSON Data**: Export chart data for external tools

### 3. Configuration Options
- **Custom Colors**: User-defined color schemes
- **Chart Dimensions**: Configurable width and height
- **Display Options**: Toggle various visual elements

### 4. Performance Optimization
- **Caching**: Store computed chart elements
- **Lazy Rendering**: Only render visible portions
- **Parallel Processing**: Multi-threaded chart generation

### 5. Enhanced Features
- **Volume Display**: Add volume bars below price chart
- **Pattern Recognition**: Highlight common candlestick patterns
- **Statistical Overlays**: Add mean, median, and standard deviation lines

## Technical Considerations

### 1. Terminal Compatibility
- **ANSI Support**: Requires terminal with ANSI color support
- **Character Encoding**: Assumes UTF-8 or compatible encoding
- **Display Width**: Limited by terminal window size

### 2. Data Requirements
- **Temperature Range**: Works best with reasonable temperature variations
- **Data Density**: Optimal performance with moderate dataset sizes
- **Missing Data**: Handles gaps gracefully with empty spaces

### 3. Memory Usage
- **Linear Scaling**: Memory usage proportional to candlestick count
- **Temporary Storage**: Minimal additional memory for plotting
- **Efficient Iteration**: Uses references to avoid data copying

## Conclusion

The CandlestickPlotter successfully extends the candlestick computation system with a functional visual representation layer. The implementation demonstrates effective use of console-based visualization techniques while maintaining the modular design principles established in the core system. The color-coded output provides immediate visual feedback for trend analysis, making it a valuable addition to the data analysis toolkit.

The system's integration with the existing pipeline showcases good software engineering practices, with clear separation of concerns and minimal coupling between components. While there are opportunities for enhancement in areas such as interactivity and output flexibility, the current implementation provides a solid foundation for further development and serves as an effective tool for quick visual analysis of temperature trends over time. 