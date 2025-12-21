class PublishEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

    async execute() {
        try {
            const publishedDate = new Date().toISOString();
            const updatedDate = publishedDate;

            const publishEventQuery = `
                UPDATE events 
                SET status = 'published', published_date = ?, updated_date = ?
                WHERE event_id = ?
            `;
            const params = [publishedDate, updatedDate, this.eventId];

            await new Promise((resolve, reject) => {
                global.db.run(publishEventQuery, params, function (err) {
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
            console.error('Error publishing event:', error.message);
            throw error;
        }
    }
}

module.exports.PublishEvent = PublishEvent;

