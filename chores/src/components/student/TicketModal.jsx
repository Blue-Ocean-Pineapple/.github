import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  StatNumber,
  Stat,
} from "@chakra-ui/react";

export default function TicketModal({ ticket, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ticket: #{ticket._id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>More Info:</h2>
            <p>{ticket.taskName}</p>
            <p>
              <b>Owner of Ticket:</b> {ticket.clientName}
            </p>
            <Stat>
              <StatNumber color="green">${ticket.wage} / hour</StatNumber>
            </Stat>
            <p>Date: {ticket.date}</p>
            <p>Status: {ticket.clientStatus}</p>
            <p>Description: {ticket.description}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// {
//   "clientName": "Markie Thomas",
//   "taskName": "Baby Sitting",
//   "address": "55 Fake Street",
//   "wage": 25,
//   "description": "Please I need help baby sitting 20 of my kids",
//   "clientStatus": "complete",
//   "complete": true,
//   "creatorId": 5921,
//   "studentId": 5,
//   "coordinates": {"lat":34.048859,"lng":-118.251343}
//  },
