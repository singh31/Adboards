var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
//var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	isAdmin: false,
    username: String,
    password: String,
	googleId: String,
	facebookId: String,
	firstName: {type: String},
	lastName: {type: String},
	email: {type: String, sparse: true},
	phoneNo: {type: String},
	 isAprooved: {											 //Make it true if admin has aprooved dealer
		 type: Boolean,
	  	 default: false
	 },
	interacted: [{
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Property"
		},
		boughtOrSold: String
	}],
	interested: [{
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Property"
		}
	}]
});

userSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password,hash) {
    return bcrypt.compareSync(password,hash);
};

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);