const express = require('express');
const auth = require('../controllers/auth.js');
const student = require('../controllers/student.js');
const admin = require('../controllers/admin.js');
const staff = require('../controllers/staff.js');
const clients = require('../controllers/client.js');

const router = express.Router();
//testPostman
router.get('/', (req, res) => (
  res.send('HELLO FROM CHORES')
));

//AuthRoute:
router.post('/api/auth/register', auth.register);
router.post('/api/auth/login', auth.login);

// //ClientRoute:
router.get('/api/clients/tickets', clients.getAll);
router.get('/api/clients/:id', clients.getClient);
router.post('/api/clients/create/:id', clients.createOne);
router.put('/api/clients/change/:id', clients.update);
router.delete('/api/clients/delete/:id', clients.delete);

//StaffRoute:
router.get('/api/staff/allTickets', staff.getAllTickets);
router.get('/api/staff/allStudents', staff.getAllUsers);
router.put('/api/staff/assignStudentAndStaff', staff.assignStudentAndStaff);
router.put('/api/staff/updateTicketStatus', staff.updateTicketStatus);
router.delete('/api/staff/deactivateStudent', staff.deactivateStudent);
router.post('/api/staff/addStaffOrStudent', staff.addStaffOrStudent);


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
