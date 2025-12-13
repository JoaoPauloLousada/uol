/**
 * register_organiser.js
 * Module for registering a new organiser
 * 
 * Purpose: Hash password and insert new organiser into database
 * Inputs: username, email, password (plain text)
 * Outputs: callback with error or organiser_id
 */

const { z } = require('zod');
const Password = require('./password');

/**
 * RegisterOrganiserParams
 * Class for validating organiser registration parameters using Zod
 */
class RegisterOrganiserParams {
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
     * Validate the parameters
     * @returns {object} - { success: boolean, data?: object, error?: object }
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
 * RegisterOrganiser
 * Class for registering a new organiser
 * Hashes the password and stores organiser data in the database
 */
class RegisterOrganiser {
    /**
     * Execute the registration process
     * @param {RegisterOrganiserParams} params - Parameters for registering a new organiser
     */
    async execute(params) {
        try {
            const passwordHash = await Password.hash(params.password);
            const createdDate = new Date().toISOString();
            const updatedDate = createdDate;
            // Define the query to insert organiser
            const query = "INSERT INTO organisers (username, email, password_hash, created_date, updated_date) VALUES (?, ?, ?, ?, ?)";
            const queryParameters = [params.username, params.email, passwordHash, createdDate, updatedDate];
            // Execute the query and return a promise
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