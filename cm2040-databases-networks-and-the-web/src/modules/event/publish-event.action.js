/**
 * publish-event.action.js
 * Module for publishing an event
 * 
 * Purpose: Change event status from 'draft' to 'published' and set published_date
 * Inputs: eventId (number)
 * Outputs: Promise that resolves when event is published
 */

class PublishEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Execute the event publishing process
     * Changes status to 'published' and sets published_date
     * @returns {Promise<void>} - Promise that resolves when event is published
     */
    async execute() {
        try {
            const publishedDate = new Date().toISOString();
            const updatedDate = publishedDate;

            // Update the event status and published_date
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
                        // Check if any rows were affected
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

