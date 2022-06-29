import React from "react";
import { Tr, Th } from "@chakra-ui/react";

export default function StudentTicket(props) {
  return (
    <Tr>
      <Th>Task Name</Th>
      <Th>Owner of Ticket</Th>
      <Th>Location</Th>
      <Th>ID</Th>
    </Tr>
  );
}
