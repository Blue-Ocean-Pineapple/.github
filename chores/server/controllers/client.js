const client = require("../models/client.js");

exports.getAll = (req, res) => {
  client.findAll((err, clients) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.status(200).send(clients[0]);
    }
  });
};

exports.getClient = (req, res) => {
  client.findByID(req.body.id, (err, clients) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.status(200).send(clients[0][0]);
      console.log(clients[0][0]);
    }
  });
};

exports.createOne = (req, res) => {
  console.log(req.body);
  client.createOne(req.body.id, (err, clients) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(201);
    }
  });
};

exports.update = (req, res) => {
  client.update(req.body.id, (err, clients) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(203);
    }
  });
};

exports.delete = (req, res) => {
  client.delete(req.body.id, (err, clients) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(204);
    }
  });
};
