import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import axios from 'axios';
import AssignStaffForm from './AssignStaffForm';
import AssignStudentForm from './AssignStudentForm';
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
  Box,
} from '@chakra-ui/react'
import { Select } from "chakra-react-select";

export default function AllTickets ({ openTickets, closedTickets, students, staff, isChange, setChange, currStatus, setStatus }) {
  // const [input, setInput] = useState('')
  const [staffOrder, setStaffOrder] = useState([])
  const [studentOrder, setStudentOrder] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [studentVal, setStudentVal] = useState([]);
  const [selected, setSelected] = useState([]);

  const studentFormat = () => {
    let order = [];
    students.map((person) => {
      order.push({value: person.uid, _id: person._id, staffId: person.value, label: person.name})
    })
    setStudentOrder(order);
  }

  const staffFormat = () => {
    let order = [];
    staff.map((person) => {
      order.push({value: person.uid, id: person._id, label: person.name})
    })
    setStaffOrder(order);
  }
  // const getStudentName = async (info) => {
  //   // let val = [];
  //   // for (let i = 0; i < info.length; i++) {
  //   //   const data = await axios.get('/api/staff/studentName', {params: {studentId: info[i]}} );
  //   //   val.push(data);
  //   // }
  //   let val = info
  //   return val.join(', ');
  // }

  // const getStaffName = async (info) => {
  //   let val = null;
  //   // const data = await axios.get('/api/staff/staffName', {params: {staffId: info}} );
  //   // val = data;
  //   val = info;
  //   return val
  // }

  useEffect(() => {
    studentFormat();
    staffFormat();
  }, [students, staff, isChange]);

  const handleStatus = (e) => {
    axios.put('/staff/updateStatus', e)
      .then((response) => {
        console.log('tick update response data:', response);
      })
      .catch((err) => {
        console.log('submit err:', err);
      })
      setStatus(e.value);
    }

  const handleReopenTicket = (e) => {
    e.preventDefault();
    let obj = closedTickets.find(obj => obj._id === e.target.getAttribute("id"));
    axios.put('/staff/updateReopenTicket', obj)
    .then((response) => {
      console.log('response data:', response);
    })
    .catch((err) => {
      console.log('submit err:', err);
    })
  }


  return (
    <Box bg="#8CC0DE" mt={10} mx="auto"  border="1px solid" borderColor='#8CC0DE' width="90vw" borderRadius="10">
      <TableContainer width="80vw" mx="auto">
        <Heading as='h2' size='xl' mt={10} mb={10}>Open Tickets</Heading>
        <Table variant='striped' >
          <Thead className='opentickets'>
            <Tr variant='striped'>
              <Th>Ticket ID</Th>
              <Th>Task</Th>
              <Th>Customer</Th>
              <Th>Created At</Th>
              <Th>Location</Th>
              <Th>Assigned Staff</Th>
              <Th>Assigned Students</Th>
              <Th>Favorited By</Th>
              <Th>Status</Th>
              <Th>Change Status</Th>
              <Th>Assign Staff</Th>
              <Th>Assign Student</Th>
            </Tr>
          </Thead>
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
                      <Th>{currentTicket.staffId}</Th>
                      <Th>{currentTicket.studentId.join(', ')}</Th>
                      <Th>{currentTicket.reacts}</Th>
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
                        <AssignStaffForm ticket={currentTicket} staffOrder={staffOrder} isChange={isChange} setChange={setChange} />
                        </Th>
                        <Th>
                        <AssignStudentForm ticket={currentTicket} studentOrder={studentOrder} isChange={isChange} setChange={setChange} />
                      </Th>
                    </Tr>
                </Tbody>
                )
              })
            }
        </Table>

        <Heading as='h2' size='xl' mt={100} mb={5}>Closed Tickets</Heading>
        <Table variant='striped'>
          <Thead className='tickets'>
            <Tr variant='striped'>
              <Th>Ticket ID</Th>
              <Th>Customer</Th>
              <Th>Assigned Staff</Th>
              <Th>Assigned Students</Th>
              <Th>Reopen Ticket</Th>
            </Tr>
          </Thead>
            {
              closedTickets.map((currentTicket, i) => {
                return (
                  <Tbody key={i}>
                    <Tr variant='striped'>
                      <Th>{currentTicket._id}</Th>
                      <Th>{currentTicket.clientName}</Th>
                      <Th>{currentTicket.staffId}</Th>
                      <Th>{currentTicket.studentId.join(', ')}</Th>
                      <Th>
                        <Button _hover={{ bg: "#9CB4CC" }} id={currentTicket._id} onClick={(e) => handleReopenTicket(e)}>Open</Button>
                      </Th>
                    </Tr>
                  </Tbody>
                )
              })
            }

        </Table>
      </TableContainer>
    </Box>
  )
}
