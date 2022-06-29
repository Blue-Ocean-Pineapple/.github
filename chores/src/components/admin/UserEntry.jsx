import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  Tr,
  Td,
  Button

} from '@chakra-ui/react';

export default function UserEntry(props) {

  const remove = () => {
    axios.delete(`http://localhost:3001/api/staff/updateTicketStatus`, )
    .then((response) => {

    })
    .catch((err) => console.log(err))
  }

  return (
  <ChakraProvider>
          <Tr>
          <Td>{props.firstName} {props.lastName}</Td>
          <Td>{props.organization}</Td>
          <Td>{props.role}</Td>
          <Td><Button>Delete User</Button></Td>

        </Tr>
  </ChakraProvider>
  )
}