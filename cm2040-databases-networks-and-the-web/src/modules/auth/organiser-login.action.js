/**
 * OrganiserLogin
 *
 * Action class for authenticating organisers.
 * Validates email and password credentials against the database.
 * 
 * author: Joao Paulo Lousada
 */
const { GetOrganiserByEmail } = require('../organiser/get-organiser-by-email.action');
const { Password } = require('./password');
const { NotFoundError } = require('../errors/not-found');

/**
 * Action class for organiser authentication.
 *
 * Verifies organiser credentials by checking email existence
 * and comparing password hash.
 */
class OrganiserLogin {
    /**
     * Creates a new OrganiserLogin action instance.
     *
     * @param {string} email - Email address of the organiser
     * @param {string} password - Plain text password to verify
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    /**
     * Authenticates an organiser by verifying email and password.
     *
     * @returns {Promise<Organiser>} Organiser instance if authentication succeeds
     * @throws {NotFoundError} Throws error if email not found or password doesn't match
     */
    async execute() {
        const getOrganiser = new GetOrganiserByEmail(this.email);
        const organiser = await getOrganiser.execute();
        const passwordMatch = await Password.compare(this.password, organiser.password_hash);
        if (!passwordMatch) {
            throw new NotFoundError('Invalid username or password');
        }
        return organiser;
    }
}

module.exports.OrganiserLogin = OrganiserLogin;

