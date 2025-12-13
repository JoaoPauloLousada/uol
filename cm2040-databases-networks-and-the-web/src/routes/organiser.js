
const express = require("express");
const { requireOrganiserAuth } = require("../middleware/require-organiser-auth");
const { OrganiserHomeViewModel } = require("../modules/organiser/organiser-home-view-model");
const { EditEventViewModel } = require("../modules/organiser/edit-event-view-model");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings");
const { GetPublishedEvents } = require("../modules/events/get-published-events");
const { GetDraftEvents } = require("../modules/events/get-draft-events");
const { CreateEvent } = require("../modules/events/create-event");
const { GetEventById } = require("../modules/events/get-event-by-id");
const { UpdateEvent } = require("../modules/events/update-event");
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
        res.redirect(`/organiser/event/${eventId}/edit`);
    } catch (error) {
        console.error('Error creating new event:', error);
        // Redirect back to organiser home on error
        res.redirect('/organiser');
    }
});

/**
 * GET /organiser/event/:id/edit
 * Edit event page (requires authentication)
 * Displays the edit form for an event with its current data
 */
router.get('/event/:id/edit', requireOrganiserAuth, async (req, res) => {
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
 * POST /organiser/event/:id/edit
 * Save event changes (requires authentication)
 * Updates event details and ticket information, then redirects to organiser home
 */
router.post('/event/:id/edit', requireOrganiserAuth, async (req, res) => {
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

module.exports.organiserRoutes = router;