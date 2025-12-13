
const express = require("express");
const { requireOrganiserAuth } = require("../middleware/require-organiser-auth");
const { OrganiserHomeViewModel } = require("../modules/organiser/organiser-home-view-model");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings");
const { GetPublishedEvents } = require("../modules/events/get-published-events");
const { GetDraftEvents } = require("../modules/events/get-draft-events");
const router = express.Router();

router.get('/', requireOrganiserAuth, async (req, res) => {
    try {
        const viewModel = new OrganiserHomeViewModel();
        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();
        viewModel.siteSettings = siteSettings;
        const getPublishedEvents = new GetPublishedEvents();
        const publishedEvents = await getPublishedEvents.execute();
        viewModel.event.published.list = publishedEvents;
        const getDraftEvents = new GetDraftEvents();
        const draftEvents = await getDraftEvents.execute();
        viewModel.event.draft.list = draftEvents;
        res.render('organiser-home.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error getting site settings:', error);
        const viewModel = new OrganiserHomeViewModel()
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('organiser-home.ejs', { viewModel: viewModel });
    }
});

module.exports.organiserRoutes = router;