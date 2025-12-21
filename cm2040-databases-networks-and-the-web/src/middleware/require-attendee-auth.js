
/**
 * Middleware function to check if attendee is authenticated
 * If not authenticated, redirects to attendee login page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function requireAttendeeAuth(req, res, next) {
    if (req.session && req.session.attendeeId) {
        return next();
    } else {
        return res.redirect('/auth/attendee/login');
    }
}

module.exports.requireAttendeeAuth = requireAttendeeAuth;

