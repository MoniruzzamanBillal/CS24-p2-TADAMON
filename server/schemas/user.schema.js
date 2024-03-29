const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Array,
    default: ["Unassigned"],
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(9);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

class UserResponses {
  constructor() {}

  default(user) {
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      imgLink: user.imgLink,
      roles: user.roles,
    };
  }

  fetchOne(user) {
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      imgLink: user.imgLink,
      roles: user.roles,
    };
  }

  updateOne(user) {
    return this.fetchOne(user);
  }
}

module.exports = { UserSchema, UserResponses };
