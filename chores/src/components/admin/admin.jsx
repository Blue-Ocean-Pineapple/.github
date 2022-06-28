import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  Text
} from '@chakra-ui/react';

export default function Admin(props) {

  const [admin, setAdmin] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/staff/allTickets')
  //     .then(response =>{
  //       console.log('working')
  //       let adminData = response.data;
  //       //console.log(snacksData);
  //       setAdmin(adminData);
  //     })
  //     .catch(err => console.log('error', err));
  // }, [])

  return (
    <ChakraProvider bg='white'>
      <Box bg='white'/>
    <Flex justifyContent='center'>
    <Box borderWidth='1px' width='80vw' height='10vh' bg='#1C696F'>
      <Text textAlign='center' fontSize='4xl'>Chores</Text>
    </Box>
    </Flex>
    <Box className='ContainingBox' width='100vw'>
    <Flex className='containingFlex' flexDirection='row' justifyContent='center' >
    <Box className='testBox' borderWidth='1px' width='40vw' height='100px' margin='20px' bg='#74C1C4'>
     <Text margin='10px' textDecoration='underline'>Type of Chore</Text>
    </Box>
    <Box className='tableBox' maxW='60vw' margin='20px'>
    <Text textAlign='center'>Tickets</Text>
    <TableContainer display='block' maxWidth='100%'>
  <Table variant='striped'>
    <TableCaption>Student Ticket List</TableCaption>
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
    </Flex>
    </Box>
  </ChakraProvider>
  )
}