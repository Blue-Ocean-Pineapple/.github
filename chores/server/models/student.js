const db = require('../database/db.js');

module.exports = {
  getAllOpen: () => {
    return db.Ticket.find({complete: false, status: 'approved'})
  },

  getAllClosed: (studentId) => {
    return db.Ticket.find({studentId: studentId, complete: true})
  },

  voteTask: (info) => {
    return db.Ticket.findOneAndUpdate({TicketId: info.TicketId},
      {$push: {reacts: info.studentId}})
  },

  completeTask: (TicketId) => {
    return db.Ticket.findOneAndUpdate({TicketId}, {complete: true})
  },

  createTicket: (info) => {
    return db.Ticket.create(info)
  },

  deleteTickets: () => {
    return db.Ticket.deleteMany({})
  }

}