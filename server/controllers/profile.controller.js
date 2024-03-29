const UserModel = require("../models/user.model");
const { UserResponses } = require("../schemas/user.schema");

const Responses = new UserResponses();

async function fetchProfile(req, res) {
	const { user } = req;
	if (!user) {
		return res.status(403).send({ message: "User not logged in!" });
	}
	
	try {
		const response = await UserModel.findOne({ _id: user.id});
		return res.status(200).json(Responses.fetchOne(response));
	} catch (error) {
		return res.status(500).send({ message: "Fetch profile failed with error!" });
	}
}

async function updateProfile(req, res) {
	const { user } = req;
	if (!user) {
		return res.status(403).send({ message: "User not logged in!" });
	}
	
	// check req body:
	delete req.body?.roles;
	delete req.body?.password;
	
	try {
		const updatedUser = await UserModel.findByIdAndUpdate(user.id, req.body, { new: true });
		return res.status(200).json(Responses.updateOne(updatedUser));
	} catch (error) {
		if (error.code === 11000) {
			return res.status(409).send({ message: `${req.body.username} Already Exists!` });
		}
		return res.status(500).send({ message: "Update user failed with error!" });
	}
}

module.exports = { fetchProfile, updateProfile };
