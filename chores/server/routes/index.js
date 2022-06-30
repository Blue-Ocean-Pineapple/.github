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
router.post("/api/staff/addStaffOrStudent", staff.addStaffOrStudent);

//StudentRoutes:
router.get("/api/student/ticket/open", student.getAllOpen);
router.get("/api/student/:id/ticket/open", student.getAllAssignedOpen);
router.get("/api/student/:id/ticket/closed", student.getAllClosed);
router.put("/api/student/ticket/voteUp", student.voteUp);
router.put("/api/student/ticket/voteDown", student.voteDown);
router.put("/api/student/ticket/completed", student.completeTask);


//AdminRoute:
router.delete("/api/admin/delete/", admin.deleteAccount);


//MapRoutes:
router.get("/api/map/ticket", map.getGeoLoc);
router.get("/api/map/names", map.getStudentNames);

module.exports = router;
