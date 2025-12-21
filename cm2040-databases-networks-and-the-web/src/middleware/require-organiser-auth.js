/**
 * require-organiser-auth.js
 * Middleware to protect organiser routes - requires authentication
 */

/**
 * Middleware function to check if organiser is authenticated
 * If not authenticated, redirects to organiser login page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function requireOrganiserAuth(req, res, next) {
    // Check if organiserId exists in session
    if (req.session && req.session.organiserId) {
        // Organiser is authenticated, proceed to next middleware/route
        return next();
    } else {
        // Not authenticated, redirect to login page
        return res.redirect('/auth/organiser/login');
    }
}

module.exports.requireOrganiserAuth = requireOrganiserAuth;

