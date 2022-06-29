import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Tr,
  Td,
  Button

} from '@chakra-ui/react';

export default function UserEntry(props) {

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