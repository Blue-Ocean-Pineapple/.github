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

    getAllStudents: function(req, res) {
        model.getAllStudents((err, results) => {
            console.log('student data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    updateStudent: function(req, res) {
        model.updateStudent(req.body, (err, results) => {
            console.log('updateStudent data?', results.data);
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

    updateTicket: function(req, res) {
        model.updateTicket(req.body, (err, results) => {
            console.log('updateTicket data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    addStaff: function(req, res) {
        model.addStaff(req.body, (err, results) => {
            console.log('addStaff data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    },

    addStudent: function(req, res) {
        model.addStudent(req.body, (err, results) => {
            console.log('addStudent data?', results.data);
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results.data);
            }
          });
    }
//deactivate, update, and add student are the same post request?
}