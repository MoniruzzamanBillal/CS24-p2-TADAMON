const { Schema } = require("mongoose");

const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: {
		type: Array,
		default: [],
		required: true,
	}
});

const UserResponses = {
	default: (user) => ({
		id: user._id,
		username: user.username,
		roles: user.roles,
	}),
};

module.exports = { UserSchema, UserResponses };
