import React, { useState, useEffect } from "react";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
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
  handleModalTicket,
}) {
  // is student Id in react array? true or false, will then make the button blue / gray
  // if student then clicks on it then it will choose to vote up or down
  const [vote, setVote] = useState(null);

  useEffect(() => {
    // /:id/ticket/:ticketId/
    axios
      .get(
        `http://localhost:3001/api/student/5/ticket/62bd36816285ab4e052a2381/hasVoted`
      )
      .then((data) => {
        console.log(data.data, "data in useEffect");
        if (data.data !== "") {
          setVote(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleVoteUp = () => {
    if (vote === true) {
      setVote(null);
      //axios remove
      removeUpVote();
    } else {
      setVote(true);
      // /api/student/ticket/voteUp
      axios
        .put(`http://localhost:3001/api/student/ticket/voteUp`, {
          studentId: 5,
          ticketId: "62bd36816285ab4e052a2381",
        })
        .then((results) => console.log(results))
        .catch((err) => console.log(err));
      removeDownVote();
      //axios put student id in array
      //also needs to check to remove from thumbs down array
    }
  };
  const handleVoteDown = () => {
    if (vote === false) {
      setVote(null);
      //axios remove
      removeDownVote();
    } else {
      setVote(false);
      //axios put student Id in array
      //also needs to check to remove from thumbs up array
      axios
        .put(`http://localhost:3001/api/student/ticket/voteDown`, {
          studentId: 5,
          ticketId: "62bd36816285ab4e052a2381",
        })
        .then((results) => console.log(results, "results in frontend down"))
        .catch((err) => console.log(err));
      removeUpVote();
    }
  };

  const removeDownVote = () => {
    axios
      .put(`http://localhost:3001/api/student/ticket/removeVoteDown`, {
        studentId: 5,
        ticketId: "62bd36816285ab4e052a2381",
      })
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
  };

  const removeUpVote = () => {
    axios
      .put(`http://localhost:3001/api/student/ticket/removeVoteUp`, {
        studentId: 5,
        ticketId: "62bd36816285ab4e052a2381",
      })
      .then((results) => console.log(results, "Up vote has been removed"))
      .catch((err) => console.log(err));
  };

  return (
    <Tr>
      <Td>
        <Button
          colorScheme="green"
          onClick={() => {
            handleModalTicket(ticket);
          }}
        >
          {ticket.taskName}
        </Button>
      </Td>
      <Td>{ticket.clientName}</Td>
      <Td>{ticket.address}</Td>
      <Td>{ticket.date}</Td>
      <Td>${ticket.wage} / hour</Td>
      <Td display="flex" justifyContent="space-around">
        <Button
          onClick={handleVoteUp}
          colorScheme={vote === true ? "blue" : "gray"}
        >
          <BsHandThumbsUp />
        </Button>
        <Button
          onClick={handleVoteDown}
          colorScheme={vote === false ? "red" : "gray"}
        >
          <BsHandThumbsDown />
        </Button>
      </Td>
    </Tr>
  );
}
//onClick={completeTicket}
