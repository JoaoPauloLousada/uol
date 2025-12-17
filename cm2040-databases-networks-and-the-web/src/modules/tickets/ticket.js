class Ticket {
    constructor(ticketId, eventId, ticketType, quantity, price, bookedQuantity) {
        this.id = ticketId;
        this.eventId = eventId;
        this.ticketType = ticketType;
        this.quantity = quantity;
        this.price = price;
        this.bookedQuantity = bookedQuantity;
    }

    get availableQuantity() {
        return Math.max(this.quantity - this.bookedQuantity, 0);
    }
}

module.exports.Ticket = Ticket;