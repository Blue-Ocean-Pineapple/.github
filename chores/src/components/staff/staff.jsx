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
    axios.get('/api/staff/allTickets')
      .then((res) => {
        console.log('get my plants? res?', res.data)

        setTickets(res.data);
      })
      .catch((err) => {
        console.log('err!!', err)
      })
  }




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

        <Thead className='staff'>
          <Tr variant='striped'>
            <Th >To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>

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