import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  Button,
} from '@chakra-ui/react';

function Ticket() {
  const [toggle, setToggle] = useState(false);
  const [openCompareModal, setModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [completed, setCompleted] = useState([]);


  const onLoad = ()=> {
    axios.get(`http://localhost:3001/api/clients/tickets`)
      .then((data)=> {
        console.log(data.data)
        setTickets(data.data);
      })
      .catch((error) => {
        alert(error);
      });

      axios.get(`http://localhost:3001/api/clients/done`)
      .then((data)=> {
        console.log(data.data)
        setCompleted(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(onLoad, []);

  function handleToggleTrue() {
    setToggle(true);
  };

  function handleToggleFalse() {
    setToggle(false);
  };

  return (
    <div>
      {toggle === false ? (
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>description</Th>
              <Th>location</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
          {tickets.map((ticket, index) => (
            <Tr>
              <Td>{index+1}</Td>
              <Td>{ticket.name}</Td>
              <Td>{ticket.description}</Td>
              <Td>{ticket.location}</Td>
              <Td>{ticket.clientStatus}</Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
        <Button colorScheme='blue' onClick={handleToggleTrue}>Show Completed</Button>
      </TableContainer>

      ) :
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>description</Th>
              <Th>location</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
          {completed.map((complete, index) => (
            <Tr>
              <Td>{index+1}</Td>
              <Td>{complete.name}</Td>
              <Td>{complete.description}</Td>
              <Td>{complete.location}</Td>
              <Td>{complete.clientStatus}</Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
        <Button colorScheme='blue' onClick={handleToggleFalse}>Show In Progress</Button>
      </TableContainer>
      }
      </div>

  );
}

export default Ticket;
