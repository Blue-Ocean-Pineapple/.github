import React, { useState, useEffect } from "react";
// chores/src/components/admin/AdminEntry.jsx
import AdminEntry from "./AdminEntry.jsx";
import UserEntry from "./UserEntry.jsx";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Admin(props) {
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/staff/allTickets")
      .then((response) => {
        console.log("working");
        let adminData = response.data;
        //console.log(adminData);
        setAdmin(adminData);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/staff/allStudents")
      .then((response) => {
        console.log("working");
        let userData = response.data;
        console.log(userData);
        setUsers(userData);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <ChakraProvider bg="white">
      <Box bg="white" />
      <Flex justifyContent="center">
        <Box borderWidth="1px" width="80vw" height="10vh" bg="#FF6B6B">
          <Text textAlign="center" fontSize="4xl">
            Chores
          </Text>
        </Box>
      </Flex>
      <Box className="ContainingBox" width="100vw">
        <Flex
          className="containingFlex"
          flexDirection="row"
          justifyContent="center"
        >
          {/* <Box
            className="testBox"
            borderWidth="1px"
            width="0vw"
            height="100px"
            margin="20px"
            bg="#74C1C4"
          >
            {/* <Text margin='10px' textDecoration='underline'>Type of Chore</Text> */}
          {/* </Box> */}
          <Box className="tableBox" maxW="60vw" margin="20px">
            <Text textAlign="center">Tickets</Text>
            <TableContainer display="block" maxWidth="100%">
              <Table variant="striped">
                <TableCaption>Student Ticket List</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Task Name</Th>
                    <Th>Status</Th>
                    <Th>Date</Th>
                    <Th>Completed</Th>
                    <Th>Approve</Th>
                    <Th>Mark Completed</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {admin.map((data) => {
                    return (
                      <AdminEntry
                        clientStatus={data.clientStatus}
                        complete={data.complete}
                        date={data.createdAt}
                        creatorId={data.creatorId}
                        description={data.description}
                        reacts={data.reacts}
                        staffId={data.staffId}
                        studentId={data.studentId}
                        id={data._id}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>

      <Box bg="white" />
      <Flex justifyContent="center"></Flex>
      <Box className="ContainingBox" width="100vw">
        <Flex
          className="containingFlex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box className="tableBox" maxW="60vw" margin="20px">
            <Text textAlign="center">Users</Text>
            <TableContainer display="block" maxWidth="100%">
              <Table variant="striped">
                <TableCaption>User Account List</TableCaption>
                <Thead>
                  <Tr>
                    <Th>User Name</Th>
                    <Th>Organization</Th>
                    <Th>Role</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((data) => {
                    return (
                      <UserEntry
                        firstName={data.firstName}
                        lastName={data.lastName}
                        organization={data.organization}
                        id={data._id}
                        role={data.role}
                        email={data.email}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
