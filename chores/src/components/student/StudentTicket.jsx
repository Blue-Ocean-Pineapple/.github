import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { Tr, Td } from "@chakra-ui/react";
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
export default function StudentTicket({
  ticket,
  voteDownTicket,
  voteUpTicket,
}) {
  return (
    <Tr>
      <Td>{ticket.name}</Td>
      <Td>Brian Bui</Td>
      <Td>San Jose</Td>
      <Td>{ticket.date}</Td>
      <Td>{ticket.creatorId}</Td>
    </Tr>
  );
}
