/**
 * update-site-settings.action.js
 * Module for updating site settings
 * 
 * Purpose: Update site name and description in the database
 * Inputs: siteName, siteDescription
 * Outputs: Promise that resolves when update is complete
 */

const { GetSiteSettings } = require("./get-site-settings.action");

class UpdateSiteSettings {
    constructor(siteName, siteDescription) {
        this.siteName = siteName;
        this.siteDescription = siteDescription;
    }

    /**
     * Execute the site settings update process
     * Updates site name and description in the database
     * @returns {Promise<void>} - Promise that resolves when update is complete
     */
    async execute() {
        try {
            // Use GetSiteSettings to check if site settings exist
            const getSiteSettings = new GetSiteSettings();
            const settings = await getSiteSettings.execute();
            settings.siteName = this.siteName;
            settings.siteDescription = this.siteDescription;

            await new Promise((resolve, reject) => {
                global.db.run(`UPDATE site_settings SET site_name = ?, site_description = ? WHERE id = ?`, [
                    settings.siteName,
                    settings.siteDescription,
                    settings.id],
                    function (err) {
                        if (err) {
                            return reject(err);
                        } else {
                            resolve();
                        }
                    });
            });
        } catch (error) {
            console.error('Error updating site settings:', error.message);
            throw error;
        }
    }
}

module.exports.UpdateSiteSettings = UpdateSiteSettings;

