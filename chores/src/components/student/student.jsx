import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  theme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Student(props) {
  // useEffect axios call
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Task Name</Th>
                <Th>Owner of Ticket</Th>
                <Th>Location</Th>
                <Th>ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Water Lawn</Td>
                <Td>Brian</Td>
                <Td>San Jose</Td>
                <Td>2</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </ChakraProvider>
  );
}
