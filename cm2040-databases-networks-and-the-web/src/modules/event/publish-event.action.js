/**
 * PublishEvent
 *
 * Action class for publishing events.
 * Changes an event's status from draft to published.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for publishing events.
 *
 * Updates an event's status to published and sets the published date.
 */
class PublishEvent {
    /**
     * Creates a new PublishEvent action instance.
     *
     * @param {number} eventId - Unique identifier of the event to publish
     */
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Publishes an event by updating its status to published.
     *
     * @returns {Promise<void>} Resolves when event is successfully published
     * @throws {Error} Throws error if event is not found or database operation fails
     */
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

