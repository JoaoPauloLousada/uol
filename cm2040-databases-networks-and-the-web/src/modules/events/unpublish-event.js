/**
 * unpublish-event.js
 * Module for unpublishing an event
 * 
 * Purpose: Change event status from 'published' to 'draft'
 * Inputs: eventId (number)
 * Outputs: Promise that resolves when event is unpublished
 */

class UnpublishEvent {
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Execute the event unpublishing process
     * Changes status to 'draft' and updates updated_date
     * Note: published_date is kept for historical purposes
     * @returns {Promise<void>} - Promise that resolves when event is unpublished
     */
    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            // Update the event status to 'draft'
            // Keep published_date for historical purposes
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
                        // Check if any rows were affected
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

