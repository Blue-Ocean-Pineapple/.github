import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { BsHandThumbsUp, BsHandThumbsDown, BsCheckLg } from "react-icons/bs";

export default function ClosedStudentTicket({
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
      <Td>${ticket.wage} / hour</Td>
      <Td textAlign="center">
        <Button colorScheme="green">
          <BsCheckLg />
        </Button>
      </Td>
    </Tr>
  );
}
