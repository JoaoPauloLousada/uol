/**
 * delete-event.js
 * Module for deleting an event and its related records
 * 
 * Purpose: Delete an event and all associated tickets and bookings
 * Inputs: eventId (number)
 * Outputs: Promise that resolves when event is deleted
 */

class DeleteEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Execute the event deletion process
     * Deletes bookings, tickets, and then the event itself
     * @returns {Promise<void>} - Promise that resolves when event is deleted
     */
    async execute() {
        try {
            // Delete in order: bookings first (if any), then tickets, then event
            // This is necessary because of foreign key constraints

            // Delete bookings associated with this event
            const deleteBookingsQuery = `DELETE FROM bookings WHERE event_id = ?`;
            await new Promise((resolve, reject) => {
                global.db.run(deleteBookingsQuery, [this.eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

            // Delete tickets associated with this event
            const deleteTicketsQuery = `DELETE FROM tickets WHERE event_id = ?`;
            await new Promise((resolve, reject) => {
                global.db.run(deleteTicketsQuery, [this.eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve();
                    }
                });
            });

            // Finally, delete the event itself
            const deleteEventQuery = `DELETE FROM events WHERE event_id = ?`;
            await new Promise((resolve, reject) => {
                global.db.run(deleteEventQuery, [this.eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        // Check if any rows were affected
                        if (this.changes === 0) {
                            return reject(new Error('Event not found'));
                        }
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error('Error deleting event:', error.message);
            throw error;
        }
    }
}

module.exports.DeleteEvent = DeleteEvent;

