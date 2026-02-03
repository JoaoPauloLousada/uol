/**
 * UnpublishEvent
 *
 * Action class for unpublishing events.
 * Changes an event's status from published back to draft.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for unpublishing events.
 *
 * Updates an event's status from published back to draft.
 */
class UnpublishEvent {
    /**
     * Creates a new UnpublishEvent action instance.
     *
     * @param {number} eventId - Unique identifier of the event to unpublish
     */
    constructor(eventId) {
        this.eventId = eventId;
    }

    /**
     * Unpublishes an event by updating its status to draft.
     *
     * @returns {Promise<void>} Resolves when event is successfully unpublished
     * @throws {Error} Throws error if event is not found or database operation fails
     */
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

