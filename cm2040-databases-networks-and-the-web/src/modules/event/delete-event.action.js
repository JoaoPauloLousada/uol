/**
 * DeleteEvent
 *
 * Action class for deleting events.
 * Removes an event and all associated bookings and tickets from the database.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for deleting events.
 *
 * Deletes an event and cascades deletion to associated bookings
 * and tickets in the correct order.
 */
class DeleteEvent {
    /**
     * Creates a new DeleteEvent action instance.
     *
     * @param {number} eventId - Unique identifier of the event to delete
     */
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Deletes an event and all associated bookings and tickets.
     *
     * @returns {Promise<void>} Resolves when event is successfully deleted
     * @throws {Error} Throws error if event is not found or database operation fails
     */
    async execute() {
        try {
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

            const deleteEventQuery = `DELETE FROM events WHERE event_id = ?`;
            await new Promise((resolve, reject) => {
                global.db.run(deleteEventQuery, [this.eventId], function (err) {
                    if (err) {
                        return reject(err);
                    } else {
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

