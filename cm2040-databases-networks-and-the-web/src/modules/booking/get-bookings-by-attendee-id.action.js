/**
 * get-bookings-by-attendee-id.action.js
 * Module for getting all bookings for a specific attendee
 * 
 * Purpose: Retrieve all bookings made by an attendee with event and ticket details
 * Inputs: attendeeId (number)
 * Outputs: Array of booking objects with event and ticket information
 */

class GetBookingsByAttendeeId {
    constructor(attendeeId) {
        this.attendeeId = attendeeId;
    }

    /**
     * Execute the query to get bookings by attendee ID
     * @returns {Promise<Array>} - Promise that resolves to an array of booking objects
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

        // Map rows to booking objects with structured data
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

