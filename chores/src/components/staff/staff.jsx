// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios';

export default function Staff () {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const getAllTickets = () => {
    console.log('hello')
    axios.get('/staff/allTickets')
      .then((res) => {
        console.log('all tickets res?', res)
        setTickets(res);
      })
      .catch((err) => {console.log('err!!', err)})
  }

  const getAllStudents = () => {
    console.log('hello')
    axios.get('/staff/allStudents')
      .then((res) => {
        console.log('all students res?', res)
        setTickets(res);
      })
      .catch((err) => {console.log('err!!', err)})
  }

  useEffect(() => {
    getAllTickets();
    getAllStudents();
  }, [])




  return (


    <TableContainer>
      <Table variant='striped'>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead className='tickets'>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>
      </Table>

      <Table variant='striped'>
        <Thead className='staff'>
          <Tr variant='striped'>
            <Th >To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>
      </Table>

      <Table variant='striped'>
        <Thead className='student'>
          <Tr variant='striped'>
            <Th >To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>
      </Table>
    </TableContainer>

  )
}