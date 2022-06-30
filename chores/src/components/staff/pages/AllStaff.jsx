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
import axios from 'axios';

export default function AllStaff ({ staff }) {

  const handleStaff = (e) => {
    // e.preventDefault();
    // console.log('howdy delete?', e.target.getAttribute("id"));
    let obj = staff.find(obj => obj._id === e.target.getAttribute("id"));
    // console.log('obj??', obj);
    axios.put('/staff/addStaffOrStudent', obj)
    .then((response) => {
      console.log('response data:', response);
    })
    .catch((err) => {
      console.log('submit err:', err);
    })
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
          <Tr>
            <Th>Brian Bui</Th>
            <Th>bbBrian@gmail.com</Th>
            <Th isNumeric>53245</Th>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Th>Skipper Harris</Th>
            <Th>skippityskoop@gmail.com</Th>
            <Th isNumeric>45857</Th>
          </Tr>
        </Tbody>
        {
          staff.map((person, i) => {
            if (person.active) {
              return (
                <Tbody key={i}>
                  <Tr variant='striped'>
                    <Th>{person.name}</Th>
                    <Th>{person.email}</Th>
                    <Th isNumeric>{person._id}</Th>
                  </Tr>
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
          <Tr variant='striped'>
            <Th>Alexis Stone</Th>
            <Th>stonestonestone@gmail.com</Th>
            <Th>
              <Button>Activate</Button>
            </Th>
            <Th isNumeric>39492</Th>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr variant='striped'>
            <Th>Jin Peng</Th>
            <Th>jpjpjp@gmail.com</Th>
            <Th>
              <Button>Activate</Button>
            </Th>
            <Th isNumeric>48395</Th>
          </Tr>
        </Tbody>

        {
          staff.map((person, i) => {
            if (person.active === false) {
              return (
                <Tbody  key={i}>
                  <Tr variant='striped'>
                    <Th>{person.name}</Th>
                    <Th>{person.email}</Th>
                    <Th>
                      <Button className="activatebutton" id={person._id} onClick={(e) => handleStaff(e)}>Activate</Button>
                    </Th>
                    <Th isNumeric>{person._id}</Th>
                  </Tr>
                </Tbody>
              )
            }
          })
        }
      </Table>
    </TableContainer>
  )

}