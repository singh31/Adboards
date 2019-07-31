var mongoose = require("mongoose");

var regionSchema = mongoose.Schema({
	name: String,
	pincode: Number,
	nearByRegions: [{type: mongoose.Schema.Types.ObjectId,
            		 ref: "Region"}],
	properties: [{type: mongoose.Schema.Types.ObjectId,
            	  ref: "Property"}]
});



module.exports = mongoose.model("Region", regionSchema);