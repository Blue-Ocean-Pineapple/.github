let model = require('../models/map.js');

module.exports = {
  // query all tickets where complete is false and status = in progress
  getGeoLoc: (req, res) => {
    model.getGeoLoc()
    .then((data) => res.send(data).status(200))
    .catch((err) => res.send(err).status(404))
  }
}