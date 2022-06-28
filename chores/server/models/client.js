const {Ticket} = require("../database/db.js");

exports.findAll = () => {
  return Ticket.find({complete: false});
};

exports.findByID = (id) => {
  return Ticket.find({_id: id});
};

exports.createOne = (name, wage, description, location, id, created) => {
  return Ticket.create({name: name, wage: wage, description: description, location: location, creatorId: id, createdAt: created});
};

exports.update = (description, id, location, updatedDescription, updatedLocation) => {
  return Ticket.findOneAndUpdate({description: description, _id: id, location: location}, {description: updatedDescription, _id: id, location: updatedLocation})
}

exports.delete = (id) => {
  return Ticket.deleteOne({_id: id});
};
