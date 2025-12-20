/**
 * update-attendee-special-status.action.js
 * Module for updating an attendee's special status
 * 
 * Purpose: Update an attendee's is_special flag to enable/disable concession ticket access
 * Inputs: attendeeId (number), isSpecial (boolean)
 * Outputs: Promise that resolves when update is complete
 */

class UpdateAttendeeSpecialStatus {
    constructor(attendeeId, isSpecial) {
        this.attendeeId = attendeeId;
        this.isSpecial = isSpecial ? 1 : 0; // Convert boolean to integer (0 or 1)
    }

    /**
     * Execute the attendee special status update process
     * Updates is_special flag and updated_date timestamp
     * @returns {Promise<void>} - Promise that resolves when update is complete
     */
    async execute() {
        try {
            const updatedDate = new Date().toISOString();

            // Update the attendee's special status
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
                        // Check if any rows were affected
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

