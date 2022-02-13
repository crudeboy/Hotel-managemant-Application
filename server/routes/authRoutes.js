var express = require("express");
var router = express.Router();

var {
  register,
  login,
  allUser,
  singleUser,
} = require("../Controllers/authControllers");

/*Post Request to Register Client*/
router.post("/users/register", register);

/*Post Request to login Client*/
router.post("/users/login", login);

//get all
router.get("/users/alluser", allUser);

//get all
router.get("/users/User/:id", singleUser);


module.exports = router;
