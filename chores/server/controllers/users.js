var User = require('../models/users.js');
// console.log('User', User)

module.exports = {
    saveUser: (req, res) => {
      const {uid, displayName, photoURL, email} = req.body;
      User.saveUser(uid, displayName, photoURL, email, (err, data) => {
        if(err) { res.status(404).send(err);}
        else { res.status(200).send(data);}
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