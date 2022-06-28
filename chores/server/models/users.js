var { User } = require('../database/db.js');
// console.log('User Mongodb', User);
// const bcrypt = require("bcrypt");

module.exports = {
  saveUser: async (req, res) => {
    try {
      // const salt = await bcrypt.genSalt(10);
      // const hashedPass = await bcrypt.hash(req.body.password, salt);
      console.log('req.body', req);
      const newUser = new User({
        uid: req.uid,
        name:req.name,
        age: req.age,
        email: req.email,
        address: req.address,
        city: req.city,
        state: req.state,
        phone: req.phone,
        role: req.role,
        organization: req.organization,
        active:req.active
      });
      const user = await newUser.save();
      console.log("Register successfully!!!");
    } catch (err) {
      console.log('err while register', err)
    }
  },
  getOne: (id ) => {
    console.log('id in model', id)
     return User.findOne({id: id});
  },
  getAll: () => {
    return User.find({});
  },
  // put: function () {

  // },
  // delete: function () {

  // }
  deleteAllUsers: () => {
    return User.deleteMany({})
  },
}
