const Post = require('./models/student.js');
const ticketData = require('../examples/ticket.json');

Post.deleteTickets()
.then(() => Promise.all(ticketData.map((tix) => Post.createTicket(tix))))
.then(() => console.log('database has been reset'))
.catch((err) => console.log('Error in resetting db: ',err))