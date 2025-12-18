class CreateBooking {
    constructor(eventId, attendeeId, ticketId, quantity) {
        this.eventId = eventId;
        this.attendeeId = attendeeId;
        this.ticketId = ticketId;
        this.quantity = quantity;
    }

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

