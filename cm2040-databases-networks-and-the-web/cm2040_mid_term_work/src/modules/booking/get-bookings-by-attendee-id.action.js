/**
 * GetBookingsByAttendeeId
 *
 * Action class for retrieving bookings by attendee ID.
 * Fetches all bookings for a specific attendee with associated event and ticket information.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for retrieving bookings by attendee ID.
 *
 * Executes a database query to fetch all bookings for an attendee,
 * including related event and ticket details.
 */
class GetBookingsByAttendeeId {
    /**
     * Creates a new GetBookingsByAttendeeId action instance.
     *
     * @param {number|null} attendeeId - Unique identifier of the attendee to retrieve bookings for
     */
    constructor(attendeeId) {
        this.attendeeId = attendeeId;
    }

    /**
     * Retrieves all bookings for the specified attendee from the database.
     *
     * @returns {Promise<Array<Object>>} Array of booking objects with event and ticket details, empty array if attendeeId is null or no bookings found
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        if (!this.attendeeId) {
            return [];
        }

        const bookings = await new Promise((resolve, reject) => {
            const QUERY = `
                SELECT 
                    b.booking_id,
                    b.event_id,
                    b.attendee_id,
                    b.ticket_id,
                    b.quantity,
                    b.booking_date,
                    e.title AS event_title,
                    e.description AS event_description,
                    e.event_date,
                    e.status AS event_status,
                    t.ticket_type,
                    t.price AS ticket_price
                FROM bookings b
                INNER JOIN events e ON b.event_id = e.event_id
                INNER JOIN tickets t ON b.ticket_id = t.ticket_id
                WHERE b.attendee_id = ?
                ORDER BY b.booking_date DESC
            `;
            global.db.all(QUERY, [this.attendeeId], function (err, rows) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows || []);
                }
            });
        });

        return bookings.map(booking => ({
            bookingId: booking.booking_id,
            eventId: booking.event_id,
            attendeeId: booking.attendee_id,
            ticketId: booking.ticket_id,
            quantity: booking.quantity,
            bookingDate: booking.booking_date,
            event: {
                title: booking.event_title,
                description: booking.event_description,
                eventDate: booking.event_date,
                status: booking.event_status
            },
            ticket: {
                ticketType: booking.ticket_type,
                price: booking.ticket_price
            }
        }));
    }
}

module.exports.GetBookingsByAttendeeId = GetBookingsByAttendeeId;

