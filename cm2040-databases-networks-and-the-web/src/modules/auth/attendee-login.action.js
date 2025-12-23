/**
 * AttendeeLogin
 *
 * Action class for authenticating attendees.
 * Validates email and password credentials against the database.
 * 
 * author: Joao Paulo Lousada
 */
const { GetAttendeeByEmail } = require('../attendee/get-attendee-by-email.action');
const { Password } = require('./password');
const { NotFoundError } = require('../errors/not-found');

/**
 * Action class for attendee authentication.
 *
 * Verifies attendee credentials by checking email existence
 * and comparing password hash.
 */
class AttendeeLogin {
    /**
     * Creates a new AttendeeLogin action instance.
     *
     * @param {string} email - Email address of the attendee
     * @param {string} password - Plain text password to verify
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    /**
     * Authenticates an attendee by verifying email and password.
     *
     * @returns {Promise<Attendee>} Attendee instance if authentication succeeds
     * @throws {NotFoundError} Throws error if email not found or password doesn't match
     */
    async execute() {
        const getAttendee = new GetAttendeeByEmail(this.email);
        const attendee = await getAttendee.execute();
        const passwordMatch = await Password.compare(this.password, attendee.password_hash);
        if (!passwordMatch) {
            throw new NotFoundError('Invalid username or password');
        }
        return attendee;
    }
}

module.exports.AttendeeLogin = AttendeeLogin;

