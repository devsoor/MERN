const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			"Name is required"
		],
		minlength: 2,
	},
	position: {
		type: String,
		required: false,
	},
	status: {
		type: String,
		required: true,
	}
}, { timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema);