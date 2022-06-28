import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

} from '@chakra-ui/react';

export default function Admin(props) {

  const [admin, setAdmin] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/staff')
  //     .then(response =>{
  //       let adminData = response.data;
  //       //console.log(snacksData);
  //       setAdmin(adminData);
  //     })
  //     .catch(err => console.log(err));
  // }, [])

  return (
    <ChakraProvider theme={theme}>
    <Box>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Task Name</Th>
        <Th>Owner of Ticket</Th>
        <Th>Location</Th>
        <Th>ID</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Water Lawn</Td>
        <Td>Bob</Td>
        <Td>Los Angeles</Td>
        <Td>5</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  </ChakraProvider>
  )
}