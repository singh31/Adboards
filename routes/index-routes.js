const router = require('express').Router();
const Property = require('../models/property.js');

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.get('/aboutus', (req, res) => {
    res.render('aboutus.ejs');
});

router.get('/properties', (req, res) => {
    res.render('properties.ejs');
});

router.post("/search", function(req, res){
    var location = req.body.location;
	var price = req.body.price;
	var bedrooms = req.body.bedrooms;
	var flatOrMansion = req.body.flatOrMansion;
    Property.find({location: new RegExp(location, 'i'), price: price, bedrooms: bedrooms, flatOrMansion: flatOrMansion}, function(err, foundProperties){
        if(err)
            console.log(err);
        else{
            console.log(foundProperties);
            res.render("search.ejs", {properties: foundProperties});
        }
    });
});

router.get('/listproperties', (req, res) => {
	Property.find({}, function(err, foundProperties){
		if(err)
			{
				console.log(err);
			}
		else{
			res.render('listproperties.ejs',  {properties: foundProperties});
		}
	});
    
});



module.exports = router;