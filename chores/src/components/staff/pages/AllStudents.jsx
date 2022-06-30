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
console.log('howdy')

  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Active</Heading>
      <Table variant='striped'>
        <Thead className='activestudent'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Deactivate</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Esther Kuang</Th>
          <Th>estar@gmail.com</Th>
          <Th>
            <Button>Select</Button>
          </Th>
          <Th isNumeric>22393</Th>
        </Tbody>
        <Tbody>
          <Th>Hansol Ji</Th>
          <Th>kimchi@gmail.com</Th>
          <Th>
            <Button>Select</Button>
          </Th>
          <Th isNumeric>38495</Th>
        </Tbody>
        {
          students.map((person) => {
            if (person.active) {
              return (
                <Tbody>
                  <Th>{person.name}</Th>
                  <Th>{person.email}</Th>
                  <Th>
                    <Button>Select</Button>
                  </Th>
                  <Th isNumeric>{person._id}</Th>
                </Tbody>
              )
            }
          })
        }
      </Table>

      <Heading as='h2' size='xl' mt={10} mb={5}>Inactive</Heading>
      <Table variant='striped'>
        <Thead className='inactivestudent'>
          <Tr variant='striped'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Activate</Th>
            <Th isNumeric>ID</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Th>Spencer Han</Th>
          <Th>lesson9@gmail.com</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
          <Th isNumeric>29394</Th>
        </Tbody>
        <Tbody>
          <Th>Fan Zhang</Th>
          <Th>fanfan@gmail.com</Th>
          <Th>
            <Button>Activate</Button>
          </Th>
          <Th isNumeric>48573</Th>
        </Tbody>
        {
          students.map((person) => {
            if (!person.active) {
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
// db.users.insertOne({
//   uid: "3RzRikHOkAZhsib4tje4USZliswe",
//   name: "howdy",
//   email: "testing@test.com",
//   age: 223,
//   address: "123344 sesame street",
//   city: "sesame city",
//   state: "sesame",
//   phone: "1234567891",
//   role: "student",
//   organization: "sesameeeee",
//   active: "true"
// });