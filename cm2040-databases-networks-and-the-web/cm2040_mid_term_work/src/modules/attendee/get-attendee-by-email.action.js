/**
 * GetAttendeeByEmail
 *
 * Action class for retrieving an attendee by their email address.
 * Used for authentication and user lookup operations.
 * 
 * author: Joao Paulo Lousada
 */
const { NotFoundError } = require('../errors/not-found.js');
const Attendee = require('./attendee.js');

/**
 * Action class for retrieving an attendee by email.
 *
 * Executes a database query to find an attendee
 * matching the provided email address.
 */
class GetAttendeeByEmail {
    /**
     * Creates a new GetAttendeeByEmail action instance.
     *
     * @param {string} email - Email address of the attendee to retrieve
     */
    constructor(email) {
        this.email = email;
    }

    /**
     * Retrieves an attendee by their email address from the database.
     *
     * @returns {Promise<Attendee>} Attendee instance if found
     * @throws {NotFoundError} Throws error if attendee is not found
     */
    async execute() {
        const query = "SELECT * FROM attendees WHERE email = ? LIMIT 1";
        const queryParameters = [this.email];
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

module.exports.GetAttendeeByEmail = GetAttendeeByEmail;

