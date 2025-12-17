/**
 * attendee.js
 * Routes for attendee pages
 * 
 * Public routes for viewing events and booking tickets
 */

const express = require("express");
const { GetEventById } = require("../modules/events/get-event-by-id");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings");
const { GetPublishedEvents } = require("../modules/events/get-published-events");
const { AttendeeEventViewModel } = require("../modules/attendee/attendee-event-view-model");
const { AttendeeHomeViewModel } = require("../modules/attendee/attendee-home-view-model");
const router = express.Router();

/**
 * GET /attendee
 * Attendee home page (public, but login available)
 * Lists all published events
 */
router.get('/', async (req, res) => {
    try {
        const viewModel = new AttendeeHomeViewModel();

        // Get site settings
        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();
        viewModel.siteSettings = siteSettings;

        // Get published events
        const getPublishedEvents = new GetPublishedEvents();
        const publishedEvents = await getPublishedEvents.execute();
        viewModel.events = publishedEvents;
        console.log({ viewModel: JSON.stringify(viewModel, null, 2) });

        res.render('attendee-home.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error loading attendee home:', error);
        const viewModel = new AttendeeHomeViewModel();
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('attendee-home.ejs', { viewModel: viewModel });
    }
});

/**
 * GET /attendee/event/:id
 * View event details (public)
 * Displays event information and booking form if authenticated
 */
router.get('/event/:id', async (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).send('Invalid event ID');
        }

        // Get event by ID
        const getEventById = new GetEventById(eventId);
        const event = await getEventById.execute();

        // Only show published events
        if (!event || event.status !== 'published') {
            const viewModel = new AttendeeEventViewModel();
            viewModel.error = new Error('Event not found or not published');
            return res.render('attendee-event.ejs', { viewModel: viewModel });
        }

        // Get site settings
        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();

        // Create view model
        const viewModel = new AttendeeEventViewModel();
        viewModel.event = event;
        viewModel.siteSettings = siteSettings;

        // Mocked values for attendee (will be replaced with actual session data later)
        viewModel.attendee = {
            username: null, // Will check req.session.attendeeId later
            isSpecial: false // Will check attendee.is_special flag later
        };

        // Mocked values for available tickets (will be replaced with actual calculation later)
        viewModel.availableTickets = {
            full: {
                total: event.tickets.full ? event.tickets.full.quantity : 0,
                available: event.tickets.full ? event.tickets.full.quantity : 0, // Mocked: assume all available
                price: event.tickets.full ? event.tickets.full.price : 0
            },
            concession: {
                total: event.tickets.concession ? event.tickets.concession.quantity : 0,
                available: event.tickets.concession ? event.tickets.concession.quantity : 0, // Mocked: assume all available
                price: event.tickets.concession ? event.tickets.concession.price : 0
            }
        };

        res.render('attendee-event.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error loading event details:', error);
        const viewModel = new AttendeeEventViewModel();
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('attendee-event.ejs', { viewModel: viewModel });
    }
});

/**
 * POST /attendee/event/book/:id
 * Create booking (requires authentication)
 * Creates a booking for the authenticated attendee
 */
router.post('/event/book/:event_id', async (req, res) => {
    try {
        const eventId = parseInt(req.params.event_id);
        if (isNaN(eventId)) {
            return res.status(400).send('Invalid event ID');
        }

        // Create booking
        const createBooking = new CreateBooking(eventId, req.session.attendeeId, ticketId, quantity);
        const bookingId = await createBooking.execute();
        res.redirect(`/attendee/event/${eventId}`);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports.attendeeRoutes = router;

