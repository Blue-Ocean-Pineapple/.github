const client = require("../database/db.js");

exports.findAll = (words, definition) => {
  return client.create({word: words, definition: definition});
};

exports.findByID = (words, definition) => {
  return client.create({word: words, definition: definition});
};

exports.createOne = (words, definition) => {
  return client.create({word: words, definition: definition});
};

exports.delete = (words, definition) => {
  return client.deleteOne({word: words, definition: definition});
};

exports.update = (words, definition, updatedWord, updatedDefinition) => {
  return client.findOneAndUpdate({word: words, definition: definition}, {word: updatedWord, definition: updatedDefinition})
}
