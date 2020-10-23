const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
router.get("/post", verify , (req, res) => {
  res.json({
    post: {
      title: "Learn Auth with JWT",
      description: "i am going to teach auth using JWT",
    },
  });
  // User.findById({_id: res.user._id})
});

module.exports = router;
