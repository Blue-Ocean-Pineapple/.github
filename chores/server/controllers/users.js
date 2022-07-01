// var User = require('../models/users.js');
// console.log('User controller', User)
var { User } = require("../database/db.js");

module.exports = {
  saveUser: async (req, res) => {
    console.log("req from axios saveUser", req);
    // let value = req || req.body;
    const newUser = new User(req.body);
    try {
      const result = await newUser.save();
      console.log("result from save user", result);
      res.status(200).json(result);
    } catch (err) {
      console.log("error while saving user data", err);
    }
  },
  getOne: async (req, res) => {
    var uid = req.params.uid;
    console.log("id for get user info controller", uid);
    try {
      const user = await User.findOne({ email: uid });
      console.log("user looking up", user);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json("error while getting one user", err);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json("error while getting all users info", err);
    }
  },
  // update: (req, res) => {
  //  User.put((err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.status(201).send(result);
  //       console.log('updated user');
  //     }
  //   });
  // },
  // delete : (req, res) => {
  //   User.delete((err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.status(201).send(result);
  //       console.log('deleted user!');
  //     }
  //   });
  // }
  deleteAllUsers: () => {
    return User.deleteMany({});
  },
};
