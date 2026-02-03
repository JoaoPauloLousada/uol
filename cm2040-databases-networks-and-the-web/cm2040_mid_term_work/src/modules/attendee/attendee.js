/**
 * Attendee
 *
 * Entity class representing an attendee in the system.
 * Encapsulates attendee data retrieved from the database.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Entity class representing an attendee.
 *
 * Represents an attendee user with their authentication credentials,
 * profile information, and special status.
 */
class Attendee {
    /**
     * Creates a new Attendee instance.
     *
     * @param {number} attendee_id - Unique identifier for the attendee
     * @param {string} username - Display name of the attendee
     * @param {string} email - Email address of the attendee
     * @param {string} password_hash - Hashed password for authentication
     * @param {number} is_special - Flag indicating if attendee has special status (0 or 1)
     * @param {string} created_date - ISO date string when the attendee was created
     * @param {string} updated_date - ISO date string when the attendee was last updated
     */
    constructor(attendee_id, username, email, password_hash, is_special, created_date, updated_date) {
        this.id = attendee_id;
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
        this.is_special = is_special;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

module.exports = Attendee;

