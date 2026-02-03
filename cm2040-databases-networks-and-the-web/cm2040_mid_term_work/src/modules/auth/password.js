/**
 * Password
 *
 * Utility class for password hashing and verification.
 * Provides secure password operations using bcrypt.
 * 
 * author: Joao Paulo Lousada
 */
const bcrypt = require('bcrypt');

/**
 * Utility class for password operations.
 *
 * Provides static methods for hashing plain text passwords
 * and comparing passwords with their hashes.
 */
class Password {
    static DEFAULT_SALT_ROUNDS = 5;

    /**
     * Hashes a plain text password using bcrypt.
     *
     * @param {string} plainTextPassword - Plain text password to hash
     * @returns {Promise<string>} Hashed password string
     * @throws {Error} Throws error if password is missing, not a string, or hashing fails
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
     * Compares a plain text password with a hashed password.
     *
     * @param {string} plainTextPassword - Plain text password to compare
     * @param {string} hashedPassword - Hashed password to compare against
     * @returns {Promise<boolean>} True if passwords match, false otherwise
     * @throws {Error} Throws error if passwords are missing, not strings, or comparison fails
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
