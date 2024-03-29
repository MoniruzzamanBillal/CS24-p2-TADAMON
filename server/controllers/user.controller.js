const UserModel = require("../models/user.model");
const { UserResponses } = require("../schemas/user.schema");

const Responses = new UserResponses();
const Roles = [
	"System Admin",
	"STS Manager",
	"Landfill Manager",
];

// add user:
async function createUser(req, res) {
	// RBAC check:
	if (!req.user || !req.user.roles.includes("System Admin")) {
		return res.status(403).send({ message: "Permission denied! Only admins can create users." });
	}
	
	const { username, password} = req.body;
	
	// check if username or password is null:
	if (!username || !password) {
		return res.status(400).send({ message: "Please provide username & password!" });
	}
	
	try {
		await UserModel.create(req.body);
		return res.status(201).json({ message: `${req.body.username} Added!` });
	}	catch (error) {
		if (error.code == 11000) {
			return res.status(409).send({ message: `${req.body.username} Already Exists!` });
		}
		return res.status(500).send({ message: "User Creation Failed!" });
	}
}

// fetch available roles:
async function fetchAvailableRoles(_req, res) {
	try {
		return res.status(200).json(Roles);
	} catch {
		return res.status(500).send({ message: "Fetch available roles failed with error!" });
	}
}

// fetch all users:
async function fetchUsers(req, res) {
	// RBAC check:
	if (!req.user || !req.user.roles.includes("System Admin")) {
		return res.status(403).send({ message: "Permission denied! Only admins can create users." });
	}
	
	try {
		const users = await UserModel.find();
		const response = users.map(user => Responses.default(user));
		return res.status(200).json(response);
	} catch (error) {
		return res.status(404).send({ message: "Users Not Found!" });
	}
}

// fetch user by id:
async function fetchUser(req, res) {
	const { userId } = req.params;
	
	try {
		const user = await UserModel.findOne({ _id: userId });
		if (!user) {
			return res.status(404).send({ message: "User not found!" });
		}
		return res.status(200).json(Responses.fetchOne(user));
	} catch(error) {
		return res.status(500).send({ message: "Fetch user failed with error!" });
	}
}

// fetch user roles by id:
async function fetchUserRoles(req, res) {
	// RBAC check:
	if (!req.user || !req.user.roles.includes("System Admin")) {
		return res.status(403).send({ message: "Permission denied! Only admins can create users." });
	}
	
	const { userId } = req.params;
	
	try {
		const user = await UserModel.findOne({ _id: userId });
		if (!user) {
			return res.status(404).send({ message: "User not found!" });
		}
		return res.status(200).json(user.roles);
	} catch(error) {
		return res.status(500).send({ message: "Fetch user roles failed with error!" });
	}
}


// update user by id:
async function updateUser(req, res) {
	const { userId } = req.params;
	
	// check req body:
	delete req.body?.roles;
	delete req.body?.password;
	
	try {
		const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });
		return res.status(200).json(Responses.updateOne(updatedUser));
	} catch (error) {
		if (error.code === 11000) {
			return res.status(409).send({ message: `${req.body.username} Already Exists!` });
		}
		return res.status(500).send({ message: "Update user failed with error!" });
	}
}

// delete user by id:
async function deleteUser(req, res) {
	// RBAC check:
	if (!req.user || !req.user.roles.includes("System Admin")) {
		return res.status(403).send({ message: "Permission denied! Only admins can create users." });
	}
	
	const { userId } = req.params;
	
	try {
		const user = await UserModel.findOne({ _id: userId });
		if (!user) {
			return res.status(404).send({ message: "User not found!" });
		}
		
		await UserModel.deleteOne({ _id: userId });
		return res.status(200).json({ message: `${user.username} removed!` });
	}	catch(error) {
		return res.status(500).send({ message: "Delete user failed with error!" });
	}
}

module.exports = { createUser, fetchUsers, fetchUser, updateUser, deleteUser, fetchUserRoles, fetchAvailableRoles };
