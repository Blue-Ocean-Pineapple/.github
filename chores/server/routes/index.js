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
// router.post('/api/auth/register', auth.register);
// router.post('/api/auth/login', auth.login);

// //ClientRoute:
// router.get('/api/clients/tickets', clients.getAll);
// router.get('/api/clients/:id', clients.getClient);
// router.post('/api/clients/create/:id', clients.createOne);
// router.put('/api/clients/change/:id', clients.update);
// router.delete('/api/clients/delete/:id', clients.delete);

// //StaffRoute:
// router.get('/api/staff/', staff.getAll);
// router.post('/api/staff/:id', staff.createOne);
// router.put('/api/staff/:id', staff.update);
// router.delete('/api/staff/:id', staff.delete);

//StudentRoutes:
router.get('/api/student/ticket/open', student.getAllOpen);
router.get('/api/student/ticket/closed', student.getAllClosed);
router.put('/api/student/ticket/vote', student.voteTask);
router.put('/api/student/ticket/completed', student.completeTask);
// router.post('/api/student/account', student.createOne);
// router.delete('/api/student/account', student.delete);

//AdminRoute:
// router.get('/api/admin/', admin.getAll);
// router.post('/api/admin/:id', admin.createOne);
// router.put('/api/admin/:id', admin.update);
// router.delete('/api/admin/:id', admin.delete);

module.exports = router;
