function requireAttendeeAuth(req, res, next) {
    if (req.session && req.session.attendeeId) {
        return next();
    } else {
        return res.redirect('/auth/attendee/login');
    }
}

module.exports.requireAttendeeAuth = requireAttendeeAuth;

