var mongoose = require("mongoose");

var propertySchema = mongoose.Schema({
	catogery: {type:String, required: true},  //Rent or Sell
	
	country: {type: String, required: true},
	state: {type: String, required: true},
 	city: {type: String, required: true},
 	locality: String,
	address: {type: String, required: true},
 	price: {type: Number, required: true, min: 0, max: 100000000}, //In dolllars
 	area: {type: Number, required: true, min: 1, max: 100000000}, //In Sq Feet
	photos: [Buffer],
	seller: {
	  id: {
	   type: mongoose.Schema.Types.ObjectId,
	   ref: "User"
	  },
	  username: String
	}
});



module.exports = mongoose.model("Property", propertySchema);