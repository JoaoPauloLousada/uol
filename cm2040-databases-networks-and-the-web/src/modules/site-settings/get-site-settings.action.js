const { SiteSettings } = require("./site-settings");

class GetSiteSettings {
    /**
     * Execute the query to get the settings
     * @returns {Promise<Settings>} - Promise that resolves to the settings if found, otherwise throws a NotFoundError
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

