/**
 * AttendeeHomeViewModel
 *
 * View model for the attendee home page.
 * Contains data structure for displaying published events and attendee information.
 * 
 * author: Joao Paulo Lousada
 */
const { SiteSettings } = require("../site-settings/site-settings");

/**
 * View model class for attendee home page.
 *
 * Provides data structure containing published events, attendee details,
 * and site settings for rendering the attendee home view.
 */
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

