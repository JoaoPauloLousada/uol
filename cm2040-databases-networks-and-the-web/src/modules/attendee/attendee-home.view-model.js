const { SiteSettings } = require("../site-settings/site-settings");

class AttendeeHomeViewModel {
    error = null;
    siteSettings = new SiteSettings(0, '', '');
    events = [];
    attendee = {
        username: null,
        isSpecial: false
    };
}

module.exports.AttendeeHomeViewModel = AttendeeHomeViewModel;

