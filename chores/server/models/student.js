const { Ticket } = require("../database/db.js");

module.exports = {
  getAllOpen: () => {
    return Ticket.find({
      clientStatus: "approved",
      complete: false,
      studentId: null,
    });
  },

  getAllAssignedOpen: (studentId) => {
    return Ticket.find({
      studentId,
      clientStatus: "approved",
      complete: false,
    });
  },

  getAllClosed: (studentId) => {
    return Ticket.find({ studentId, clientStatus: "complete", complete: true });
  },

  voteUp: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { ticketId },
      { $addToSet: { reacts: studentId } }
    );
  },

  voteDown: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { ticketId },
      { $pull: { reacts: studentId } }
    );
  },

  completeTask: (ticketId) => {
    return Ticket.findOneAndUpdate(
      { ticketId },
      { complete: true, clientStatus: "complete" }
    );
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
