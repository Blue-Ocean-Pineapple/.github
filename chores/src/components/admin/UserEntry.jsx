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

  const remove = (user) => {
    let test = {email: user}
    console.log(test)
    axios.delete(`http://localhost:3001/api/admin/delete/`, {data: {email: user}})
    .then((response) => {
      console.log('deleted')
    })
    .catch((err) => console.log(err))
  }

  return (
  <ChakraProvider>
          <Tr>
          <Td>{props.firstName} {props.lastName}</Td>
          <Td>{props.organization}</Td>
          <Td>{props.role}</Td>
          <Td><Button onClick={() => remove(props.email)}>Delete User</Button></Td>

        </Tr>
  </ChakraProvider>
  )
}