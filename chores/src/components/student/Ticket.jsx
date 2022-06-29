import React from "react";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { Tr, Td, Button } from "@chakra-ui/react";
// clientStatus: "approved"
// complete: false
// createdAt: "2022-06-29T16:10:01.741Z"
// creatorId: "9402"
// description: "I can't dance, and I want to learn. Someone teach me how to dance!"
// location: {coordinates: Array(0)}
// name: "Teach me how to dougie"
// reacts: []
// staffId: null
// studentId: "5"
// wage: 100
// __v: 0
// _id: "62bc7959527af4f7b97dac46"
export default function Ticket({
  ticket,
  voteDownTicket,
  voteUpTicket,
  completeTicket,
}) {
  // is student Id in react array? true or false, will then make the button blue / gray
  // if student then clicks on it then it will choose to vote up or down
  return (
    <Tr>
      <Td>{ticket.name}</Td>
      <Td>Brian Bui</Td>
      <Td>San Jose</Td>
      <Td>{ticket.date}</Td>
      <Td>{ticket.creatorId}</Td>
      <Td display="flex" justifyContent="space-around">
        <Button onClick={voteUpTicket} colorScheme="blue">
          <BsHandThumbsUp />
        </Button>
        <Button colorScheme="red">
          <BsHandThumbsDown />
        </Button>
      </Td>
    </Tr>
  );
}
//onClick={completeTicket}
