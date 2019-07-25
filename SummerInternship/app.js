const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes.js');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const app = express();

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['my name is aman sohani']
}));
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb+srv://Admin:amansohani@cluster0-6g0lv.mongodb.net/test?retryWrites=true&w=majority", ()=>{
	console.log("Connected to DB Success");
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//for accessing var in ejs file
app.use(function(req, res, next){
    res.locals.currentUsr = req.user;
    next();
});

// create home route
app.get('/', (req, res) => {
    res.render('home.ejs', { user: req.user });
});
app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
