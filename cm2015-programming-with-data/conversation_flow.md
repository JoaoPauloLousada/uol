# Bella Italia Chatbot - Conversation Flow

## Typical Conversation Flow

### 1. Greeting
- **User**: "Hello" / "Hi" / "Good morning"
- **Bot**: Welcomes customer and asks how to help
- **Example**: "Hello! Welcome to Bella Italia! How can I help you today?"

### 2. Name Collection (Optional)
- **User**: "I'm John" / "My name is Sarah"
- **Bot**: Stores name and uses it in future responses
- **Example**: "Nice to meet you, John! What would you like to order?"

### 3. Menu Inquiry
- **User**: "Show me the menu" / "What do you have?"
- **Bot**: Displays menu organized by categories (Pastas, Salads, Drinks)
- **Example**: "Here's our menu:\n**Pastas:** Spaghetti Carbonara (£16.50), Penne Arrabbiata (£14.50)...\n**Salads:** Insalata Caprese (£14.50)...\n**Drinks:** Italian Red Wine (£8.50)...\nWhat would you like to order?"

### 4. Item Details (Optional)
- **User**: "Tell me about Spaghetti Carbonara" / "What is Lasagna?"
- **Bot**: Provides description and price
- **Example**: "Spaghetti Carbonara is a classic Roman pasta with eggs, pancetta, parmesan, and black pepper. It costs £16.50."

### 5. Place Order (Can Repeat Multiple Times)
- **User**: "I want 2 Spaghetti Carbonara" / "Add a Caesar Salad"
- **Bot**: Adds item to cart, shows updated total, asks if they want more
- **Example**: "Great! I've added 2 Spaghetti Carbonara(s) to your order. Your total is now £33.00. Anything else?"

### 6. View Cart
- **User**: "Show my order" / "What's in my cart?"
- **Bot**: Displays all items, quantities, and total price
- **Example**: "Here's your current order:\n2x Spaghetti Carbonara - £33.00\n1x Caesar Salad - £15.00\nTotal: £48.00\nReady to checkout?"

### 7. Checkout
- **User**: "Yes, checkout" / "Complete order"
- **Bot**: Confirms order and thanks customer
- **Example**: "Thank you for your order, John! Your total is £48.00. We'll have it ready soon. Enjoy your meal!"

### 8. Goodbye
- **User**: "Bye" / "Thank you" / "Exit" / "Quit"
- **Bot**: Says goodbye and exits
- **Example**: "Thank you for visiting Bella Italia, John! Have a great day!"

## Key Features

### Memory Management
- **Customer Name**: Store and use throughout conversation
- **Cart**: Remember all ordered items and quantities
- **Total**: Calculate and update total dynamically

### Dynamic Responses
- Use customer name in responses: "Thank you, {name}!"
- Show order details: "{quantity}x {item_name} - £{price}"
- Display running total: "Your total is now £{total}"

### Flexible Ordering
- Allow multiple items to be added before checkout
- Support quantity specification: "2 pizzas", "three salads"
- Handle item name variations: "Spaghetti Carbonara" vs "carbonara"

### Error Handling
- Handle unknown items gracefully
- Ask for clarification if intent is unclear
- Provide helpful suggestions

## Example Complete Conversation

```
User: Hello
Bot: Hello! Welcome to Bella Italia! How can I help you today?

User: I'm John
Bot: Nice to meet you, John! What would you like to order?

User: Show me the menu
Bot: Here's our menu:
     Pastas: Spaghetti Carbonara (£16.50), Penne Arrabbiata (£14.50)...
     Salads: Insalata Caprese (£14.50)...
     Drinks: Italian Red Wine (£8.50)...
     What would you like to order?

User: Tell me about Spaghetti Carbonara
Bot: Spaghetti Carbonara is a classic Roman pasta with eggs, pancetta, 
     parmesan, and black pepper. It costs £16.50.

User: I want 2 Spaghetti Carbonara
Bot: Great! I've added 2 Spaghetti Carbonara(s) to your order. 
     Your total is now £33.00. Anything else?

User: Add a Caesar Salad
Bot: Perfect! Caesar Salad added. Your total is now £48.00. Want to add more?

User: Show my order
Bot: Here's your current order:
     2x Spaghetti Carbonara - £33.00
     1x Caesar Salad - £15.00
     Total: £48.00
     Ready to checkout?

User: Yes, checkout
Bot: Thank you for your order, John! Your total is £48.00. 
     We'll have it ready soon. Enjoy your meal!

User: Thank you, bye
Bot: Thank you for visiting Bella Italia, John! Have a great day!
```

