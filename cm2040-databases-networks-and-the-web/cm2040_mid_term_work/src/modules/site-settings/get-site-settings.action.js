/**
 * GetSiteSettings
 *
 * Action class for retrieving site settings from the database.
 * Fetches the current site configuration including name and description.
 * 
 * author: Joao Paulo Lousada
 */
const { SiteSettings } = require("./site-settings");

/**
 * Action class for retrieving site settings.
 *
 * Executes a database query to fetch the current site settings
 * from the site_settings table.
 */
class GetSiteSettings {
    /**
     * Retrieves site settings from the database.
     *
     * @returns {Promise<SiteSettings>} SiteSettings instance with current site configuration
     * @throws {Error} Throws error if database operation fails
     */
    async execute() {
        const query = "SELECT * FROM site_settings LIMIT 1";
        const settings = new Promise((resolve, reject) => {
            global.db.get(query, function (err, row) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(new SiteSettings(row.id, row.site_name, row.site_description));
                }
            });
        });
        return settings;
    }
}

module.exports.GetSiteSettings = GetSiteSettings;

