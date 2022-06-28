const express = require('express');
const users = require('../controllers/users.js');
const student = require('../controllers/student.js');
const admin = require('../controllers/admin.js');
const staff = require('../controllers/staff.js');
const clients = require('../controllers/client.js');

const router = express.Router();
//testPostman
router.get('/', (req, res) => (
  res.send('HELLO FROM CHORES')
));

//UserRoute:
router.post('/api/users/info', users.saveUser);
// router.put('/api/users/:id', users.update);
// router.delete('/api/users/:id', users.delete);
// router.get('/api/users/:id', users.getOne);

//ClientRoute:
router.get('/api/clients/tickets', clients.getAll);
router.get('/api/clients/:id', clients.getClient);
router.post('/api/clients/create/:id', clients.createOne);
router.put('/api/clients/change/:id', clients.update);
router.delete('/api/clients/delete/:id', clients.delete);

//StaffRoute:
router.get('/api/staff/', staff.getAllTickets);
router.get('/api/staff/', staff.getAllStudents);
router.post('/api/staff/:id', staff.updateStudent);
router.delete('/api/staff/:id', staff.deactivateStudent);
router.post('/api/staff/:id', staff.addStudent);
router.post('/api/staff/:id', staff.addStaff);
router.put('/api/staff/:id', staff.updateTicket);

//StudentRoutes:
router.get('/api/student/ticket/open', student.getAllOpen);
router.get('/api/student/ticket/closed', student.getAllClosed);
router.put('/api/student/ticket/vote', student.voteTask);
router.put('/api/student/ticket/completed', student.completeTask);
// router.post('/api/student/account', student.createOne);
// router.delete('/api/student/account', student.delete);

//AdminRoute:
router.get('/api/admin/', admin.getAllTickets);
router.get('/api/admin/', admin.getAllAccounts);
router.put('/api/admin/:id', admin.updateTicket);
router.delete('/api/admin/:id', admin.deleteAccount);
router.post('/api/admin/:id', admin.addStaff);
router.post('/api/admin/:id', admin.addStudent);

module.exports = router;
