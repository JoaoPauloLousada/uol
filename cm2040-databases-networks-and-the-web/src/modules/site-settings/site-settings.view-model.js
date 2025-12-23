/**
 * SiteSettingsViewModel
 *
 * View model for the site settings page.
 * Contains data structure for displaying and editing site configuration.
 * 
 * author: Joao Paulo Lousada
 */
const { SiteSettings } = require("./site-settings");

/**
 * View model class for site settings page.
 *
 * Provides data structure containing site settings and error information
 * for rendering the site settings form.
 */
class SiteSettingsViewModel {
    error = null;
    siteSettings = new SiteSettings(0, '', '');
}

module.exports.SiteSettingsViewModel = SiteSettingsViewModel;

