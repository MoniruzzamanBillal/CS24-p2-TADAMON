const UserModel = require("../models/user.model");
const { UserResponses } = require("../schemas/user.schema");

async function createUser(req, res) {
	try {
		await UserModel.create(req.body);
		return res.status(201).json({ message: `${req.body.username} Added!` });
	}	catch (error) {
		if (error.code == 11000) {
			return res.status(409).json({ message: `${req.body.username} Already Exists!` });
		}
		return res.status(400).json({ message: "User Creation Failed!" });
	}
}

async function fetchUsers(_req, res) {
	try {
		const users = await UserModel.find();
		const response = users.map(user => UserResponses.default(user));
		return res.status(200).json(response);
	} catch (error) {
		return res.status(404).json({ message: "Users Not Found!" });
	}
}

module.exports = { createUser, fetchUsers };
