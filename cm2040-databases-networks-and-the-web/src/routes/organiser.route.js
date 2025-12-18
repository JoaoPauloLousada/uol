
/**
 * organiser.route.js
 * Routes for organiser pages (protected)
 */

const express = require("express");
const { requireOrganiserAuth } = require("../middleware/require-organiser-auth");
const { OrganiserHomeViewModel } = require("../modules/organiser/organiser-home.view-model");
const { EditEventViewModel } = require("../modules/organiser/edit-event.view-model");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings.action");
const { GetPublishedEvents } = require("../modules/event/get-published-events.action");
const { GetDraftEvents } = require("../modules/event/get-draft-events.action");
const { CreateEvent } = require("../modules/event/create-event.action");
const { GetEventById } = require("../modules/event/get-event-by-id.action");
const { UpdateEvent } = require("../modules/event/update-event.action");
const { PublishEvent } = require("../modules/event/publish-event.action");
const { SiteSettingsViewModel } = require("../modules/site-settings/site-settings.view-model");
const { UnpublishEvent } = require("../modules/event/unpublish-event.action");
const { DeleteEvent } = require("../modules/event/delete-event.action");
const { UpdateSiteSettings } = require("../modules/site-settings/update-site-settings.action");
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

/**
 * GET /organiser/event/new
 * Create new event (requires authentication)
 * Creates a new draft event and redirects to the edit page
 */
router.get('/event/new', requireOrganiserAuth, async (req, res) => {
    try {
        const createEvent = new CreateEvent();
        const eventId = await createEvent.execute();
        res.redirect(`/organiser/event/edit/${eventId}`);
    } catch (error) {
        console.error('Error creating new event:', error);
        // Redirect back to organiser home on error
        res.redirect('/organiser');
    }
});

/**
 * GET /organiser/event/edit/:id
 * Edit event page (requires authentication)
 * Displays the edit form for an event with its current data
 */
router.get('/event/edit/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const getEventById = new GetEventById(eventId);
        const event = await getEventById.execute();

        if (!event) {
            // Event not found, redirect to organiser home
            return res.redirect('/organiser');
        }

        const viewModel = new EditEventViewModel();
        viewModel.event = event;

        res.render('edit-event.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error getting event for edit:', error);
        const viewModel = new EditEventViewModel();
        viewModel.error = new Error(error.message);
        res.render('edit-event.ejs', { viewModel: viewModel });
    }
});

/**
 * POST /organiser/event/edit/:id
 * Save event changes (requires authentication)
 * Updates event details and ticket information, then redirects to organiser home
 */
router.post('/event/edit/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        // Extract form data
        const title = req.body.title || '';
        const description = req.body.description || '';
        const eventDate = req.body.eventDate || '';
        const fullQuantity = parseInt(req.body.fullQuantity) || 0;
        const fullPrice = parseFloat(req.body.fullPrice) || 0;
        const concessionQuantity = parseInt(req.body.concessionQuantity) || 0;
        const concessionPrice = parseFloat(req.body.concessionPrice) || 0;

        // Validate required fields
        if (!title || !eventDate) {
            // Redirect back to edit page with error
            const getEventById = new GetEventById(eventId);
            const event = await getEventById.execute();
            const viewModel = new EditEventViewModel();
            viewModel.event = event;
            viewModel.error = new Error('Title and event date are required');
            return res.render('edit-event.ejs', { viewModel: viewModel });
        }

        // Update the event
        const updateEvent = new UpdateEvent(
            eventId,
            title,
            description,
            eventDate,
            fullQuantity,
            fullPrice,
            concessionQuantity,
            concessionPrice
        );
        await updateEvent.execute();

        // Redirect to organiser home page on success
        res.redirect('/organiser');
    } catch (error) {
        console.error('Error updating event:', error);
        // On error, redirect back to edit page with error
        try {
            const eventId = parseInt(req.params.id);
            const getEventById = new GetEventById(eventId);
            const event = await getEventById.execute();
            const viewModel = new EditEventViewModel();
            viewModel.event = event;
            viewModel.error = new Error('Failed to update event: ' + error.message);
            res.render('edit-event.ejs', { viewModel: viewModel });
        } catch (renderError) {
            // If we can't render the edit page, redirect to organiser home
            res.redirect('/organiser');
        }
    }
});

/**
 * POST /organiser/event/publish/:id
 * Publish event (requires authentication)
 * Changes event status from 'draft' to 'published' and sets published_date
 */
router.post('/event/publish/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        // Publish the event
        const publishEvent = new PublishEvent(eventId);
        await publishEvent.execute();

        // Redirect to organiser home page on success
        res.redirect('/organiser');
    } catch (error) {
        console.error('Error publishing event:', error);
        // Redirect back to organiser home on error
        res.redirect('/organiser');
    }
});

/**
 * POST /organiser/event/unpublish/:id
 * Unpublish event (requires authentication)
 * Changes event status from 'published' to 'draft'
 */
router.post('/event/unpublish/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        // Unpublish the event
        const unpublishEvent = new UnpublishEvent(eventId);
        await unpublishEvent.execute();

        // Redirect to organiser home page on success
        res.redirect('/organiser');
    } catch (error) {
        console.error('Error unpublishing event:', error);
        // Redirect back to organiser home on error
        res.redirect('/organiser');
    }
});

/**
 * POST /organiser/event/delete/:id
 * Delete event (requires authentication)
 * Deletes an event and all associated tickets and bookings
 */
router.post('/event/delete/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        // Delete the event (and related records)
        const deleteEvent = new DeleteEvent(eventId);
        await deleteEvent.execute();

        // Redirect to organiser home page on success
        res.redirect('/organiser');
    } catch (error) {
        console.error('Error deleting event:', error);
        // Redirect back to organiser home on error
        res.redirect('/organiser');
    }
});

router.get('/site-settings', requireOrganiserAuth, async (req, res) => {
    const viewModel = new SiteSettingsViewModel();
    try {
        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();
        viewModel.siteSettings = siteSettings;
        res.render('site-settings.ejs', { viewModel: viewModel });
    } catch (error) {
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        console.error('Error getting site settings:', error);
        res.render('site-settings.ejs', { viewModel: viewModel });
    }
});

router.post('/site-settings', requireOrganiserAuth, async (req, res) => {
    try {
        const siteName = req.body.siteName || '';
        const siteDescription = req.body.siteDescription || '';
        const updateSiteSettings = new UpdateSiteSettings(siteName, siteDescription);
        await updateSiteSettings.execute();
        res.redirect('/organiser');
    } catch (error) {
        const viewModel = new SiteSettingsViewModel();
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('site-settings.ejs', { viewModel: viewModel });
    }
});

module.exports.organiserRoutes = router;

