// const router = require("express").Router();
// const User = require("../model/User");
// const { validateRegistration, validateLogin } = require("../validation");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// //Registration
// router.post("/register", async (req, res) => {
//   //res.send("Register");

//   //Validating before creating a user
//   const { error } = validateRegistration(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //checking if user is already in the database
//   const emailExist = await User.findOne({ email: req.body.email });
//   if (emailExist) return res.status(400).send("Email already exists");

//   //Hash the password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   //creating a user
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword,
//   });
//   try {
//     const savedUser = await user.save();
//     res.send(savedUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //Login
// router.post("/login", async (req, res) => {
//   //Validating before logging a user
//   const { error } = validateLogin(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //check if user is registered
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("User not Registered");

//   //check if password is correct
//   const validPass = await bcrypt.compare(req.body.password, user.password);
//   if (!validPass) return res.status(400).send("Invalid Password");

//   //Create and assign a token
//   const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
//   res.header("auth-token", token).send(token);
//   //res.send("Logged in!");
// });

// module.exports = router;
