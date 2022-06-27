let model = require('../models/student.js');

/**
router.post('/api/student/account', student.createOne);
router.delete('/api/student/account', student.delete);
 */

module.exports = {

  // get tickets where status = approved AND completed is not true
  getAllOpen: (req, res) => {
    model.getAllOpen()
    .then((data) => res.send(data).status(200))
    .catch((err) => res.send(err).status(404))
  },

  // get tickets where studentId matches AND completed is TRUE
  getAllClosed: (req, res) => {
    let student_id = req.body.student_id || req.query.student_id || req.params.student_id;
    model.getAllClosed(student_id)
    .then((data) => res.send(data).status(200))
    .catch((err) => res.send(err).status(404))
  },

  // vote on ticket, need ticket id, student id
  voteTask: (req, res) => {
    let info = {
      studentId: req.body.student_id || req.query.student_id || req.params.student_id,
      ticketId: req.body.ticketId || req.query.ticketId || req.params.ticketId
    };
    console.log(info)
    model.voteTask(info)
    .then((data) => res.send(data.data).status(200))
    .catch((err) => res.send(err).status(404))
  },

  // mark as complete, need ticket id; set complete to true
  completeTask: (req, res) => {
    let ticketId = req.body.ticketId || req.query.ticketId || req.params.ticketId;
    model.completeTask(ticketId)
    .then((data) => res.send(data.data).status(200))
    .catch((err) => res.send(err).status(404))
  },

  // createOne: (req, res) => {

  // }

}
