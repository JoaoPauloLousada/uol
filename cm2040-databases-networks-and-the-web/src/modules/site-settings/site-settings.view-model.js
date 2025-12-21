const { SiteSettings } = require("./site-settings");

class SiteSettingsViewModel {
    error = null;
    siteSettings = new SiteSettings(0, '', '');
}

module.exports.SiteSettingsViewModel = SiteSettingsViewModel;

