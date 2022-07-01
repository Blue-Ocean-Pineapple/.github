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
        // console.log('model getAllUsers results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  assignStaff: function(req, callback) {
    console.log('model req assignStaff', req[0]);
    console.log('model req assignStaff', req[1]);
    db.Ticket.findOneAndUpdate(req[1], req[0], {upsert: true})
      .then((results) => {
        console.log('model assignStaff results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})

  },

  assignStudent: function(req, callback) {
    console.log('model req assignStaff', req[0]);
    console.log('model req assignStaff', req[1]);
    db.Ticket.findOneAndUpdate(req[1], req[0], {upsert: true})
    .then((results) => {
      console.log('model assignStudent results', results)
      callback(null, results)
    })
    .catch((err) => {callback(err)})

  },

  updateStatus: function(req, callback) {
    console.log('model req updateStatus', req)
    const ticketId = ({ _id: req.id });
    db.Ticket.findOneAndUpdate(ticketId, { clientStatus: req.value })
      .then((results) => {
        console.log('model updateStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  updateTicketStatus: function(req, callback) {
    console.log('model req updateTicketStatus', req)
    const ticketId = ({ _id: req._id, clientStatus: req.clientStatus });
    db.Ticket.findOneAndUpdate(ticketId, {_id: req._id, clientStatus: 'complete' })
      .then((results) => {
        console.log('model updateTicketStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  updateTicketComplete: function(req, callback) {
    console.log('model req updateTicketComplete', req)
    const ticketId = ({ _id: req._id, complete: req.complete });
    db.Ticket.findOneAndUpdate(ticketId, {_id: req._id, complete: true })
      .then((results) => {
        console.log('model updateStatus results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  updateReopenTicket: function(req, callback) {
    console.log('model req updateReopenTicket', req.complete)
    db.Ticket.findOneAndUpdate({ _id: req._id }, { clientStatus: 'awaiting', complete: false })
      .then((results) => {
        console.log('model updateReopenTicket results', results)
        callback(null, results)
      })
      .catch((err) => {callback(err)})
  },

  deactivateStudentOrStaff: function(req, callback) {
    console.log('model req deactivateStudentOrStaff', req.active, req._id);
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

  getStudentName: (uid) => {
    return db.User.find({uid})
  },

  getStaffName: (uid) => {
    return db.User.find({uid})
  }
}