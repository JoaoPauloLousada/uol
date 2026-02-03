/**
 * AttendeeEventViewModel
 *
 * View model for the attendee event details page.
 * Contains data structure for displaying event information and ticket availability
 * to attendees.
 * 
 * author: Joao Paulo Lousada
 */
const { SiteSettings } = require("../site-settings/site-settings");

/**
 * View model class for attendee event details page.
 *
 * Provides data structure containing event information, attendee details,
 * site settings, and available ticket information for rendering the event view.
 */
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

