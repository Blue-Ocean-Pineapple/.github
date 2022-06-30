const express = require("express");
const users = require("../controllers/users.js");
const student = require("../controllers/student.js");
const admin = require("../controllers/admin.js");
const staff = require("../controllers/staff.js");
const clients = require("../controllers/client.js");
const map = require("../controllers/map.js");

const router = express.Router();

//testPostman
// router.get('/', (req, res) => (
//   res.send('HELLO FROM CHORES')
// ));

//UserRoute:
router.post("/api/users/info", users.saveUser);
router.get("/api/users/:uid", users.getOne);
router.get("/api/users", users.getAll);


//ClientRoute:
router.get("/api/clients/tickets", clients.getAll);
router.get("/api/clients/done", clients.getCompleted);
router.get("/api/clients/:id", clients.getClient); //change to ticketId?
router.post("/api/clients/create", clients.createOne);
router.put("/api/clients/update", clients.update);
router.delete("/api/clients/delete", clients.delete);

//StaffRoute:
router.get("/api/staff/allTickets", staff.getAllTickets);
router.get("/api/staff/allStudents", staff.getAllUsers);
router.put("/api/staff/assignStudentAndStaff", staff.assignStudentAndStaff);
router.put("/api/staff/updateTicketStatus", staff.updateTicketStatus);
router.delete("/api/staff/deactivateStudent", staff.deactivateStudent);
router.put("/api/staff/addStaffOrStudent", staff.addStaffOrStudent);

// // StudentRoutes
// router.get("/api/student/:id/ticket/open", student.getAllOpen);
// router.get("/api/student/:id/ticket/closed", student.getAllClosed);
// // router.get("/api/student/:id/ticket/:ticket_id", student.showTicket);
// router.put("/api/student/:id/ticket/:ticket_id/vote", student.voteTask);
// router.put("/api/student/ticket/:ticket_id/completed", student.completeTask);
// all our open ticket query the same
//StudentRoutes:
router.get("/api/student/ticket/open", student.getAllOpen);
router.get("/api/student/:id/ticket/open", student.getAllAssignedOpen);
router.get("/api/student/:id/ticket/closed", student.getAllClosed);
router.put("/api/student/ticket/voteUp", student.voteUp);
router.put("/api/student/ticket/voteDown", student.voteDown);
router.put("/api/student/ticket/completed", student.completeTask);
// router.post('/api/student/account', student.createOne);
// router.delete('/api/student/account', student.delete);

//AdminRoute:
// router.get('/api/admin/tickets', admin.getAllTickets);
// router.get('/api/admin/accounts', admin.getAllAccounts);
// router.put('/api/admin/update/:id', admin.updateTicket);
router.delete("/api/admin/delete/", admin.deleteAccount);
// router.post('/api/admin/staff/:id', admin.addStaff);
// router.post('/api/admin/student/:id', admin.addStudent);

//MapRoutes:
router.get("/api/map/ticket", map.getGeoLoc);

module.exports = router;
