/**
 * RequireOrganiserAuth
 *
 * Express middleware for protecting routes that require organiser authentication.
 * Verifies that the request session contains a valid organiser ID.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Middleware that checks if the request has an authenticated organiser session.
 *
 * @param {express.Request} req - Express request object containing session data
 * @param {express.Response} res - Express response object for redirecting if not authenticated
 * @param {express.NextFunction} next - Express next middleware function to call if authenticated
 * @returns {void} Calls next() if authenticated, otherwise redirects to organiser login page
 */
function requireOrganiserAuth(req, res, next) {
    if (req.session && req.session.organiserId) {
        return next();
    } else {
        return res.redirect('/auth/organiser/login');
    }
}

module.exports.requireOrganiserAuth = requireOrganiserAuth;

