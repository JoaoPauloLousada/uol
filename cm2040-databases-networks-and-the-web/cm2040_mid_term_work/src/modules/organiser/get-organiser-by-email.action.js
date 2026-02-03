/**
 * GetOrganiserByEmail
 *
 * Action class for retrieving an organiser by their email address.
 * Used for authentication and user lookup operations.
 * 
 * author: Joao Paulo Lousada
 */
const { NotFoundError } = require('../errors/not-found.js');
const Organiser = require('./organiser.js');

/**
 * Action class for retrieving an organiser by email.
 *
 * Executes a database query to find an organiser
 * matching the provided email address.
 */
class GetOrganiserByEmail {
    /**
     * Creates a new GetOrganiserByEmail action instance.
     *
     * @param {string} email - Email address of the organiser to retrieve
     */
    constructor(email) {
        this.email = email;
    }

    /**
     * Retrieves an organiser by their email address from the database.
     *
     * @returns {Promise<Organiser>} Organiser instance if found
     * @throws {NotFoundError} Throws error if organiser is not found
     */
    async execute() {
        const query = "SELECT * FROM organisers WHERE email = ? LIMIT 1";
        const queryParameters = [this.email];
        const organiser = new Promise((resolve, reject) => {
            global.db.get(query, queryParameters, function (err, row) {
                if (err) {
                    return reject(err);
                } else {
                    if (row) {
                        const organiserInstance = new Organiser(
                            row.organiser_id,
                            row.username,
                            row.email,
                            row.password_hash,
                            row.created_date,
                            row.updated_date
                        );
                        return resolve(organiserInstance);
                    } else {
                        return reject(new NotFoundError('Organiser not found'));
                    }
                }
            });
        });
        return await organiser;
    }
}

module.exports.GetOrganiserByEmail = GetOrganiserByEmail;

