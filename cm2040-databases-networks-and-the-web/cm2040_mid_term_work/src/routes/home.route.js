/**
 * HomeRoutes
 *
 * Defines HTTP routes for the home page.
 * Handles rendering the main landing page with site settings and authentication status.
 * 
 * author: Joao Paulo Lousada
 */
const express = require("express");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings.action");
const router = express.Router();

/**
 * Renders the home page with site settings and authentication status.
 *
 * @param {express.Request} req - Express request object containing session data
 * @param {express.Response} res - Express response object for rendering the view
 * @returns {Promise<void>} Sends the rendered home page or error page
 */
router.get('/', async (req, res) => {
    try {
        const isOrganiserAuthenticated = !!req.session.organiserId;
        const isAttendeeAuthenticated = !!req.session.attendeeId;

        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();

        res.render('home.ejs', {
            isOrganiserAuthenticated: isOrganiserAuthenticated,
            isAttendeeAuthenticated: isAttendeeAuthenticated,
            siteSettings: siteSettings,
            error: null
        });
    } catch (error) {
        console.error('Error loading home page:', error);
        res.render('home.ejs', {
            isOrganiserAuthenticated: !!req.session?.organiserId,
            isAttendeeAuthenticated: !!req.session?.attendeeId,
            siteSettings: null,
            error: error
        });
    }
});

module.exports.homeRoutes = router;

