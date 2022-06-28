const {ticket} = require("../database/db.js");

exports.findAll = () => {
  return ticket.find({complete: false});
};

exports.findByID = (id) => {
  return ticket.find({_id: id});
};

exports.createOne = (name, wage, description, location, id, created) => {
  return ticket.create({name: name, wage: wage, description: description, location: location, creatorId: id, createdAt: created});
};

exports.update = (description, id, location, updatedDescription, updatedLocation) => {
  return ticket.findOneAndUpdate({description: description, _id: id, location: location}, {description: updatedDescription, _id: id, location: updatedLocation})
}

exports.delete = (id) => {
  return ticket.deleteOne({_id: id});
};
