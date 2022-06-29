import React from 'react';
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
  Heading
} from '@chakra-ui/react'

export default function AllStaff ({ staff }) {

  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Active</Heading>
      <Table variant='striped'>
        <Thead className='activestaff'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Brian Bui</Th>
          <Th isNumeric>53245</Th>
        </Tbody>
        <Tbody>
          <Th>Skipper Harris</Th>
          <Th isNumeric>45857</Th>
        </Tbody>
      </Table>

      <Heading as='h2' size='xl' mt={10} mb={5}>Inactive</Heading>
      <Table variant='striped'>
        <Thead className='inactivestaff'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Alexis Stone</Th>
          <Th isNumeric>39492</Th>
        </Tbody>
        <Tbody>
          <Th>Jin Peng</Th>
          <Th isNumeric>48395</Th>
        </Tbody>
      </Table>
    </TableContainer>
  )

}