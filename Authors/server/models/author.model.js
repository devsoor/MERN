const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			"Name is required"
		],
		minlength: 3,
	},
	quote: {
		type: String,
		required: [
			true,
			"Quotes are required"
		],
		minlength: 3,
	}
}, { timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema);