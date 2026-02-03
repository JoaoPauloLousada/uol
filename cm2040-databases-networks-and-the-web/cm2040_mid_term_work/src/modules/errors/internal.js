/**
 * InternalServerError
 *
 * Custom error class for internal server errors.
 * Represents server-side errors that occur during application execution.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Error class for internal server errors.
 *
 * Extends the standard Error class to represent server-side errors
 * with HTTP status code 500.
 */
class InternalServerError extends Error {
    /**
     * Creates a new InternalServerError instance.
     *
     * @param {string} message - Error message describing the internal server error
     */
    constructor(message) {
        super(message);
        this.name = 'InternalServerError';
        this.statusCode = 500;
    }
}

module.exports.InternalServerError = InternalServerError;