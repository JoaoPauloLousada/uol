
/**
 * auth.js
 * Routes for authentication
 */

const express = require("express");
const { OrganiserLogin } = require("../modules/auth/organiser-login");
const { OrganiserLoginViewModel } = require("../modules/auth/organiser-login-view-model");
const { NotFoundError } = require("../modules/errors/not-found");
const { InternalServerError } = require("../modules/errors/internal");
const router = express.Router();

router.get('/organiser/login', (req, res) => {
    res.render('organiser-login.ejs', { viewModel: new OrganiserLoginViewModel() });
});

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

router.post('/organiser/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/auth/organiser/login');
});

module.exports.authRoutes = router;