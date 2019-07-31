var mongoose = require("mongoose");

var suggestionSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        username: String
    },
    text: String,
});

var Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;