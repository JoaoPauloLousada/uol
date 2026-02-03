/**
 * CreateBooking
 *
 * Action class for creating new bookings.
 * Inserts booking records into the database for attendees purchasing event tickets.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for creating bookings.
 *
 * Creates a new booking record associating an attendee with an event ticket
 * and the quantity purchased.
 */
class CreateBooking {
    /**
     * Creates a new CreateBooking action instance.
     *
     * @param {number} eventId - Unique identifier of the event being booked
     * @param {number} attendeeId - Unique identifier of the attendee making the booking
     * @param {number} ticketId - Unique identifier of the ticket type being booked
     * @param {number} quantity - Number of tickets being booked
     */
    constructor(eventId, attendeeId, ticketId, quantity) {
        this.eventId = eventId;
        this.attendeeId = attendeeId;
        this.ticketId = ticketId;
        this.quantity = quantity;
    }

    /**
     * Creates a new booking record in the database.
     *
     * @returns {Promise<undefined>} Resolves when booking is successfully created
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        const bookingDate = new Date().toISOString();
        const query = `INSERT INTO bookings (event_id, attendee_id, ticket_id, quantity, booking_date) VALUES (?, ?, ?, ?, ?)`;
        const params = [this.eventId, this.attendeeId, this.ticketId, this.quantity, bookingDate];
        const bookingId = await new Promise((resolve, reject) => {
            global.db.run(query, params, function (err) {
                if (err) {
                    return reject(err);
                } else {
                    resolve();
                }
            });
        });
        return bookingId;
    }
}

module.exports.CreateBooking = CreateBooking;

