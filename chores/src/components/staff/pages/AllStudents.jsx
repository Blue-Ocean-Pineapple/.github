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
  Heading,
  Button
} from '@chakra-ui/react'

export default function AllStudents ({ students }) {


  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Active</Heading>
      <Table variant='striped'>
        <Thead className='activestudent'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Esther Kuang</Th>
          <Th isNumeric>22393</Th>
        </Tbody>
        <Tbody>
          <Th>Hansol Ji</Th>
          <Th isNumeric>38495</Th>
        </Tbody>
      </Table>

      <Heading as='h2' size='xl' mt={10} mb={5}>Inactive</Heading>
      <Table variant='striped'>
        <Thead className='inactivestudent'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th isNumeric>ID</Th>
            <Th>Activate</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Spencer Han</Th>
          <Th isNumeric>29394</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
        </Tbody>
        <Tbody>
          <Th>Fan Zhang</Th>
          <Th isNumeric>48573</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
        </Tbody>
      </Table>
    </TableContainer>
  )
}