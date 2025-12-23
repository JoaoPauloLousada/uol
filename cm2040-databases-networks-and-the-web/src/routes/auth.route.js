/**
 * AuthRoutes
 *
 * Defines HTTP routes for authentication operations.
 * Handles login, logout, and registration for both organisers and attendees.
 * 
 * author: Joao Paulo Lousada
 */
const express = require("express");
const { OrganiserLogin } = require("../modules/auth/organiser-login.action");
const { OrganiserLoginViewModel } = require("../modules/auth/organiser-login.view-model");
const { AttendeeLogin } = require("../modules/auth/attendee-login.action");
const { AttendeeLoginViewModel } = require("../modules/auth/attendee-login.view-model");
const { RegisterAttendee, RegisterAttendeeParams } = require("../modules/auth/register-attendee.action");
const { AttendeeSignupViewModel } = require("../modules/auth/attendee-signup.view-model");
const { NotFoundError } = require("../modules/errors/not-found");
const { InternalServerError } = require("../modules/errors/internal");
const router = express.Router();

/**
 * Renders the organiser login page.
 *
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object for rendering the view
 * @returns {void} Sends the rendered organiser login page
 */
router.get('/organiser/login', (req, res) => {
    res.render('organiser-login.ejs', { viewModel: new OrganiserLoginViewModel() });
});

/**
 * Authenticates an organiser and creates a session.
 *
 * @param {express.Request} req - Express request object containing email and password in body
 * @param {express.Response} res - Express response object for redirecting or rendering error page
 * @param {express.NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Redirects to organiser home on success or renders error page
 */
router.post('/organiser/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const login = new OrganiserLogin(email, password);
        const organiser = await login.execute();
        req.session.organiserId = organiser.id;
        res.redirect('/organiser');
        return next();
    } catch (error) {
        const viewModel = new OrganiserLoginViewModel();
        if (error instanceof NotFoundError) {
            viewModel.error = new Error('Invalid username or password');
            res.status(401).render('organiser-login.ejs', { viewModel });
            return next();
        }
        if (error instanceof InternalServerError) {
            viewModel.error = new Error(error.message);
            res.status(500).render('organiser-login.ejs', { viewModel });
            return next();
        }
        console.error('Error logging in:', error);
        viewModel.error = new Error('An unknown error occurred');
        res.status(500).render('organiser-login.ejs', { viewModel });
        return next();
    }
});

/**
 * Destroys the organiser session and redirects to home page.
 *
 * @param {express.Request} req - Express request object containing session data
 * @param {express.Response} res - Express response object for redirecting
 * @returns {void} Redirects to home page
 */
router.post('/organiser/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

/**
 * Renders the attendee login page.
 *
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object for rendering the view
 * @returns {void} Sends the rendered attendee login page
 */
router.get('/attendee/login', (req, res) => {
    res.render('attendee-login.ejs', { viewModel: new AttendeeLoginViewModel() });
});

/**
 * Authenticates an attendee and creates a session.
 *
 * @param {express.Request} req - Express request object containing email and password in body
 * @param {express.Response} res - Express response object for redirecting or rendering error page
 * @param {express.NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Redirects to attendee home on success or renders error page
 */
router.post('/attendee/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const login = new AttendeeLogin(email, password);
        const attendee = await login.execute();
        req.session.attendeeId = attendee.id;
        res.redirect('/attendee');
        return next();
    } catch (error) {
        const viewModel = new AttendeeLoginViewModel();
        if (error instanceof NotFoundError) {
            viewModel.error = new Error('Invalid username or password');
            res.status(401).render('attendee-login.ejs', { viewModel });
            return next();
        }
        if (error instanceof InternalServerError) {
            viewModel.error = new Error(error.message);
            res.status(500).render('attendee-login.ejs', { viewModel });
            return next();
        }
        console.error('Error logging in:', error);
        viewModel.error = new Error('An unknown error occurred');
        res.status(500).render('attendee-login.ejs', { viewModel });
        return next();
    }
});

/**
 * Destroys the attendee session and redirects to home page.
 *
 * @param {express.Request} req - Express request object containing session data
 * @param {express.Response} res - Express response object for redirecting
 * @returns {void} Redirects to home page
 */
router.post('/attendee/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

/**
 * Renders the attendee signup page.
 *
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object for rendering the view
 * @returns {void} Sends the rendered attendee signup page
 */
router.get('/attendee/signup', (req, res) => {
    res.render('attendee-signup.ejs', { viewModel: new AttendeeSignupViewModel() });
});

/**
 * Registers a new attendee account and creates a session.
 *
 * @param {express.Request} req - Express request object containing username, email, and password in body
 * @param {express.Response} res - Express response object for redirecting or rendering error page
 * @param {express.NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Redirects to attendee home on success or renders error page
 */
router.post('/attendee/signup', async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const params = new RegisterAttendeeParams(username, email, password);

        const registerAttendee = new RegisterAttendee();
        const attendee = await registerAttendee.execute(params);

        req.session.attendeeId = attendee.id;
        res.redirect('/attendee');
        return next();
    } catch (error) {
        console.error({ attendeeSignupError: error })
        const viewModel = new AttendeeSignupViewModel();
        if (error instanceof InternalServerError) {
            viewModel.error = new Error(error.message);
            res.status(500).render('attendee-signup.ejs', { viewModel });
            return next();
        }
        if (error.message) {
            viewModel.error = new Error(error.message);
            res.status(400).render('attendee-signup.ejs', { viewModel });
            return next();
        }
        console.error('Error signing up:', error);
        viewModel.error = new Error('An unknown error occurred');
        res.status(500).render('attendee-signup.ejs', { viewModel });
        return next();
    }
});

module.exports.authRoutes = router;

