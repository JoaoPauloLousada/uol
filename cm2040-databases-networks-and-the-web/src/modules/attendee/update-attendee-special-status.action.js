class UpdateAttendeeSpecialStatus {
    constructor(attendeeId, isSpecial) {
        this.attendeeId = attendeeId;
        this.isSpecial = isSpecial ? 1 : 0;
    }

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

