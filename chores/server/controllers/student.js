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

  // mark as complete, need ticket id; set complete to true
  completeTask: (req, res) => {
    let ticketId =
      req.body.ticketId || req.query.ticketId || req.params.ticketId;
    model
      .completeTask(ticketId)
      .then((data) => res.send(data.data).status(200))
      .catch((err) => res.send(err).status(404));
  },

  // rejectTask: (req, res) => {
  //   let info = {
  //     studentId: req.params.studentId,
  //     ticketId: req.parmas.ticketId,
  //   };
  //   model
  //     .rejectTask(info)
  //     .then((data) => res.send(data.data).status(200))
  //     .catch((err) => res.send(err).status(404));
  // },

  // createOne: (req, res) => {

  // }
};
