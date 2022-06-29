import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { ChakraProvider, Box, Tr, Td, Button } from "@chakra-ui/react";

export default function AdminEntry(props) {
  const [approval, setApproval] = useState("awaiting");
  const [tickets, setTickets] = useState([]);
  const [index, setIndex] = useState(1);

  const bool = () => {
    if (props.complete) {
      return "Yes";
    } else {
      return "No";
    }
  };

  let btnIndex = 1;

  let buttonStatus = ["awaiting", "approved", "in-progress", "complete"];

  const status = (e) => {
    console.log(e.target.value);
    axios
      .put(`http://localhost:3001/api/staff/updateTicketStatus`, {
        clientStatus: e.target.value,
      })
      .then((response) => {
        console.log("hi");
        setIndex((btnIndex += 1));
        setApproval(e.target.value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
      <Tr>
        <Td>{props.description}</Td>
        <Td>{props.studentId}</Td>
        <Td>{approval}</Td>
        <Td>{moment(props.date).format("MMM Do, YYYY")}</Td>
        <Td>{bool()}</Td>
        <Td>
          <Button value={buttonStatus[index]} onClick={(e) => status(e)}>
            {buttonStatus[index]}
          </Button>
        </Td>
      </Tr>
    </ChakraProvider>
  );
}
