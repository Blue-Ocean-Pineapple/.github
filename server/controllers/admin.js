const model = require("../models/admin.js");

module.exports = {
  // getAllTickets: (req, res) => {
  //     model.getAllStudents()
  //     .then((data) => res.send(data).status(200))
  //     .catch((err) => res.send(err).status(500))
  // },

  // getAllAccounts: (req, res) => {
  //     model.getAllAccounts()
  //     .then((data) => res.send(data).status(200))
  //     .catch((err) => res.send(err).status(500))
  // },

  deleteAccount: (req, res) => {
    let account = req.body.email;
    console.log(account)
    model
      .deleteAccount(account)
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(500));
  },

  deleteAll: (req, res) => {
    model
      .deleteAllUsers(req.body)
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(500));
  },

  // updateTicket: (req, res) => {
  //     let ticket = req.body.ticket_id;
  //     model.updateTicet(ticket)
  //     .then((data) => res.send(data).status(200))
  //     .catch((err) => res.send(err).status(500))
  // },

  // addStaff: (req, res) => {
  //     let staff = req.body.role;
  //     model.addStaff(staff)
  //     .then((data) => res.send(data).status(200))
  //     .catch((err) => res.send(err).status(500))
  // },

  // addStudent: (req, res) => {
  //     let student = req.body.role;
  //     model.addStudent(student)
  //     .then((data) => res.send(data).status(200))
  //     .catch((err) => res.send(err).status(500))
  // }
};
