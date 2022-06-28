const db = require('../database/db.js');

module.exports = {
  // getAllStudents: () => {
  //   return db.Ticket.find({})
  // },

  // getAllAccounts: () => {
  //   return db.User.find({})
  // },

  deleteAccount: (account) => {
    return db.User.deleteOne({email: account})
  },

  deleteAllUsers: () => {
    return db.User.deleteMany({})
  },

  createTicketTest: (info) => {
    return db.User.create(info)
  }

  // updateTicket: (ticket) => {
  //   return db.Ticket.findOneAndUpdate({ticketId: ticket.ticketId})
  // },

  // addStaff: (staff) => {
  //   return db.User.create(staff)
  // },

  // addStudent: (student) => {
  //   return db.User.create(student)
  // },

}