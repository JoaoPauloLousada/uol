const { NotFoundError } = require('../errors/not-found.js');
const Attendee = require('./attendee.js');

class GetAttendeeById {
    constructor(attendeeId) {
        this.attendeeId = attendeeId;
    }

    async execute() {
        if (!this.attendeeId) {
            return null;
        }
        const query = "SELECT * FROM attendees WHERE attendee_id = ? LIMIT 1";
        const queryParameters = [this.attendeeId];
        const attendee = new Promise((resolve, reject) => {
            global.db.get(query, queryParameters, function (err, row) {
                if (err) {
                    return reject(err);
                } else {
                    if (row) {
                        const attendeeInstance = new Attendee(
                            row.attendee_id,
                            row.username,
                            row.email,
                            row.password_hash,
                            row.is_special,
                            row.created_date,
                            row.updated_date
                        );
                        return resolve(attendeeInstance);
                    } else {
                        return reject(new NotFoundError('Attendee not found'));
                    }
                }
            });
        });
        return await attendee;
    }
}

module.exports.GetAttendeeById = GetAttendeeById;

