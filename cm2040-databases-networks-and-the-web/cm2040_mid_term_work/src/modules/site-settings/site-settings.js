/**
 * SiteSettings
 *
 * Entity class representing site settings in the system.
 * Encapsulates site configuration data including name and description.
 * 
 * author: Joao Paulo Lousada
 */

/**
 * Entity class representing site settings.
 *
 * Represents the site configuration with name and description
 * used throughout the application.
 */
class SiteSettings {
    /**
     * Creates a new SiteSettings instance.
     *
     * @param {number} id - Unique identifier for the site settings record
     * @param {string} siteName - Name of the site
     * @param {string} siteDescription - Description of the site
     */
    constructor(id, siteName, siteDescription) {
        this.id = id;
        this.siteName = siteName;
        this.siteDescription = siteDescription;
    }
}

module.exports.SiteSettings = SiteSettings;