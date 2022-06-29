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
  const [tickets, setTickets] = useState([]);
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [admin, setAdmin] = useState([]);

  const getAllTickets = () => {
    console.log('hello')
    axios.get('/staff/allTickets')
      .then((res) => {
        console.log('all tickets res?', res)
        setTickets(res);
      })
      .catch((err) => {console.log('err!!', err)})
  }

  const getAllUsers = () => {
    console.log('hello')
    axios.get('/staff/allStudents')
      .then((res) => {
        console.log('all students res?', res)
        res.map(user => {
          if (user.role === 'student') {
            setStudents(students.push(user))
          } else if (user.role === 'staff') {
            setStudents(staff.push(user))
          } else if (user.role === 'admin') {
            setStudents(admin.push(user))
          } else if (user.role === 'customer') {
            setStudents(customer.push(user))
          }
        })
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
            <Route path="/alltickets" element={<AllTickets tickets={tickets} />} />
            <Route path="/allstaff" element={<AllStaff staff={staff} />} />
            <Route path="/allstudents" element={<AllStudents students={students} />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  )
}
