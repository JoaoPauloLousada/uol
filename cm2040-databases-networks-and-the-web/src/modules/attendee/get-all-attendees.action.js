/**
 * get-all-attendees.action.js
 * Module for getting all attendees
 * 
 * Purpose: Retrieve all attendees from the database
 * Inputs: None
 * Outputs: Array of Attendee objects
 */

const Attendee = require('./attendee.js');

class GetAllAttendees {
    /**
     * Execute the query to get all attendees
     * @returns {Promise<Attendee[]>} - Promise that resolves to an array of Attendee objects
     */
    async execute() {
        const query = "SELECT * FROM attendees ORDER BY attendee_id DESC";
        const attendees = await new Promise((resolve, reject) => {
            global.db.all(query, function (err, rows) {
                if (err) {
                    return reject(err);
                } else {
                    if (!rows || rows.length === 0) {
                        return resolve([]);
                    }
                    // Map rows to Attendee instances
                    const attendees = rows.map(row => new Attendee(
                        row.attendee_id,
                        row.username,
                        row.email,
                        row.password_hash,
                        row.is_special,
                        row.created_date,
                        row.updated_date
                    ));
                    return resolve(attendees);
                }
            });
        });
        return attendees;
    }
}

module.exports.GetAllAttendees = GetAllAttendees;

