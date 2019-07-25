const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.get('/aboutus', (req, res) => {
    res.render('aboutus.ejs');
});

router.get('/properties', (req, res) => {
    res.render('properties.ejs');
});



module.exports = router;