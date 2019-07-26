const router = require('express').Router();
const passport = require('passport');
const User = require("../models/user.js");

// auth login
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/login', passport.authenticate('local', {
        failureRedirect: '/',
        successRedirect: '/profile',
	}), function (req, res) {
        res.redirect('/profile');
});

//register
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register/', function (req, res) {
        var body = req.body,
            email = body.email,
            password = body.password;
        User.findOne({
            email: email
        }, function (err, doc) {
            if (err) {
                res.status(500).send('error occured');
            } else {
                if (doc) {
                    res.status(500).send('Email already exists');
                } else {
                    var record = new User();
                    record.email = email;
                    record.password = record.hashPassword(password);
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error');
                        } else {
                            res.redirect('/auth/login');
                        }
                    });
                }
            }
        });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

// auth with facebook
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_friends', 'manage_pages']
}));

// callback route for facebook to redirect to
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;