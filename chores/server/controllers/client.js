const client = require("../models/client.js");

module.exports = {

  getAll: (req, res) => {
    client.findAll()
      .select("-__v")
      .exec()
        .then((data) => res.send(data).status(200))
        .catch((err) => console.log(err))
  },

  getCompleted: (req, res) => {
    client.findCompleted()
      .select("-__v")
      .exec()
        .then((data) => res.send(data).status(200))
        .catch((err) => console.log(err))
  },

  getClient: (req, res) => {
    client.findByID(req.params._id)
    .select("-__v")
    .exec()
      .then((data) => res.send(data).status(200))
      .catch((err) => console.log(err))
  },

  createOne: (req, res) => { //need UID as prop
    client.createOne(req.body.name, req.body.wage, req.body.description, req.body.location, req.body.creatorId, req.body.createdAt)
      .then((data) => res.sendStatus(201))
      .catch((err) => console.log(err))
  },

  update: (req, res) => {
    client.update(req.body.description, req.body._id, req.body.location, req.body.updatedDescription, req.body.updatedLocation)
      .then((data) => res.sendStatus(203))
      .catch((err) => console.log(err))
  },

  delete: (req, res) => {
    client.delete(req.body._id)
      .then((data) => res.sendStatus(204))
      .catch((err) => console.log(err))
  }

}
