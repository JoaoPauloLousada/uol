/**
 * UpdateAttendeeSpecialStatus
 *
 * Action class for updating an attendee's special status.
 * Modifies the is_special flag for a specific attendee in the database.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Action class for updating attendee special status.
 *
 * Updates the special status flag for an attendee,
 * allowing them to purchase concession tickets.
 */
class UpdateAttendeeSpecialStatus {
    /**
     * Creates a new UpdateAttendeeSpecialStatus action instance.
     *
     * @param {number} attendeeId - Unique identifier of the attendee to update
     * @param {boolean} isSpecial - Whether the attendee should have special status
     */
    constructor(attendeeId, isSpecial) {
        this.attendeeId = attendeeId;
        this.isSpecial = isSpecial ? 1 : 0;
    }

    /**
     * Updates the attendee's special status in the database.
     *
     * @returns {Promise<void>} Resolves when update is successful
     * @throws {Error} Throws error if attendee is not found or database operation fails
     */
    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            const updateQuery = `
                UPDATE attendees 
                SET is_special = ?, updated_date = ?
                WHERE attendee_id = ?
            `;
            const params = [this.isSpecial, updatedDate, this.attendeeId];

            await new Promise((resolve, reject) => {
                global.db.run(updateQuery, params, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        if (this.changes === 0) {
                            return reject(new Error('Attendee not found'));
                        }
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error('Error updating attendee special status:', error.message);
            throw error;
        }
    }
}

module.exports.UpdateAttendeeSpecialStatus = UpdateAttendeeSpecialStatus;

