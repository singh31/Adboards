var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    //password: String,
	googleId: String,
	facebookId: String,
	// firstName: {type: String, required: true},
	// lastName: {type: String, required: true},
	// email: {type: String, unique: true, required: true},
	// phoneNo: {type: String, unique: true, required: true},
	// isAprooved: {											 //Make it true if admin has aprooved dealer
	// type: Boolean,
	// default: false
	// },
	// interacted: [{
	// 	id: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "Property"
	// 	},
	// 	boughtOrSold: String
	// }],
	// interested: [{
	// 	id: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "Property"
	// 	}
	// }]
});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);