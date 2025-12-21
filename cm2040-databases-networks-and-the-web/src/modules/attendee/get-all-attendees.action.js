const Attendee = require('./attendee.js');

class GetAllAttendees {
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

