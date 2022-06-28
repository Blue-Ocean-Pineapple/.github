const db = require('../database/db.js');

module.exports = {
  getAllOpen: () => {
    return db.Ticket.find({complete: false, status: 'approved'})
  },

  getAllClosed: (studentId) => {
    return db.Ticket.find({studentId: studentId, complete: true})
  },

  voteTask: (info) => {
    return db.Ticket.findOneAndUpdate({ticketId: info.ticketId},
      {$push: {reacts: info.studentId}})
  },

  completeTask: (ticketId) => {
    return db.Ticket.findOneAndUpdate({ticketId}, {complete: true})
  },

  createTicket: (info) => {
    return db.Ticket.create(info)
  },

  deleteTickets: () => {
    return db.Ticket.deleteMany({})
  }

}