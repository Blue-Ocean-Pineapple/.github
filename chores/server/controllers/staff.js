const model = require('../models/staff.js');

module.exports = {
    getAllTickets: function(req, res) {
        model.getAllStudents((err, results) => {
            console.log('ticket data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    getAllUsers: function(req, res) {
        model.getAllUsers((err, results) => {
            console.log('getAllUsers data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    assignStudentAndStaff: function(req, res) {
        model.assignStudentAndStaff(req.body, (err, results) => {
            console.log('updateStudent data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    updateTicketStatus: function(req, res) {
      model.updateTicketStatus(req.body, (err, results) => {
          console.log('updateTicket data?', results.data);
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(results.data);
          }
        });
    },

    deactivateStudent: function(req, res) {
        model.deactivateStudent(req.body, (err, results) => {
            console.log('deactivateStudent data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    addStaffOrStudent: function(req, res) {
        model.addStaffOrStudent(req.body, (err, results) => {
            console.log('addStaffOrStudent data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },
//deactivate,
//update, and add student are the same post request?
}