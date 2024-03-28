const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

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
		default: ["Unassigned"],
		required: true,
	}
});

UserSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		const salt = await bcrypt.genSalt(9);
		this.password = await bcrypt.hash(this.password, salt);
	}
	next();
});

const UserResponses = {
	default: (user) => ({
		id: user._id,
		username: user.username,
		roles: user.roles,
	}),
};

module.exports = { UserSchema, UserResponses };
