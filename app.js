const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const expressSession  = require("express-session");
const passport = require('passport');
const authRoutes = require('./routes/auth-routes.js');
const indexRoutes = require('./routes/index-routes.js');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const app = express();

// set up session cookies
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: ['my name is aman sohani']
// }));

app.use(expressSession({
    secret: "My name is Aman",
    resave: false,
    saveUninitialized: false
}));
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//for accessing var in ejs file
app.use(function(req, res, next){
    res.locals.currentUsr = req.user;
    next();
});

mongoose.connect("mongodb+srv://Admin:amansohani@cluster0-6g0lv.mongodb.net/test?retryWrites=true&w=majority", ()=>{
	console.log("Connected to DB Success");
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/', indexRoutes);


app.listen(process.env.PORT||3000, () => {
    console.log('app now listening for requests on port 3000');
});
