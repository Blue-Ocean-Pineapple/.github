var { User } = require('../database/db.js');
// const bcrypt = require("bcrypt");

module.exports = {
  saveUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
      const user = await newUser.save();
      console.log("Register successfully!!!");
      res.status(200).json(user);
    } catch (err) {
      console.log('err while register', err)
    }
  },
  // get: function () {

  // },
  // put: function () {

  // },
  // delete: function () {

  // }
}
