/**
 * NotFoundError
 *
 * Custom error class for resource not found errors.
 * Represents errors when requested resources cannot be located.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Error class for resource not found errors.
 *
 * Extends the standard Error class to represent errors when
 * requested resources are not found, with HTTP status code 404.
 */
class NotFoundError extends Error {
    /**
     * Creates a new NotFoundError instance.
     *
     * @param {string} message - Error message describing what resource was not found
     */
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;

    }
}

module.exports.NotFoundError = NotFoundError;