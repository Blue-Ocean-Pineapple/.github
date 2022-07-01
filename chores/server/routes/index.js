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
router.get("/api/staff/studentName", staff.getStudentName);
router.get("/api/staff/staffName", staff.getStaffName);
router.put("/api/staff/assignStudentAndStaff", staff.assignStudentAndStaff);
router.put("/api/staff/updateStatus", staff.updateStatus);
router.put("/api/staff/updateReopenTicket", staff.updateReopenTicket);
router.put("/api/staff/deactivateStudentOrStaff", staff.deactivateStudentOrStaff);
router.put("/api/staff/addStaffOrStud", staff.addStaffOrStudent);
// router.put("/api/staff/updateTicketStatus", staff.updateTicketStatus);
router.put("/api/staff/updateTicketComplete", staff.updateTicketComplete);
router.delete("/api/staff/deactivateStudent", staff.deactivateStudent);
router.post("/api/staff/addStaffOrStudent", staff.addStaffOrStudent);

//StudentRoutes:
router.get("/api/student/ticket/open", student.getAllOpen);
router.get("/api/student/:id/ticket/open", student.getAllAssignedOpen);
router.get("/api/student/:id/ticket/closed", student.getAllClosed);

router.put("/api/student/ticket/voteUp", student.voteUp);
router.put("/api/student/ticket/voteDown", student.voteDown);
router.put("/api/student/ticket/removeVoteUp", student.removeVoteUp);
router.put("/api/student/ticket/removeVoteDown", student.removeVoteDown);
router.get("/api/student/:id/ticket/:ticketId/hasVotedUp", student.hasVotedUp);
router.get("/api/student/:id/ticket/:ticketId/hasVotedDown",student.hasVotedDown);
router.get("/api/student/:id/ticket/:ticketId/hasVoted", student.hasVoted);
router.post("/api/student/ticket", student.createTicket);
// router.post('/api/student/account', student.createOne);
// router.delete('/api/student/account', student.delete);

//AdminRoute:
router.delete("/api/admin/delete/", admin.deleteAccount);

//MapRoutes:
router.get("/api/map/ticket", map.getGeoLoc);


module.exports = router;
