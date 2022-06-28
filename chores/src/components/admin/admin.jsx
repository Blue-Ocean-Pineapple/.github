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
  Flex,
  Text

} from '@chakra-ui/react';

export default function Admin(props) {

  const [admin, setAdmin] = useState([]);

  return (
    <ChakraProvider theme={theme}>
    <Flex justifyContent='center'>
    <Box  borderWidth='1px' width='80vw' height='10vh'>
      <Text textAlign='center'>Chores</Text>
    </Box>
    </Flex>
    <Box className='ContainingBox' width='100vw'>
    <Flex className='containingFlex' flexDirection='row' justifyContent='center' >
    <Box className='testBox' borderWidth='1px' width='40vw' height='100px' margin='20px'>
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