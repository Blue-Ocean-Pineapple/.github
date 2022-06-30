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
      { _id: ticketId },
      { $addToSet: { voteUp: studentId } }
    );
  },

  removeVoteUp: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { _id: ticketId },
      { $pull: { voteUp: studentId } }
    );
  },

  voteDown: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { _id: ticketId },
      { $addToSet: { voteDown: studentId } }
    );
  },
  removeVoteDown: ({ ticketId, studentId }) => {
    return Ticket.findOneAndUpdate(
      { _id: ticketId },
      { $pull: { voteDown: studentId } }
    );
  },

  hasVotedUp: ({ ticketId, studentId }) => {
    return Ticket.find({ _id: ticketId, voteUp: studentId });
  },
  hasVotedDown: ({ ticketId, studentId }) => {
    return Ticket.find({ _id: ticketId, voteDown: studentId });
  },

  createTicket: (info) => {
    return Ticket.create(info);
  },

  deleteTickets: () => {
    return Ticket.deleteMany({});
  },
};
