const { SiteSettings } = require("../site-settings/site-settings");

class AttendeeEventViewModel {
    error = null;
    event = null;
    siteSettings = new SiteSettings(0, '', '');
    attendee = {
        username: null,
        isSpecial: false
    };
    availableTickets = {
        full: {
            total: 0,
            available: 0,
            price: 0
        },
        concession: {
            total: 0,
            available: 0,
            price: 0
        }
    };
}

module.exports.AttendeeEventViewModel = AttendeeEventViewModel;

