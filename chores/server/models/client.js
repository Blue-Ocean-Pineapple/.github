const {Ticket} = require("../database/db.js");

exports.findAll = () => {
  return Ticket.find({ $or:[ {'clientStatus':'approved'}, {'clientStatus':'awaiting'}, {'clientStatus':'in-progress'}]});
};

exports.findCompleted = () => {
  return Ticket.find({'clientStatus': 'complete'})
};

exports.findByID = (id) => {
  return Ticket.find({_id: id});
};

exports.createOne = (name, wage, description, address, coordinates, id, client) => {
  return Ticket.create({taskName: name, wage: wage, description: description, address: address, coordinates: coordinates, creatorId: id, clientName: client});
};

exports.update = (description, id, location, updatedDescription, updatedLocation) => {
  return Ticket.findOneAndUpdate({description: description, _id: id, address: location}, {description: updatedDescription, _id: id, address: updatedLocation})
}

exports.delete = (id) => {
  console.log(id)
  return Ticket.deleteOne({_id: id});
};
