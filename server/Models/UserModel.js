const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

//password is hashed using bscypt.hash ()
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

// module.exports = mongoose.model("User", userSchema);
const User = mongoose.model('User', userSchema);

module.exports = User;
