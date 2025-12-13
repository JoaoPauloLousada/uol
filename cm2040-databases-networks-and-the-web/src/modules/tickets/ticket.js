class Ticket {
    constructor(ticketId, eventId, ticketType, quantity, price) {
        this.id = ticketId;
        this.eventId = eventId;
        this.ticketType = ticketType;
        this.quantity = quantity;
        this.price = price;
    }
}

module.exports.Ticket = Ticket;