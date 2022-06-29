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
      <Box
        overflowY="auto"
        maxH="500px"
        boxShadow="base"
        maxWidth="70%"
        m="auto"
      >
        <TableContainer maxH="60%" overflowY="scroll">
          <Table variant="simple" size="sm">
            <TableCaption placement="top">Student's Tickets</TableCaption>
            <Thead>
              <Tr>
                <Th>Task Name</Th>
                <Th>Owner of Ticket</Th>
                <Th>Location</Th>
                <Th>Time</Th>
                <Th>ID</Th>
                <Th textAlign="center">Vote</Th>
                <Th textAlign="center">Mark Complete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Finding My Cat</Td>
                <Td>Christy Lopez</Td>
                <Td>San Jose</Td>
                <Td>6/29 at 4:15 PM</Td>
                <Td>2313</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
                  <Button colorScheme="green">
                    <BsCheckLg />
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Mowing the Lawn</Td>
                <Td>Brian Bui</Td>
                <Td>San Jose</Td>
                <Td>6/28 at 6:00 PM</Td>
                <Td>8347</Td>
                <Td display="flex" justifyContent="space-around">
                  <Button colorScheme="blue">
                    <BsHandThumbsUp />
                  </Button>
                  <Button colorScheme="red">
                    <BsHandThumbsDown />
                  </Button>
                </Td>
                <Td textAlign="center">
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
