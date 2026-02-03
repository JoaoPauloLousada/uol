/**
 * Ticket
 *
 * Entity class representing a ticket in the system.
 * Encapsulates ticket data including availability calculations.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Entity class representing a ticket.
 *
 * Represents a ticket type for an event with quantity, price,
 * and booked quantity information. Provides calculated available quantity.
 */
class Ticket {
    /**
     * Creates a new Ticket instance.
     *
     * @param {number} ticketId - Unique identifier for the ticket
     * @param {number} eventId - Unique identifier of the event this ticket belongs to
     * @param {string} ticketType - Type of ticket ('full' or 'concession')
     * @param {number} quantity - Total quantity of tickets available
     * @param {number} price - Price per ticket
     * @param {number} bookedQuantity - Number of tickets already booked
     */
    constructor(ticketId, eventId, ticketType, quantity, price, bookedQuantity) {
        this.id = ticketId;
        this.eventId = eventId;
        this.ticketType = ticketType;
        this.quantity = quantity;
        this.price = price;
        this.bookedQuantity = bookedQuantity;
    }

    /**
     * Calculates the available quantity of tickets.
     *
     * @returns {number} Number of tickets still available (total quantity minus booked quantity, minimum 0)
     */
    get availableQuantity() {
        return Math.max(this.quantity - this.bookedQuantity, 0);
    }
}

module.exports.Ticket = Ticket;