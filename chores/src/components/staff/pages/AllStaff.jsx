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

export default function AllStaff ({ staff }) {

  return (
    <TableContainer>
      <Table variant='striped'>
        <Thead className='tickets'>
          <Tr variant='striped'>
            <Th >To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
        </Tbody>
      </Table>
    </TableContainer>
  )

}