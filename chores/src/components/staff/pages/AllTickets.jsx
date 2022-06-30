import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import axios from 'axios';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Container,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react'
import { Select } from "chakra-react-select";

export default function AllTickets ({ openTickets, closedTickets, students, staff }) {
  // const [input, setInput] = useState('')
  // const [openTickets, setOpenTickets] = useState([])
  // const [closedTickets, setClosedTickets] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();

  // {value: 'brian', label: "Brian Bui"},
  const studentOrder = () => {
    
  }

  const assignTicket = () => {
    console.log('students', students)
    console.log('staff', staff)
    console.log('opentickets', openTickets);
    console.log('closedtickets', closedTickets);
    onClose();
  }

  // const isError = input === ''

  const handleStatus = (e) => {
    // e.preventDefault();
    console.log('howdy status', e);
    console.log('howdy id?', e.id);

    axios.put('/staff/updateTicketStatus', e)
      .then((response) => {
        console.log('tick update response data:', response);
      })
      .catch((err) => {
        console.log('submit err:', err);
      })
  }

  const handleReopenTicket = (e) => {
    e.preventDefault();
    // console.log('howdy delete?', e.target.getAttribute("id"));
    let obj = closedTickets.find(obj => obj._id === e.target.getAttribute("id"));
    console.log('obj??', obj._id);
    axios.put('/staff/updateReopenTicket', obj)
    .then((response) => {
      console.log('response data:', response);
    })
    .catch((err) => {
      console.log('submit err:', err);
    })
  }

  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Open Tickets</Heading>
      <Table variant='striped'>
        <Thead className='opentickets'>
          <Tr variant='striped'>
            <Th>Ticket ID</Th>
            <Th>Task</Th>
            <Th>Customer</Th>
            <Th>Created At</Th>
            <Th>Location</Th>
            <Th>Status</Th>
            <Th>Change Status</Th>
            <Th>Assign</Th>
          </Tr>
        </Thead>

        <Tbody>
        <Tr variant='striped'>
          <Th>1</Th>
          <Th>Async Await</Th>
          <Th>John Ong</Th>
          <Th>06/29/2022</Th>
          <Th>Man Jose</Th>
          <Th>In Progress</Th>
          <Th>
            <FormControl isRequired>
              <Select
                options={[
                  {
                    label: "status",
                    options: [
                      {value: 'awaiting', label: "awaiting"},
                      {value: 'approved', label: "approved"},
                      {value: 'in-progress', label: "in-progress"},
                      {value: 'complete', label: "complete"}
                    ]
                  }
                ]}
                placeholder="--"
              />
            </FormControl>
          </Th>
          <Th>
            <Button onClick={onOpen}>Assign</Button>
          </Th>
          </Tr>
        </Tbody>
          {
            openTickets.map((currentTicket, i) => {
              return (
                <Tbody key={i}>
                  <Tr variant='striped'>
                    <Th>{currentTicket._id}</Th>
                    <Th>{currentTicket.taskName}</Th>
                    <Th>{currentTicket.clientName}</Th>
                    <Th>{Moment(currentTicket.createdAt).format('MM-DD-YYYY')}</Th>
                    <Th>{currentTicket.address}</Th>
                    <Th>{currentTicket.clientStatus}</Th>
                    <Th>
                      <FormControl isRequired>
                        <Select
                          onChange={(e) => handleStatus(e)}
                          options={[
                            {
                              label: "status",
                              options: [
                                {value: 'awaiting', label: "awaiting", id: currentTicket._id},
                                {value: 'approved', label: "approved", id: currentTicket._id},
                                {value: 'in-progress', label: "in-progress", id: currentTicket._id},
                                {value: 'complete', label: "complete", id: currentTicket._id}
                              ]
                            }
                          ]}
                          placeholder="--"
                        />
                      </FormControl>
                    </Th>
                    <Th>
                      <Button onClick={onOpen}>Assign</Button>
                    </Th>
                  </Tr>
              </Tbody>
              )
            })
          }
      </Table>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Assign:</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Container mb={16}>
                  <FormControl mb={4} isRequired>
                    <FormLabel>
                      Staff
                    </FormLabel>
                    <Select
                      name="staff"
                      options={[
                        {
                          label: "Staff",
                          options: [
                            {value: 'brian', label: "Brian Bui"},
                            {value: 'skip', label: "Skipper Harris"}
                          ]
                        }
                      ]}
                      placeholder="Select student"
                    />
                    {/* {!isError ? (
                      <FormHelperText>
                        Select staff.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Staff is required.</FormErrorMessage>
                    )} */}
                  </FormControl>

                  <FormControl mb={4} isRequired>
                    <FormLabel>
                      Student
                    </FormLabel>
                    <Select
                      isMulti
                      name="students"
                      options={[
                        {
                          label: "Students",
                          options: [
                            {value: 'estar', label: "Esther Kuang"},
                            {value: 'kimchi', label: "Hansol Ji"}
                          ]
                        },
                      ]}
                      placeholder="Select student"
                      closeMenuOnSelect={false}
                    >
                    </Select>
                  </FormControl>
                </Container>
              </ModalBody>

              <ModalFooter>
                <Button variant='ghost' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={assignTicket}>Submit</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>


      <Heading as='h2' size='xl' mt={100} mb={5}>Closed Tickets</Heading>
      <Table variant='striped'>
        <Thead className='tickets'>
          <Tr variant='striped'>
            <Th>Ticket ID</Th>
            <Th>Customer</Th>
            {/* <Th>Completed On</Th> */}
            <Th>Assigned Staff</Th>
            <Th>Assigned Students</Th>
            <Th>Reopen Ticket</Th>
          </Tr>
        </Thead>
          {/* <Th>3</Th>
          <Th>Peggy Potatoes</Th>
          <Th>06/24/2022</Th>
          <Th>Barry Cheung</Th>
          <Th>Jessica Yu, Leia Harlow</Th> */}
          {
            closedTickets.map((currentTicket, i) => {
              return (
                <Tbody key={i}>
                  <Tr variant='striped'>
                    <Th>{currentTicket._id}</Th>
                    <Th>{currentTicket.clientName}</Th>
                    <Th>{currentTicket.staffId}</Th>
                    <Th>{currentTicket.studentId}</Th>
                    <Th>
                      <Button id={currentTicket._id} onClick={(e) => handleReopenTicket(e)}>Open</Button>
                    </Th>
                  </Tr>
                </Tbody>
              )
            })
          }

      </Table>
    </TableContainer>
  )
}


// db.tickets.insertOne({ uid: "3RzRikHOkAZhsib4tje4USZs9d93", name: "wow", email: "acoolguy@test.com", age: 22, address: "555 cool street", city: "vegas wooo", state: "vegas", phone: "394857283", role: "Staff", organization: "sesameeeee", active: "false"});

// {
//   "coordinates": {
//       "lat": 34.041451,
//       "lng": -118.232719
//   },
//   _id: "3RzRikHOkAZhsib4tje4USZs9d93",
//   clientName: "wow",
//   taskName: "lawn mow",
//   description: "mow mow",
//   address: "500 Mateo St, Los Angeles, CA 90013",
//   clientStatus: "complete",
//   creatorId: "4",
//   reacts: [],
//   studentId: null,
//   staffId: null,
//   complete: true,
//   createdAt: "2022-06-29T22:46:54.041Z",
//   __v: 0
// }