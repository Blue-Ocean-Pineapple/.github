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

//  {
//   "name": "Dog Walk",
//   "wage": 15,
//   "description": "I want you to walk my dog, he is big and red and named Clifford",
//   "clientStatus": "complete",
//   "complete": true,
//   "creatorId": 23,
//   "studentId": 5
//  },
//  {
//   "name": "Washing Dishes",
//   "wage": 20,
//   "description": "I want you to wash my dishes, they've been piling up!!",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 23,
//   "studentId": 5
//  },
//  {
//   "name": "Cat sitting",
//   "wage": 20,
//   "description": "My cat, Salem, needs to be sat.",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 90,
//   "studentId": 5
//  },
//  {
//   "name": "Sweeping the floors",
//   "wage": 10,
//   "description": "Our floor is dirty, you need to sweep it or its just going to get worse!",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 2031,
//   "studentId": 5
//  },
//  {
//   "name": "Washing my dog",
//   "wage": 50,
//   "description": "He is a smelly old dog and needs-a-washing.",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 3421,
//   "studentId": 5
//  },
//  {
//   "name": "Teach me how to dougie",
//   "wage": 100,
//   "description": "I can't dance, and I want to learn. Someone teach me how to dance!",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 9402,
//   "studentId": 5
//  },
//  {
//   "name": "Raking the leaves",
//   "wage": 50,
//   "description": "Need you to rake the leaves in my yard. I can't even see the drive way floor anymore",
//   "clientStatus": "approved",
//   "complete": false,
//   "creatorId": 43221,
//   "studentId": 5
//  },
//  {
//   "name": "Baby Sitting",
//   "wage": 25,
//   "description": "Please I need help baby sitting 9 of my kids",
//   "clientStatus": "in-progress",
//   "complete": false,
//   "creatorId": 25,
//   "studentId": 5
//  },
//  {
//   "name": "Baby Sitting",
//   "wage": 25,
//   "description": "Please I need help baby sitting 20 of my kids",
//   "clientStatus": "complete",
//   "complete": true,
//   "creatorId": 5921,
//   "studentId": 5
//  },
//  {
//   "name": "Video Games",
//   "wage": 25,
//   "description": "Teach me how to play video games",
//   "clientStatus": "complete",
//   "complete": true,
//   "creatorId": 23912,
//   "studentId": 5
//  }
