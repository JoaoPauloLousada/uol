/**
 * home.js
 * Routes for the main home page
 * 
 * Displays navigation links to organiser and attendee sections
 */

const express = require("express");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings");
const router = express.Router();

/**
 * GET /
 * Main home page
 * Shows links to organiser and attendee pages, and login/register options
 * Displays site name and description from database
 */
router.get('/', async (req, res) => {
    try {
        // Check if user is authenticated as organiser or attendee
        const isOrganiserAuthenticated = !!req.session.organiserId;
        const isAttendeeAuthenticated = !!req.session.attendeeId;

        // Get site settings from database
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
        // Render with default values if site settings can't be loaded
        res.render('home.ejs', {
            isOrganiserAuthenticated: !!req.session?.organiserId,
            isAttendeeAuthenticated: !!req.session?.attendeeId,
            siteSettings: null,
            error: error
        });
    }
});

module.exports.homeRoutes = router;

