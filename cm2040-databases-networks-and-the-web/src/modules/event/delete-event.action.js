class DeleteEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

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

