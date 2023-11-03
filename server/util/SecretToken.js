require("dotenv").config();
const jwt = require("jsonwebtoken");
//secrete key is from .env as of now it is simple, but in big applicaion it is complex
module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
