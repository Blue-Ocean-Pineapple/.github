var { User } = require("../database/db.js");
// console.log('User Mongodb', User);
// const bcrypt = require("bcrypt");

module.exports = {
  deleteAllUsers: () => {
    return User.deleteMany({});
  },
  saveUser: (item) => {
    return User.create(item)
  }
};
