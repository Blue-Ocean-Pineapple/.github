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
  Box,
} from "@chakra-ui/react";

export default function TicketModal({ ticket, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Info:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>Ticket: #{ticket._id}</Box>
            <Box padding="0.5rem">
              <Box display="flex" justifyContent="space-around">
                <Box fontSize="1.2rem">
                  <b>{ticket.taskName}</b>
                </Box>
                <Stat>
                  <StatNumber textAlign="right" color="green">
                    ${ticket.wage} / hour
                  </StatNumber>
                </Stat>
              </Box>
              <Box>
                <b>Owner of Ticket:</b> {ticket.clientName}
              </Box>

              <Box>
                <b>Status:</b> {ticket.clientStatus}
              </Box>
              <Box>
                <b>Description:</b> {ticket.description}
              </Box>
            </Box>
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
