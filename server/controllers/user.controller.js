const UserModel = require("../models/user.model");
const { UserResponses } = require("../schemas/user.schema");

async function createUser(req, res) {
	// RBAC check:
	if (!req.user.roles.includes("System Admin")) {
		return res.status(403).send({ message: "Permission denied! Only admins can create users." });
	}
	
	const { username, password, roles } = req.body;
	
	// check if username or password is null:
	if (!username || !password) {
		return res.status(400).send({ message: "Please provide username & password!" });
	}
	
	try {
		await UserModel.create({
			username,
			password,
			roles: roles?.length ? roles : ["Unassigned"],
		});
		return res.status(201).json({ message: `${req.body.username} Added!` });
	}	catch (error) {
		if (error.code == 11000) {
			return res.status(409).send({ message: `${req.body.username} Already Exists!` });
		}
		return res.status(500).send({ message: "User Creation Failed!" });
	}
}

async function fetchUsers(_req, res) {
	try {
		const users = await UserModel.find();
		const response = users.map(user => UserResponses.default(user));
		return res.status(200).json(response);
	} catch (error) {
		return res.status(404).send({ message: "Users Not Found!" });
	}
}

module.exports = { createUser, fetchUsers };
