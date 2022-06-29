const db = require ('../database/db');

module.exports = {
  getAllTickets: function(req, callback) {
    console.log('model req getalltickets', req)
    db.Ticket.find({})
      .then((results) => {
        console.log('model getalltickets results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  getAllUsers: function(req, callback) {
    console.log('model req getAllUsers', req)
    db.User.find({})
      .then((results) => {
        console.log('model getAllUsers results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  assignStudentAndStaff: function(req, callback) {
    console.log('model req assignStudentAndStaff', req)
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
    console.log('model req updateTicketStatus', req)
    const ticketId = ({ _id: req._id });
    const status = ({ clientStatus: req.clientStatus })
    db.User.findOneAndUpdate(ticketId, status, { new: true, upsert: true })
      .then((results) => {
        console.log('model updateTicketStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  deactivateStudent: function(req, callback) {
    console.log('model req deactivateStudent', req)
    const email = ({ email: req.email });
    db.User.findOneAndUpdate(email, { active: !req.acive }, { new: true, upsert: true })
      .then((results) => {
        console.log('model deactivateStudent results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  addStaffOrStudent: function(req, callback) {
    console.log('model req addStaffOrStudent', req)
    const email = ({ email: req.email });
    db.User.findOneAndUpdate(email, req, { new: true, upsert: true })
      .then((results) => {
        console.log('model addStaffOrStudent results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },
}