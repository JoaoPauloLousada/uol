/**
 * GetAttendeeById
 *
 * Action class for retrieving an attendee by their unique identifier.
 * Used for fetching attendee information from session data.
 * 
 * author: Joao Paulo Lousada
 */
const { NotFoundError } = require('../errors/not-found.js');
const Attendee = require('./attendee.js');

/**
 * Action class for retrieving an attendee by ID.
 *
 * Executes a database query to find an attendee
 * matching the provided attendee ID.
 */
class GetAttendeeById {
    /**
     * Creates a new GetAttendeeById action instance.
     *
     * @param {number|null} attendeeId - Unique identifier of the attendee to retrieve
     */
    constructor(attendeeId) {
        this.attendeeId = attendeeId;
    }

    /**
     * Retrieves an attendee by their ID from the database.
     *
     * @returns {Promise<Attendee|null>} Attendee instance if found, null if attendeeId is not provided
     * @throws {NotFoundError} Throws error if attendee is not found in database
     */
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

