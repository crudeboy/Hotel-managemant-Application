var myUser = require("../models/userModel.js");
var jwt = require("jsonwebtoken");
var validator = require("email-validator");

//Register User
async function register(req, res) {
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const { name, email, password } = req.body;

  if (!name || name === "" || name.length < 3)
    return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minimum of 6 characters long");
  if(!validateEmail.test(email)) return res.status(400).send("Invalid email input")

  let isValidEmail = validator.validate(email);
  if (!isValidEmail) return res.status(400).send("Please Use a valid Email");
  let userExists = await myUser.findOne({ email }).exec();

  if (userExists) return res.status(400).send("Email exists");

  //register TO DATABASE
  let user = myUser(req.body);
  try {
    await user.save();
    console.log("User has been created", user);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.log("User not created", err);
    res.status(400).send("Error,Try again");
  }
}

//login User
async function login(req, res) {
  const { email, password } = req.body;
  if (!email) return res.status(400).send("Email is required");
  let isValidEmail = validator.validate(email);
  if (!isValidEmail) return res.status(400).send("Please Use a valid Email");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minimum of 6 characters long");

  try {
    let userExists = await myUser.findOne({ email }).exec();

    if (!userExists) return res.status(400).send("User doesnt exist");

    userExists.compare(password, (err, match) => {
      if (err || !match) return res.status(400).send("Wrong Password");
      // GENERATE jwt tokens
      let token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).json({
        token,
        user: {
          Id: userExists._id,
          name: userExists.name,
          email: userExists.email,
          isAdmin: userExists.isAdmin,
          createdAt: userExists.createdAt,
          updatedAt: userExists.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("Login Error", err);
    res.status(500).send("Error in Login");
  }
}

//get all user
async function allUser(req, res) {
  try {
    let all = await myUser.find({});
    return res.status(200).send(all);
  } catch (err) {
    return res.status(400).json({ err });
  }
}

//get Single User
async function singleUser(req, res, id) {
  id = req.params.id
  try {
    if(id){
      let single = await myUser.findOne({_id:id});
      return res.status(200).send(single);
    }else{
      return res.status(400).send({message: 'User not found'});
    }
    
  } catch (err) {
    return res.status(400).json({ err });
  }
}

module.exports = { register, login, allUser,singleUser };
