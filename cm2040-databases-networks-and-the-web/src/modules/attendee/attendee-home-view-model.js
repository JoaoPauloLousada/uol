/**
 * attendee-home-view-model.js
 * View model for the attendee home page
 */

const { SiteSettings } = require("../site-settings/site-settings");

class AttendeeHomeViewModel {
    error = null;
    siteSettings = new SiteSettings(0, '', '');
    events = []; // Array of Events objects
    attendee = {
        username: null,
        isSpecial: false
    };
}

module.exports.AttendeeHomeViewModel = AttendeeHomeViewModel;

