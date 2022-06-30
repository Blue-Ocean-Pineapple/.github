const db = require ('../database/db');

module.exports = {
  getAllTickets: function(req, callback) {
    console.log('model req getalltickets', req.body)
    db.Ticket.find({})
      .then((results) => {
        // console.log('model getalltickets results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  getAllUsers: function(req, callback) {
    console.log('model req getAllUsers', req.body)
    db.User.find({})
      .then((results) => {
        console.log('model getAllUsers results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  assignStudentAndStaff: function(req, callback) {
    console.log('model req assignStudentAndStaff', req.body)
    const ticketId = { _id: req._id };
    const staffId = { staffId: req.staffId };
    const studentId = { studentId: req.studentId };
    const status = { clientStatus: 'in-progress'}
    db.User.findOneAndUpdate(ticketId, {staffId, studentId, status}, { new: true, upsert: true })
      .then((results) => {
        console.log('model getalltickets results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  updateTicketStatus: function(req, callback) {
    console.log('model req updateTicketStatus', req.complete)
    const ticketId = ({ _id: req._id });
    db.User.findOneAndUpdate(ticketId, { clientStatus: 'awaiting', complete: false })
      .then((results) => {
        console.log('model updateTicketStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  updateReopenTicket: function(req, callback) {
    console.log('model req updateTicketStatus', req.complete)
    db.Ticket.findOneAndUpdate({ _id: req._id }, { clientStatus: 'awaiting', complete: false })
      .then((results) => {
        console.log('model updateTicketStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  deactivateStudentOrStaff: function(req, callback) {
    console.log('model req deactivateStudent', req.active, req._id);
    db.User.findOneAndUpdate({ _id: req._id }, { active: false, _id: req._id })
      .then((results) => {
        console.log('model deactivateStudent results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  addStaffOrStudent: function(req, callback) {
    console.log('model req addStaffOrStudent', req.active, req._id);
    db.User.findOneAndUpdate({ _id: req._id }, { active: true, _id: req._id })
      .then((results) => {
        console.log('model addStaffOrStudent results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },
}