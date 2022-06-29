import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AllStaff from './pages/AllStaff';
import AllStudents from './pages/AllStudents';
import AllTickets from './pages/AllTickets';
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  Box,
  Grid,
  HStack,
  StackDivider
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";

type NavLinkProps = { text: string };
const NavLink = ({ text }: NavLinkProps) => (
  <Link>
    <Text fontSize="xl">{text}</Text>
  </Link>
);

const NavBar = () => (
  <HStack mt={8} spacing={3} divider={<StackDivider />} as="nav">
    <RouteLink to="/alltickets">
      <NavLink text="Tickets" />
    </RouteLink>
    <RouteLink to="/allstaff">
      <NavLink text="Staff" />
    </RouteLink>
    <RouteLink to="/allstudents">
      <NavLink text="Students" />
    </RouteLink>
  </HStack>
);


export default function Staff () {
  const [openTickets, setOpenTickets] = useState([]);
  const [closedTickets, setClosedTickets] = useState([]);
  const [student, setStudent] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [customer, setCustomer] = useState([]);

  const getAllTickets = () => {
    let open = [];
    let closed = [];
    axios.get('/staff/allTickets')
      .then((res) => {
        console.log('all tickets res?', res)
        res.data.map((ticket) => {
          if (ticket.complete) {
            open.push(ticket)
          } else {
            closed.push(ticket)
          }
        })
        setOpenTickets(open);
        setClosedTickets(closed);
      })
      .catch((err) => {console.log('err!!', err)})
  }

  const getAllUsers = () => {
    let students = [];
    let staffs = [];
    let admins = [];
    let customers =[];
    axios.get('/staff/allStudents')
      .then((res) => {
        console.log('all users res?', res)
        res.data.map((user) => {
          if (user.role === 'Student') {
            students.push(user)
          } else if (user.role === 'Staff') {
            staffs.push(user)
          } else if (user.role === 'Admin') {
            admins.push(user)
          } else if (user.role === 'Customer') {
            customers.push(user)
          }
        })
        setStudent(students);
        setStaff(staffs);
        setAdmin(admins);
        setCustomer(customers);
      })
      .catch((err) => {console.log('err!!', err)})
  }

  useEffect(() => {
    getAllTickets();
    getAllUsers();
  }, [])




  return (

    <div>
      <ChakraProvider>
        <Router>
          <NavBar />
          <Routes >
            <Route path="/alltickets"
            element={
            <AllTickets
              openTickets={openTickets}
              closedTickets={closedTickets}
              staff={staff}
              students={student} />} />
            <Route path="/allstaff" element={<AllStaff staff={staff} />} />
            <Route path="/allstudents" element={<AllStudents students={student} />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  )
}
