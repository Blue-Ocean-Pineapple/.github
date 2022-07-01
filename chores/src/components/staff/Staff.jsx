import axios from "axios";
import React, { useState, useEffect } from "react";
import AllStaff from "./pages/AllStaff";
import AllStudents from "./pages/AllStudents";
import AllTickets from "./pages/AllTickets";
import {
  ChakraProvider,
  Button,
  Center
} from "@chakra-ui/react";

export default function Staff () {
  const [openTickets, setOpenTickets] = useState([]);
  const [closedTickets, setClosedTickets] = useState([]);
  const [student, setStudent] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [curPage, setCurPage] = useState('alltickets');



  const getAllTickets = () => {
    let open = [];
    let closed = [];
    axios.get('/staff/allTickets')
      .then((res) => {
        console.log('all tickets res?', res)
        res.data.map((ticket) => {
          if (ticket.complete === false) {
            open.push(ticket)
          } else if (ticket.complete === true) {
            closed.push(ticket)
          }
        })
        setOpenTickets(open);
        setClosedTickets(closed);
      })
      .catch((err) => {
        console.log("err!!", err);
      });
  };

  const getAllUsers = () => {
    let students = [];
    let staffs = [];
    let admins = [];
    let customers = [];
    axios
      .get("/staff/allStudents")
      .then((res) => {
        console.log("all users res?", res.data);
        res.data.map((user) => {
          if (user.role === "Student") {
            students.push(user);
          } else if (user.role === "Staff") {
            staffs.push(user);
          } else if (user.role === "Admin") {
            admins.push(user);
          } else if (user.role === "Customer") {
            customers.push(user);
          }
        });
        setStudent(students);
        setStaff(staffs);
        setAdmin(admins);
        setCustomer(customers);
      })
      .catch((err) => {
        console.log("err!!", err);
      });
  };

  useEffect(() => {
    getAllTickets();
    getAllUsers();
  }, []);

  const renderView=()=>{
   // eslint-disable-next-line default-case
   switch (curPage) {
    case 'alltickets':
      return (
        <AllTickets
          setCurPage={setCurPage}
          openTickets={openTickets}
          closedTickets={closedTickets}
          staff={staff}
          students={student} />
        )
    case 'allstaff':
      return (
        <AllStaff
        setCurPage={setCurPage}
        staff={staff} />
      )
    case 'allstudents':
      return (
        <AllStudents
        setCurPage={setCurPage}
        students={student} />
      )
    }
  }
  return (
    <ChakraProvider >
        <Button _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('alltickets')}>Tickets</Button>
        <Button _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('allstaff')}>Staff</Button>
        <Button _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('allstudents')}>Students</Button>
        {renderView()}
    </ChakraProvider>
  );
}