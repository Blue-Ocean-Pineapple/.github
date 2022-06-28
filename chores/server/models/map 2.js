const db = require('../database/db.js');

module.exports = {
  getGeoLoc: () => {
    return db.Ticket.find({complete: false, status:"in-progress"})
  }
}