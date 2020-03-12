const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [
			true,
			"Question is required"
		],
		minlength: 10,
	},
	option1: {
		type: String,
		required: [
			true,
			"Option 1 is required"
		],
	},
	option2: {
		type: String,
		required: [
			true,
			"Option 2 is required"
		],
	},
	option3: {
		type: String,
		required: false,
	},
	option4: {
		type: String,
		required: false,
	},
	option1Num: {
		type: Number,
	},
	option2Num: {
		type: Number,
	},
	option3Num: {
		type: Number,
	},
	option4Num: {
		type: Number,
	},
}, { timestamps: true});

module.exports.Poll = mongoose.model("Poll", PollSchema);