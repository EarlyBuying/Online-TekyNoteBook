const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserDetails", UserSchema);
