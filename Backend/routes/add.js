const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
router.get("/add", verify, (req, res) => {
  try {
    User.findByIdAndUpdate(res.user._id, {
      $push: {
        name: req.body.name,
        email: req.body.email,
        dna: req.body.dna,
      },
    }).exec();
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
