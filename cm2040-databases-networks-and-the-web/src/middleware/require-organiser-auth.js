function requireOrganiserAuth(req, res, next) {
    if (req.session && req.session.organiserId) {
        return next();
    } else {
        return res.redirect('/auth/organiser/login');
    }
}

module.exports.requireOrganiserAuth = requireOrganiserAuth;

