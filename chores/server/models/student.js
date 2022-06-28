const { Ticket, User } = require("../database/db.js");

module.exports = {
  getAllOpen: () => {
    return Ticket.find({ complete: false, status: "approved" });
    // We cant just search up for tickets, we need to search for the tickets
    // approved under a certain organization
  },

  getAllAssignedOpen: (studentId) => {
    return Ticket.find({ studentId, complete: false, status: "approved" });
  },

  getAllClosed: (studentId) => {
    return Ticket.find({ studentId, complete: true });
  },

  voteTask: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { ticketId },
      { $push: { reacts: studentId } }
    );
  },

  completeTask: (ticketId) => {
    return Ticket.findOneAndUpdate({ ticketId }, { complete: true });
  },

  createTicket: (info) => {
    return Ticket.create(info);
  },

  deleteTickets: () => {
    return Ticket.deleteMany({});
  },
};
