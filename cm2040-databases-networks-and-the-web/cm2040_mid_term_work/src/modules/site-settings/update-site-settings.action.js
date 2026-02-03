/**
 * UpdateSiteSettings
 *
 * Action class for updating site settings.
 * Modifies the site name and description in the database.
 * 
 * author: Joao Paulo Lousada
 */
const { GetSiteSettings } = require("./get-site-settings.action");

/**
 * Action class for updating site settings.
 *
 * Updates the site name and description in the database
 * after retrieving the current settings to preserve the ID.
 */
class UpdateSiteSettings {
    /**
     * Creates a new UpdateSiteSettings action instance.
     *
     * @param {string} siteName - New name for the site
     * @param {string} siteDescription - New description for the site
     */
    constructor(siteName, siteDescription) {
        this.siteName = siteName;
        this.siteDescription = siteDescription;
    }

    /**
     * Updates site settings in the database.
     *
     * @returns {Promise<void>} Resolves when site settings are successfully updated
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        try {
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

