/**
 * RegisterOrganiser
 *
 * Action classes for registering new organisers.
 * Validates registration parameters and creates organiser accounts in the database.
 * 
 * author: Joao Paulo Lousada
 */
const { z } = require('zod');
const { Password } = require('./password');

/**
 * Parameter validation class for organiser registration.
 *
 * Validates and sanitizes registration parameters using Zod schema.
 * Ensures username, email, and password meet security requirements.
 */
class RegisterOrganiserParams {
    /**
     * Creates a new RegisterOrganiserParams instance with validated data.
     *
     * @param {string} username - Username for the new organiser account
     * @param {string} email - Email address for the new organiser account
     * @param {string} password - Plain text password for the new organiser account
     * @throws {Error} Throws error if validation fails with detailed error messages
     */
    constructor(username, email, password) {
        const validation = this.validate(username, email, password);
    }

    static schema = z.object({
        username: z.string()
            .min(3, 'Username must be at least 3 characters long')
            .max(50, 'Username must be no more than 50 characters')
            .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
        email: z
            .email('Invalid email address')
            .max(255, 'Email must be no more than 255 characters'),
        password: z.string()
            .min(8, 'Password must be at least 8 characters long')
            .max(100, 'Password must be no more than 100 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[!@#$%^&*]/, 'Password must contain at least one special character'),
    });

    /**
     * Validates registration parameters against the schema.
     *
     * @param {string} username - Username to validate
     * @param {string} email - Email address to validate
     * @param {string} password - Password to validate
     * @throws {Error} Throws error with validation messages if validation fails
     * @private
     */
    validate(username, email, password) {
        try {
            const validatedData = RegisterOrganiserParams.schema.parse({
                username: username,
                email: email,
                password: password
            });
            this.username = validatedData.username;
            this.email = validatedData.email;
            this.password = validatedData.password;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join('; ');
                throw new Error(errorMessages);
            }
            throw error
        }
    }
}

/**
 * Action class for registering new organisers.
 *
 * Creates a new organiser account in the database with hashed password.
 */
class RegisterOrganiser {
    /**
     * Registers a new organiser account in the database.
     *
     * @param {RegisterOrganiserParams} params - Validated registration parameters
     * @returns {Promise<number>} ID of the newly created organiser
     * @throws {Error} Throws error if database operation fails
     */
    async execute(params) {
        try {
            const passwordHash = await Password.hash(params.password);
            const createdDate = new Date().toISOString();
            const updatedDate = createdDate;
            const query = "INSERT INTO organisers (username, email, password_hash, created_date, updated_date) VALUES (?, ?, ?, ?, ?)";
            const queryParameters = [params.username, params.email, passwordHash, createdDate, updatedDate];
            return new Promise((resolve, reject) => {
                global.db.run(query, queryParameters, function (err) {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                });
            });
        } catch (error) {
            console.error('Error registering organiser:', error.message);
            throw error;
        }
    }
}

module.exports.RegisterOrganiser = RegisterOrganiser;
module.exports.RegisterOrganiserParams = RegisterOrganiserParams;

