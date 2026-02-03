# Food Ordering Assistant Chatbot - Development Plan

## 1. Project Setup & Design
- [x] Choose restaurant name and theme (Bella Italia - Italian restaurant)
- [x] Design menu structure (categories, items, prices) - See menu.md
- [x] Define core intents (greeting, menu, ordering, checkout, etc.) - See intents.md
- [x] Plan conversation flow - See conversation_flow.md

## 2. Data Structure Design
- [x] Create `intents.json` structure (initial version with first 3 intents)
- [x] Define menu data format (pastas, salads, drinks with prices and descriptions)
- [x] Design pattern-to-intent mapping (regex patterns for greeting, name_collection, menu_inquiry)
- [x] Plan memory storage structure (user name, cart, preferences) - ChatbotMemory class implemented

## 3. Core Functions Implementation
- [x] Function to load JSON file (`load_intents()`)
- [x] Function to build pattern-to-intent dictionary (`build_pattern_to_intent()`)
- [x] Function to build intent-to-response dictionary (`build_intent_to_response()`)
- [x] Function to extract menu data from JSON (`extract_menu_data()` and `format_menu_for_display()`)

## 4. Text Preprocessing
- [x] Implement preprocessing function with lemmatization (`preprocess_input()`)
- [x] Tokenize user input (split into words)
- [x] Remove punctuation (commas, periods, etc.)
- [x] Apply lemmatization (reduce words to root form)
- [x] Normalize whitespace
- [x] Test preprocessing with sample inputs

## 5. Pattern Recognition (Regex)
- [x] Implement regex pattern matching function (`match_pattern()`)
- [x] Handle case insensitivity (using `re.IGNORECASE`)
- [x] Support optional words and variations (patterns use `(?:...)` constructs)
- [x] Extract quantities (numbers) from user input (`extract_quantity()` using `\d+`)
- [x] Extract item names from patterns (`extract_item_name()`)
- [x] Use regex constructs: `\d`, `\w`, `.`, `*`, `+`, `?` (in patterns and functions)

## 6. Response Generation
- [x] Random response selection from list
- [x] Dynamic string substitution with placeholders
- [x] Implement memory for user name
- [x] Implement cart/order memory
- [x] Format responses with user data

## 7. Main Loop
- [x] Create main conversation loop
- [x] Handle user input
- [x] Exit on "exit" or "quit"
- [x] Integrate pattern matching with main loop
- [x] Call response generation function

## 8. Order Management System
- [x] Cart data structure (list/dict)
- [x] Add items to cart function
- [x] Calculate total price function
- [x] Display cart function
- [x] Handle quantities and item names

## 9. Testing
- [ ] Test greeting and basic interaction
- [ ] Test menu inquiry
- [ ] Test order placement with quantities
- [ ] Test cart viewing
- [ ] Test memory (name storage and usage)
- [ ] Test pattern variations
- [ ] Test exit functionality

## 10. Code Organization & Documentation
- [x] Add clear comments to functions
- [x] Organize code into logical sections
- [x] Document function parameters and returns
- [x] Structure Jupyter notebook with headings
- [x] Ensure code is reproducible

## 11. Report Preparation
- [ ] Document chatbot application and domain
- [ ] Describe 3 test cases
- [ ] Explain data/code organization
- [ ] Describe advanced techniques used
- [ ] Include process reflection (week-by-week development)

## 12. Current Issues
1- Customer want's restaurant information but the pattern recognition did not work for the following examples:
```text
You: what are your hours?
Bot: I'm sorry, I didn't understand that. Could you please rephrase?

You: where are you located
Bot: I'm sorry, I didn't understand that. Could you please rephrase?
```

2 - for name_collection intent two responses are being returned by the chatbot, the expected is the chatbot to reply oly once. Example of the curent behavior which is wrong:
```text
You: I'm Sarah
Bot: Nice to meet you, Sarah!
Bot: Hello Sarah! Welcome to Bella Italia! What would you like to order?
```
