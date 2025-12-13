/**
 * password.js
 * Module for password hashing and comparison using bcrypt
 * 
 * Purpose: Provide secure password hashing and verification
 * Uses bcrypt with configurable salt rounds for password security
 */

const bcrypt = require('bcrypt');

/**
 * Password
 * Class for password hashing and comparison operations
 * Uses bcrypt algorithm with configurable salt cost factor
 */
class Password {
    /**
     * Default salt cost factor (number of rounds)
     * Higher values = more secure but slower
     * 5 rounds = 2^5 = 32 iterations (good balance)
     */
    static DEFAULT_SALT_ROUNDS = 5;

    /**
     * Hash a plain text password
     * 
     * @param {string} plainTextPassword - The password to hash
     * @param {number} saltRounds - Number of salt rounds (default: 10)
     * @returns {Promise<string>} - Promise that resolves to the hashed password
     * 
     * Purpose: Convert plain text password to secure hash
     * Inputs: plainTextPassword (string), saltRounds (number, optional)
     * Outputs: Promise resolving to hashed password string
     */
    static async hash(plainTextPassword) {
        if (!plainTextPassword) {
            throw new Error('Password is required');
        }

        if (typeof plainTextPassword !== 'string') {
            throw new Error('Password must be a string');
        }

        try {
            const hashedPassword = await bcrypt.hash(plainTextPassword, Password.DEFAULT_SALT_ROUNDS);
            return hashedPassword;
        } catch (error) {
            throw new Error(`Failed to hash password: ${error.message}`);
        }
    }

    /**
     * Compare a plain text password with a hashed password
     * 
     * @param {string} plainTextPassword - The password to verify
     * @param {string} hashedPassword - The stored hash to compare against
     * @returns {Promise<boolean>} - Promise that resolves to true if passwords match, false otherwise
     * 
     * Purpose: Verify if a plain text password matches a stored hash
     * Inputs: plainTextPassword (string), hashedPassword (string)
     * Outputs: Promise resolving to boolean (true if match, false otherwise)
     */
    static async compare(plainTextPassword, hashedPassword) {
        if (!plainTextPassword) {
            throw new Error('Password is required');
        }

        if (!hashedPassword) {
            throw new Error('Hashed password is required');
        }

        if (typeof plainTextPassword !== 'string') {
            throw new Error('Password must be a string');
        }

        if (typeof hashedPassword !== 'string') {
            throw new Error('Hashed password must be a string');
        }

        try {
            const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
            return isMatch;
        } catch (error) {
            throw new Error(`Failed to compare password: ${error.message}`);
        }
    }
}

module.exports.Password = Password;
