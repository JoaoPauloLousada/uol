class UnpublishEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            const unpublishEventQuery = `
                UPDATE events 
                SET status = 'draft', updated_date = ?
                WHERE event_id = ?
            `;
            const params = [updatedDate, this.eventId];

            await new Promise((resolve, reject) => {
                global.db.run(unpublishEventQuery, params, function (err) {
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
            console.error('Error unpublishing event:', error.message);
            throw error;
        }
    }
}

module.exports.UnpublishEvent = UnpublishEvent;

