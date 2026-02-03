/**
 * RequireAttendeeAuth
 *
 * Express middleware for protecting routes that require attendee authentication.
 * Verifies that the request session contains a valid attendee ID.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Middleware that checks if the request has an authenticated attendee session.
 *
 * @param {express.Request} req - Express request object containing session data
 * @param {express.Response} res - Express response object for redirecting if not authenticated
 * @param {express.NextFunction} next - Express next middleware function to call if authenticated
 * @returns {void} Calls next() if authenticated, otherwise redirects to attendee login page
 */
function requireAttendeeAuth(req, res, next) {
    if (req.session && req.session.attendeeId) {
        return next();
    } else {
        return res.redirect('/auth/attendee/login');
    }
}

module.exports.requireAttendeeAuth = requireAttendeeAuth;

