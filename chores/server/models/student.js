const { Ticket } = require("../database/db.js");

module.exports = {
  getAllOpen: () => {
    return Ticket.find({ clientStatus: "approved" });
    // We cant just search up for tickets, we need to search for the tickets
    // approved under a certain organization
  },

  getAllAssignedOpen: (studentId) => {
    return Ticket.find({
      studentId,
      clientStatus: "approved",
    });
  },

  getAllClosed: (studentId) => {
    return Ticket.find({ studentId, clientStatus: "complete" });
  },

  voteTask: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { ticketId },
      { $push: { reacts: studentId } }
    );
  },

  completeTask: (ticketId) => {
    return Ticket.findOneAndUpdate({ ticketId }, { clientStatus: "complete" });
  },

  rejectTask: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { ticketId, studentId },
      { studentId: null }
    );
  },

  createTicket: (info) => {
    return Ticket.create(info);
  },

  deleteTickets: () => {
    return Ticket.deleteMany({});
  },
};
