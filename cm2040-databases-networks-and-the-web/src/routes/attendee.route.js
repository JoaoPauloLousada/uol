const express = require("express");
const { GetEventById } = require("../modules/event/get-event-by-id.action");
const { GetSiteSettings } = require("../modules/site-settings/get-site-settings.action");
const { GetPublishedEvents } = require("../modules/event/get-published-events.action");
const { AttendeeEventViewModel } = require("../modules/attendee/attendee-event.view-model");
const { AttendeeHomeViewModel } = require("../modules/attendee/attendee-home.view-model");
const { GetAttendeeById } = require("../modules/attendee/get-attendee-by-id.action");
const { GetBookingsByAttendeeId } = require("../modules/booking/get-bookings-by-attendee-id.action");
const { CreateBooking } = require("../modules/booking/create-booking.action");
const { requireAttendeeAuth } = require("../middleware/require-attendee-auth");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const viewModel = new AttendeeHomeViewModel();

        const getAttendeeById = new GetAttendeeById(req.session?.attendeeId);
        const attendee = await getAttendeeById.execute();
        viewModel.attendee = {
            username: attendee?.username ?? null,
            isSpecial: attendee?.is_special ?? false
        };

        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();
        viewModel.siteSettings = siteSettings;

        const getPublishedEvents = new GetPublishedEvents();
        const publishedEvents = await getPublishedEvents.execute();
        viewModel.events = publishedEvents;

        res.render('attendee-home.ejs', { viewModel: viewModel });
    } catch (error) {
        console.error('Error loading attendee home:', error);
        const viewModel = new AttendeeHomeViewModel();
        viewModel.error = new Error('Internal Server Error: ' + error.message);
        res.render('attendee-home.ejs', { viewModel: viewModel });
    }
});

router.get('/event/:id', async (req, res) => {
    console.log('get /attendee/event/:id', req.session?.attendeeId);
    try {
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).send('Invalid event ID');
        }

        const viewModel = new AttendeeEventViewModel();

        const getAttendeeById = new GetAttendeeById(req.session?.attendeeId);
        const attendee = await getAttendeeById.execute();
        viewModel.attendee = {
            username: attendee?.username ?? null,
            isSpecial: attendee?.is_special ?? false
        };

        const getEventById = new GetEventById(eventId);
        const event = await getEventById.execute();
        viewModel.event = event;

        if (!event || event.status !== 'published') {
            const viewModel = new AttendeeEventViewModel();
            viewModel.error = new Error('Event not found or not published');
            return res.render('attendee-event.ejs', { viewModel: viewModel });
        }

        const getSiteSettings = new GetSiteSettings();
        const siteSettings = await getSiteSettings.execute();
        viewModel.siteSettings = siteSettings;


        viewModel.availableTickets = {
            full: {
                total: event.tickets.full ? event.tickets.full.quantity : 0,
                available: event.tickets.full ? event.tickets.full.availableQuantity : 0,
                price: event.tickets.full ? event.tickets.full.price : 0
            },
            concession: {
                total: event.tickets.concession ? event.tickets.concession.quantity : 0,
                available: event.tickets.concession ? event.tickets.concession.availableQuantity : 0,
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

router.post('/event/book/:event_id', async (req, res) => {
    try {
        if (!req.session.attendeeId) {
            return res.redirect('/auth/attendee/login');
        }

        const eventId = parseInt(req.params.event_id);
        if (isNaN(eventId)) {
            return res.status(400).send('Invalid event ID');
        }

        const getEventById = new GetEventById(eventId);
        const event = await getEventById.execute();

        if (!event || event.status !== 'published') {
            return res.status(404).send('Event not found or not published');
        }

        const getAttendeeById = new GetAttendeeById(req.session.attendeeId);
        const attendee = await getAttendeeById.execute();

        if (!attendee) {
            return res.status(401).send('Attendee not found');
        }

        const fullTicketsQuantity = parseInt(req.body.fullTickets) || 0;
        const concessionTicketsQuantity = parseInt(req.body.concessionTickets) || 0;

        if (fullTicketsQuantity <= 0 && concessionTicketsQuantity <= 0) {
            return res.status(400).send('Please select at least one ticket');
        }

        if (concessionTicketsQuantity > 0) {
            if (!attendee.is_special || attendee.is_special !== 1) {
                return res.status(403).send('Concession tickets are only available for special attendees');
            }
        }

        if (fullTicketsQuantity > 0) {
            if (!event.tickets.full) {
                return res.status(400).send('Full tickets not available for this event');
            }
            const createFullBooking = new CreateBooking(eventId, req.session.attendeeId, event.tickets.full.id, fullTicketsQuantity);
            await createFullBooking.execute();
        }

        if (concessionTicketsQuantity > 0) {
            if (!event.tickets.concession) {
                return res.status(400).send('Concession tickets not available for this event');
            }
            const createConcessionBooking = new CreateBooking(eventId, req.session.attendeeId, event.tickets.concession.id, concessionTicketsQuantity);
            await createConcessionBooking.execute();
        }

        res.redirect('/attendee/my-bookings');
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/my-bookings', requireAttendeeAuth, async (req, res) => {
    try {
        if (!req.session.attendeeId) {
            return res.redirect('/auth/attendee/login');
        }
        const getBookingsByAttendeeId = new GetBookingsByAttendeeId(req.session.attendeeId);
        const bookings = await getBookingsByAttendeeId.execute();
        res.render('attendee-my-bookings.ejs', { viewModel: { bookings: bookings } });
    } catch (error) {
        console.error('Error loading my bookings:', error);
    }
});

module.exports.attendeeRoutes = router;

