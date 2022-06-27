const db = require('../database/db.js');

module.exports = {
  getAllOpen: () => {
    return db.ticket.find({complete: false, status: 'approved'})
  },

  getAllClosed: (studentId) => {
    return db.ticket.find({studentId: studentId, complete: true})
  },

  voteTask: (info) => {
    return db.ticket.findOneAndUpdate({ticketId: info.ticketId},
      {$push: {reacts: info.studentId}})
  },

  completeTask: (ticketId) => {
    return db.ticket.findOneAndUpdate({ticketId}, {complete: true})
  }

}