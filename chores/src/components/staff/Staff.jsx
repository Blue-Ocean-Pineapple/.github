import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import AllStaff from "./pages/AllStaff";
import AllStudents from "./pages/AllStudents";
import AllTickets from "./pages/AllTickets";
import {
  Button,
  Box
} from "@chakra-ui/react";

export const changeContext = createContext();

export default function Staff () {
  const [openTickets, setOpenTickets] = useState([]);
  const [closedTickets, setClosedTickets] = useState([]);
  const [student, setStudent] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [curPage, setCurPage] = useState('alltickets');
  const [isChange, setIsChange] = useState(false);
  const [currStatus, setCurrStatus] = useState('');
  const [activate, setActivate] = useState(false);

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
  }, [isChange, currStatus, activate]);

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
          students={student}
          isChange={isChange}
          setChange={setIsChange}
          currStatus={currStatus}
          setStatus={setCurrStatus} />
        )
    case 'allstaff':
      return (
        <AllStaff
        setCurPage={setCurPage}
        staff={staff}
        activate={activate}
        setActivate={setActivate}/>
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
    <Box m={8} p={2}>
        <Button  m={3} p={2} _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('alltickets')} >Tickets</Button>
        <Button m={3} p={2} _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('allstaff')} >Staff</Button>
        <Button m={3} p={2} _hover={{ bg: "#FFD93D" }} onClick={() => setCurPage('allstudents')} >Students</Button>
        {renderView()}
    </Box>
  );
}