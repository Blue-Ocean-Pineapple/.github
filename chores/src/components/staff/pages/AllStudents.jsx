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
} from '@chakra-ui/react'

export default function AllStudents ({ students }) {


  return (
    <TableContainer>
      <Table variant='striped'>
        <Thead className='student'>
          <Tr variant='striped'>
            <Th >Name</Th>
            <Th></Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>
      </Table>
    </TableContainer>
  )
}