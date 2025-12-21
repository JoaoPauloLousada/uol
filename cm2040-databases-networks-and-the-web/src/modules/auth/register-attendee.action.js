/**
 * register-attendee.action.js
 * Module for registering a new attendee
 * 
 * Purpose: Hash password and insert new attendee into database
 * Inputs: username, email, password (plain text)
 * Outputs: callback with error or attendee_id
 */

const { z } = require('zod');
const { Password } = require('./password');
const { InternalServerError } = require('../errors/internal');
const Attendee = require('../attendee/attendee');

/**
 * RegisterAttendeeParams
 * Class for validating attendee registration parameters using Zod
 */
class RegisterAttendeeParams {
    constructor(username, email, password) {
        this.validate(username, email, password);
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
            const validatedData = RegisterAttendeeParams.schema.parse({
                username: username,
                email: email,
                password: password
            });
            this.username = validatedData.username;
            this.email = validatedData.email;
            this.password = validatedData.password;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.issues.map(err => `${err.path.join('.')}: ${err.message}`).join(';\n');
                throw new Error(errorMessages);
            }
            throw error;
        }
    }
}

/**
 * RegisterAttendee
 * Class for registering a new attendee
 * Hashes the password and stores attendee data in the database
 */
class RegisterAttendee {
    /**
     * Execute the registration process
     * @param {RegisterAttendeeParams} params - Parameters for registering a new attendee
     * @returns {Promise<Attendee>} - The created attendee instance
     */
    async execute(params) {
        try {
            const passwordHash = await Password.hash(params.password);
            const createdDate = new Date().toISOString();
            const updatedDate = createdDate;
            const isSpecial = 0; // Default to false

            // Define the query to insert attendee
            const query = "INSERT INTO attendees (username, email, password_hash, is_special, created_date, updated_date) VALUES (?, ?, ?, ?, ?, ?)";
            const queryParameters = [params.username, params.email, passwordHash, isSpecial, createdDate, updatedDate];

            // Execute the query and return a promise
            return new Promise((resolve, reject) => {
                global.db.run(query, queryParameters, function (err) {
                    if (err) {
                        // Handle unique constraint violations
                        if (err.message.includes('UNIQUE constraint failed')) {
                            if (err.message.includes('username')) {
                                return reject(new InternalServerError('Username already exists'));
                            }
                            if (err.message.includes('email')) {
                                return reject(new InternalServerError('Email already exists'));
                            }
                        }
                        return reject(new InternalServerError('Error creating attendee account'));
                    } else {
                        // Return the created attendee instance
                        const attendee = new Attendee(
                            this.lastID,
                            params.username,
                            params.email,
                            passwordHash,
                            isSpecial,
                            createdDate,
                            updatedDate
                        );
                        resolve(attendee);
                    }
                });
            });
        } catch (error) {
            console.error('Error registering attendee:', error.message);
            if (error instanceof InternalServerError) {
                throw error;
            }
            throw new InternalServerError(error.message);
        }
    }
}

module.exports.RegisterAttendee = RegisterAttendee;
module.exports.RegisterAttendeeParams = RegisterAttendeeParams;

