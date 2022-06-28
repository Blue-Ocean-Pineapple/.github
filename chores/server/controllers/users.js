var User = require('../models/users.js');
// console.log('User controller', User)

module.exports = {
    saveUser: (req, res) => {
      console.log("req from axios", req.body);
      const {uid, name, age, email, address, city, state, phone, role, organization, active} = req.body;
      const user = {
        uid, name, age, email, address, city, state, phone, role, organization, active
      }
      User.saveUser(user, (err, data) => {
        if(err) {
          console.log('error while savinig user data', err);
          res.status(404).send(err);
        }
        else {
          res.status(200).send(data);
        }
      })
    },
  // getOne: (req, res) => {
  //   User.get((err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // },
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
}