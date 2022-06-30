const Post = require("./models/student.js");
const PostUser = require("./controllers/users.js");
const ticketData = require("../examples/ticket.json");
const userData = require("../examples/user.json");

Post.deleteTickets()
  .then(() => PostUser.deleteAllUsers())
  .then(() => Promise.all(ticketData.map((tix) => Post.createTicket(tix))))
  .then(() => Promise.all(userData.map((user) => PostUser.saveUser(user))))
  .then(() => console.log("database has been reset"))
  .catch((err) => console.log("Error in resetting db: ", err));
