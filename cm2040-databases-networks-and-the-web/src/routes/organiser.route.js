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
const { GetAllAttendees } = require("../modules/attendee/get-all-attendees.action");
const { UpdateAttendeeSpecialStatus } = require("../modules/attendee/update-attendee-special-status.action");
const { OrganiserAttendeesViewModel } = require("../modules/organiser/organiser-attendees.view-model");
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

router.get('/event/new', requireOrganiserAuth, async (req, res) => {
    try {
        const createEvent = new CreateEvent();
        const eventId = await createEvent.execute();
        res.redirect(`/organiser/event/edit/${eventId}`);
    } catch (error) {
        console.error('Error creating new event:', error);
        res.redirect('/organiser');
    }
});

router.get('/event/edit/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const getEventById = new GetEventById(eventId);
        const event = await getEventById.execute();

        if (!event) {
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

router.post('/event/edit/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const title = req.body.title || '';
        const description = req.body.description || '';
        const eventDate = req.body.eventDate || '';
        const fullQuantity = parseInt(req.body.fullQuantity) || 0;
        const fullPrice = parseFloat(req.body.fullPrice) || 0;
        const concessionQuantity = parseInt(req.body.concessionQuantity) || 0;
        const concessionPrice = parseFloat(req.body.concessionPrice) || 0;

        if (!title || !eventDate) {
            const getEventById = new GetEventById(eventId);
            const event = await getEventById.execute();
            const viewModel = new EditEventViewModel();
            viewModel.event = event;
            viewModel.error = new Error('Title and event date are required');
            return res.render('edit-event.ejs', { viewModel: viewModel });
        }

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

        res.redirect('/organiser');
    } catch (error) {
        console.error('Error updating event:', error);
        try {
            const eventId = parseInt(req.params.id);
            const getEventById = new GetEventById(eventId);
            const event = await getEventById.execute();
            const viewModel = new EditEventViewModel();
            viewModel.event = event;
            viewModel.error = new Error('Failed to update event: ' + error.message);
            res.render('edit-event.ejs', { viewModel: viewModel });
        } catch (renderError) {
            res.redirect('/organiser');
        }
    }
});

router.post('/event/publish/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const publishEvent = new PublishEvent(eventId);
        await publishEvent.execute();

        res.redirect('/organiser');
    } catch (error) {
        console.error('Error publishing event:', error);
        res.redirect('/organiser');
    }
});

router.post('/event/unpublish/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const unpublishEvent = new UnpublishEvent(eventId);
        await unpublishEvent.execute();

        res.redirect('/organiser');
    } catch (error) {
        console.error('Error unpublishing event:', error);
        res.redirect('/organiser');
    }
});

router.post('/event/delete/:id', requireOrganiserAuth, async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.redirect('/organiser');
        }

        const deleteEvent = new DeleteEvent(eventId);
        await deleteEvent.execute();

        res.redirect('/organiser');
    } catch (error) {
        console.error('Error deleting event:', error);
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

router.get('/attendees', requireOrganiserAuth, async (req, res) => {
    try {
        const viewModel = new OrganiserAttendeesViewModel();
        const getAllAttendees = new GetAllAttendees();
        const attendees = await getAllAttendees.execute();
        viewModel.attendees = attendees;
        res.render('organiser-attendees.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error loading attendees:', error);
        const viewModel = new OrganiserAttendeesViewModel();
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('organiser-attendees.ejs', { viewModel: viewModel });
    }
});

router.post('/attendees/toggle-special/:attendee_id', requireOrganiserAuth, async (req, res) => {
    try {
        const attendeeId = parseInt(req.params.attendee_id);
        if (isNaN(attendeeId)) {
            return res.status(400).send('Invalid attendee ID');
        }

        const isSpecial = req.body.isSpecial === 'true' || req.body.isSpecial === '1';

        const updateAttendeeSpecialStatus = new UpdateAttendeeSpecialStatus(attendeeId, isSpecial);
        await updateAttendeeSpecialStatus.execute();

        res.redirect('/organiser/attendees');
    } catch (error) {
        console.error('Error updating attendee special status:', error);
        res.redirect('/organiser/attendees');
    }
});

module.exports.organiserRoutes = router;

