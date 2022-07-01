import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
} from '@chakra-ui/react';

function Ticket() {
  const [toggle, setToggle] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showForm, toggleForm] = useState(false);

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

  function handleChange(ticketDescription, ticketId, ticketLocation, updatedDescription, updatedLocation) {
    axios.put(`http://localhost:3001/api/clients/update`, {
      _id: ticketId,
      description: ticketDescription,
      location: ticketLocation,
      updatedDescription: updatedDescription,
      updatedLocation: updatedLocation,
    })
    .then(()=> {
      alert('Change successful');
      window.location.reload(false);
    })
    .catch((error) => {
      alert(error);
    });
  };

  function handleDelete(ticketId) {
    axios.delete(`http://localhost:3001/api/clients/delete`, { data: {
      _id: ticketId,
    } })
    .then(()=> {
      alert('Delete successful');
      window.location.reload(false);
    })
    .catch((error) => {
      alert(error);
    });
  };

  return (
    <div>
      {toggle === false ? (
      <Box bg="#6BCB77" m={5} mx="auto"  border="1px solid" borderColor='#6BCB77' width="90vw" borderRadius="10">
        <TableContainer>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>description</Th>
                <Th>location</Th>
                <Th>status</Th>
                <Th>modify</Th>
                <Th>delete</Th>
              </Tr>
            </Thead>
            <Tbody>
            {tickets.map((ticket, index) => (
              <Tr>
                <Td>{index+1}</Td>
                <Td>{ticket.taskName}</Td>
                <Td>{ticket.description}</Td>
                <Td>{ticket.address}</Td>
                <Td>{ticket.clientStatus}</Td>
                <Td>
                  <Button colorScheme='blue' onClick={
                    () => {
                    let updatedDefinition = prompt('Enter new definition')
                    let updatedLocation = prompt('Enter new location')
                    handleChange(ticket.description, ticket._id, ticket.address, updatedDefinition, updatedLocation);
                    }
                    }>Modify</Button>
                </Td>
                <Td>
                  <Button colorScheme='blue' onClick={() => {
                    handleDelete(ticket._id);
                    }}>Delete</Button>
                </Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      ) : null
      }
      </div>

  );
}

export default Ticket;
