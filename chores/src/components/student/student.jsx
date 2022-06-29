import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsHandThumbsUp, BsHandThumbsDown, BsCheckLg } from "react-icons/bs";

import {
  ChakraProvider,
  Box,
  theme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

export default function Student(props) {
  // useEffect axios call
  const [studentTicket, setStudentTicket] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/student/:id/ticket/open')
  //     .then((results) => {})
  // }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box boxShadow="base" maxWidth="70%" m="auto">
        <TableContainer>
          <Table variant="simple" size="sm">
            <TableCaption placement="top">Student's Tickets</TableCaption>
            <Thead>
              <Tr>
                <Th>Task Name</Th>
                <Th>Owner of Ticket</Th>
                <Th>Location</Th>
                <Th>ID</Th>
                <Th>Vote</Th>
                <Th>Mark Complete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian</Td>
                <Td>San Jose</Td>
                <Td>2</Td>
                <Td>
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>{" "}
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Task Number 2</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose What if this was longer</Td>
                <Td>2</Td>
                <Td>
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>{" "}
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </ChakraProvider>
  );
}
