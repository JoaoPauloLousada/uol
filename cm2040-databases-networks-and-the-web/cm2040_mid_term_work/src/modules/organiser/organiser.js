/**
 * Organiser
 *
 * Entity class representing an organiser in the system.
 * Encapsulates organiser data retrieved from the database.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Entity class representing an organiser.
 *
 * Represents an organiser user with their authentication credentials
 * and profile information.
 */
class Organiser {
    /**
     * Creates a new Organiser instance.
     *
     * @param {number} organiser_id - Unique identifier for the organiser
     * @param {string} username - Display name of the organiser
     * @param {string} email - Email address of the organiser
     * @param {string} password_hash - Hashed password for authentication
     * @param {string} created_date - date string when the organiser was created
     * @param {string} updated_date - date string when the organiser was last updated
     */
    constructor(organiser_id, username, email, password_hash, created_date, updated_date) {
        this.id = organiser_id;
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

module.exports = Organiser;