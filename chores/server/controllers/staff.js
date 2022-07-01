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
    //   console.log('getAllUsers data?', req);
        model.getAllUsers(req, (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    assignStaff: function(req, res) {
        console.log('assignStaff reqbody', req.body)
        model.assignStaff(req.body, (err, results) => {
            console.log('assignStaff data?', results);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
    },

    assignStudent: function(req, res) {
        console.log('reqbody', req.body)
        model.assignStudent(req.body, (err, results) => {
            console.log('assignStudent data?', results);
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

    updateTicketComplete: function(req, res) {
        model.updateTicketComplete(req.body, (err, results) => {
            console.log('updateTicket data?', results);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
          });
      },

    deactivateStudent: function(req, res) {
        model.deactivateStudent(req.body, (err, results) => {
            console.log('deactivateStudent data?', results);
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

    getStudentName: (req, res) => {
        model.getStudentName(req.query.studentId)
        .then((data) =>  res.send(data[0].name).status(200))
        .catch((err) => res.send(err).status(404))
    },
    getStaffName: (req, res) => {
        model.getStaffName(req.query.staffId)
        .then((data) => res.send(data[0].name).status(200))
        .catch((err) => res.send(err).status(404))
    }
//deactivate,
//update, and add student are the same post request?
}