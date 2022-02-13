const expressJwt = require("express-jwt");

const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

module.exports = { requireSignin };
