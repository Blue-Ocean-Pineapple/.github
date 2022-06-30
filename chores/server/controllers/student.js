let model = require("../models/student.js");

/**
router.post('/api/student/account', student.createOne);
router.delete('/api/student/account', student.delete);
 */

module.exports = {
  // get tickets where status = approved AND completed is not true
  getAllOpen: (req, res) => {
    model
      .getAllOpen()
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  // get tickets where studentId matches AND completed is TRUE
  getAllClosed: (req, res) => {
    const id = req.params.id;
    model
      .getAllClosed(id)
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  getAllAssignedOpen: (req, res) => {
    const id = req.params.id;
    model
      .getAllAssignedOpen(id)
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  // vote on ticket, need ticket id, student id
  voteUp: (req, res) => {
    const info = {
      studentId: req.body.studentId,
      ticketId: req.body.ticketId,
    };
    console.log(info);
    model
      .voteUp(info)
      .then((data) => res.send(data).status(200))
      .catch((err) => res.send(err).status(404));
  },
  removeVoteUp: (req, res) => {
    const info = {
      studentId: req.body.studentId,
      ticketId: req.body.ticketId,
    };
    console.log(info);
    model
      .removeVoteUp(info)
      .then((data) => res.send(data.data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  voteDown: (req, res) => {
    const info = {
      studentId: req.body.studentId,
      ticketId: req.body.ticketId,
    };
    console.log(info);
    model
      .voteDown(info)
      .then((data) => res.send(data.data).status(200))
      .catch((err) => res.send(err).status(404));
  },
  removeVoteDown: (req, res) => {
    const info = {
      studentId: req.body.studentId,
      ticketId: req.body.ticketId,
    };
    console.log(info);
    model
      .removeVoteDown(info)
      .then((data) => res.send(data.data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  hasVotedUp: (req, res) => {
    const info = {
      studentId: req.params.id,
      ticketId: req.params.ticketId,
    };
    console.log("we are in controller has voted up", info);
    model
      .hasVotedUp(info)
      .then((data) => {
        console.log(data, "this is the data returning to user");
        res.send(data).status(200);
      })
      .catch((err) => res.send(err).status(404));
  },

  hasVotedDown: (req, res) => {
    const info = {
      studentId: req.params.id,
      ticketId: req.params.ticketId,
    };
    model
      .hasVotedDown(info)
      .then((data) => {
        console.log(data);
        res.send(data).status(200);
      })
      .catch((err) => res.send(err).status(404));
  },

  hasVoted: async (req, res) => {
    const info = {
      studentId: req.params.id,
      ticketId: req.params.ticketId,
    };
    const hasVotedUp = await model.hasVotedUp(info);

    if (hasVotedUp.length) {
      return res.status(200).send(true);
    }
    const hasVotedDown = await model.hasVotedDown(info);

    if (hasVotedDown.length) {
      return res.status(200).send(false);
    }

    return res.status(200).send(null);
  },

  createTicket: (req, res) => {
    const {
      clientName,
      taskName,
      wage,
      address,
      description,
      clientStatus,
      complete,
      creatorId,
      studentId,
      coordinates,
    } = req.body;

    const info = {
      clientName,
      taskName,
      wage,
      address,
      description,
      clientStatus,
      complete,
      creatorId,
      studentId,
      coordinates,
    };
    console.log(info, "info in controller");
    model
      .createTicket(info)
      .then((data) => {
        console.log(data, "here is the data");
        res.send(data).status(200);
      })
      .catch((err) => res.send(err).status(404));
  },
};
