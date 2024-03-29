const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function authMiddleware(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized access!" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden" });
    }
    req.user = decoded;
    next();
  });
}

async function loginUser(req, res) {
  const { username, password } = req.body;

  //   console.log(username);
  //   console.log(password);

  // check for required fields (if null):
  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Please provide username & password!" });
  }

  try {
    const user = await UserModel.findOne({ username });
    if (!user || user.roles.includes("Unassigned")) {
      return res.status(401).send({ message: "Invalid username!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const payload = { id: user._id, roles: user.roles };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, message: "Logged In!" });
  } catch (error) {
    res.status(500).send({ message: "Error logging in!" });
  }
}

module.exports = { authMiddleware, loginUser };
