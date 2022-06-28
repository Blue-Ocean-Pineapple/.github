const express = require('express');
const auth = require('../controllers/auth.js');
const student = require('../controllers/student.js');
const admin = require('../controllers/admin.js');
const staff = require('../controllers/staff.js');
const clients = require('../controllers/client.js');
const map = require('../controllers/map.js');

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
router.get('/api/clients/:id', clients.getClient); //change to ticketId?
router.post('/api/clients/create', clients.createOne);
router.put('/api/clients/update', clients.update);
router.delete('/api/clients/delete', clients.delete);

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
// router.get('/api/admin/tickets', admin.getAllTickets);
// router.get('/api/admin/accounts', admin.getAllAccounts);
// router.put('/api/admin/update/:id', admin.updateTicket);
router.delete('/api/admin/delete/', admin.deleteAccount);
// router.post('/api/admin/staff/:id', admin.addStaff);
// router.post('/api/admin/student/:id', admin.addStudent);

//MapRoutes:
router.get('/api/map/ticket', map.getGeoLoc);

module.exports = router;
