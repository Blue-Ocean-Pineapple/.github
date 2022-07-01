const model = require('../models/staff.js');

module.exports = {
    getAllTickets: function(req, res) {
        model.getAllTickets(req, (err, results) => {
            console.log('ticket data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    getAllUsers: function(req, res) {
      // console.log('getAllUsers data?', req);
        model.getAllUsers(req, (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    assignStudentAndStaff: function(req, res) {
        model.assignStudentAndStaff(req.body, (err, results) => {
            console.log('updateStudent data?', results);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    updateStatus: function(req, res) {
      model.updateStatus(req.body, (err, results) => {
          console.log('updateTicket data?', results);
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(results);
          }
        });
    },

    updateReopenTicket: function(req, res) {
      // console.log('reopen cont req', req.body)
      model.updateReopenTicket(req.body, (err, results) => {
          console.log('updateTicket data?', results);
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(results);
          }
        });
    },

    deactivateStudentOrStaff: function(req, res) {
      console.log('HOWDY', req.body)
        model.deactivateStudentOrStaff(req.body, (err, results) => {
            console.log('deactivateStudentOrStaff data?', results);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    addStaffOrStudent: function(req, res) {
        model.addStaffOrStudent(req.body, (err, results) => {
            console.log('addStaffOrStudent data?', results);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },
//deactivate,
//update, and add student are the same post request?
}