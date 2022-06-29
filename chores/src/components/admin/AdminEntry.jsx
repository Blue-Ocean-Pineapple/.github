import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  ChakraProvider,
  Box,
  Tr,
  Td,
  Button

} from '@chakra-ui/react';

export default function AdminEntry(props) {

 // const [completed, setCompleted] = useState('')

  const bool = () => {
    if (props.complete) {
      return 'Yes'
    } else {
      return 'No'
    }
  }

  return (
  <ChakraProvider>
          <Tr>
          <Td>{props.description}</Td>
          <Td>{props.studentId}</Td>
          <Td>{props.clientStatus}</Td>
          <Td>{moment(props.date).format("MMM Do, YYYY")}</Td>
          <Td>{bool()}</Td>
          <Td><Button>Approve Task</Button></Td>

        </Tr>
  </ChakraProvider>
  )
}
