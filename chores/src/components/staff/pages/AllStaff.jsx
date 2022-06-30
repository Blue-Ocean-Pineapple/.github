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

export default function AllStaff ({ staff }) {

  const activeStaff = () => {

  }

  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Active</Heading>
      <Table variant='striped'>
        <Thead className='activestaff'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Brian Bui</Th>
          <Th>bbBrian@gmail.com</Th>
          <Th isNumeric>53245</Th>
        </Tbody>
        <Tbody>
          <Th>Skipper Harris</Th>
          <Th>skippityskoop@gmail.com</Th>
          <Th isNumeric>45857</Th>
        </Tbody>
        {
          staff.map((person) => {
            if (person.active) {
              return (
                <Tbody>
                  <Th>{person.name}</Th>
                  <Th>{person.email}</Th>
                  <Th isNumeric>{person._id}</Th>
                </Tbody>
              )
            }
          })
        }
      </Table>

      <Heading as='h2' size='xl' mt={10} mb={5}>Inactive</Heading>
      <Table variant='striped'>
        <Thead className='inactivestaff'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Activate Staff</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Alexis Stone</Th>
          <Th>stonestonestone@gmail.com</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
          <Th isNumeric>39492</Th>
        </Tbody>
        <Tbody>
          <Th>Jin Peng</Th>
          <Th>jpjpjp@gmail.com</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
          <Th isNumeric>48395</Th>
        </Tbody>

        {
          staff.map((person) => {
            if (person.active) {
              return (
                <Tbody>
                  <Th>{person.name}</Th>
                  <Th>{person.email}</Th>
                  <Th>
                    <Button>Activate</Button>
                  </Th>
                  <Th isNumeric>{person._id}</Th>
                </Tbody>
              )
            }
          })
        }
      </Table>
    </TableContainer>
  )

}