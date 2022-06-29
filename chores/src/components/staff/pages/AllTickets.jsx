import React from 'react';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Container
} from '@chakra-ui/react'
import { Select } from "chakra-react-select";

export default function AllTickets ({ tickets }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const assignTicket = () => {
    console.log('howdy')
  }

  return (
    <TableContainer>
      <Heading as='h2' size='xl' mt={10} mb={5}>Open Tickets</Heading>
      <Table variant='striped'>
        <Thead className='opentickets'>
          <Tr variant='striped'>
            <Th>Ticket No.</Th>
            <Th>Task</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Assign</Th>
            {/* <Th isNumeric>multiply by</Th> */}

          </Tr>
        </Thead>
        <Tbody>
          <Th>1</Th>
          <Th>Async Await</Th>
          <Th>John Ong</Th>
          <Th>In Progress</Th>
          <Th>
            <Button onClick={onOpen}>Assign</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Assign:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Container mb={16}>
                    <FormControl mb={4} isRequired>
                      <FormLabel>
                        Staff
                      </FormLabel>
                      <Select
                        name="staff"
                        options={[
                          {
                            label: "Students",
                            options: [
                              {value: 'brian', label: "Brian Bui"},
                              {value: 'skip', label: "Skipper Harris"}
                            ]
                          }
                        ]}
                        placeholder="Select some colors..."
                      />
                    </FormControl>

                    <FormControl mb={4} isRequired>
                      <FormLabel>
                        Student
                      </FormLabel>
                      <Select
                        // selectedOptionColor="#F8E4C3"
                        isMulti
                        name="students"
                        options={[
                          {
                            label: "Students",
                            options: [
                              {value: 'estar', label: "Esther Kuang"},
                              {value: 'kimchi', label: "Hansol Ji"}
                            ]
                          },
                        ]}
                        placeholder="Select student"
                        closeMenuOnSelect={false}
                      >
                      </Select>
                    </FormControl>
                  </Container>
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue' onClick={assignTicket}>Submit</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Th>
        </Tbody>
      </Table>

      <Heading as='h2' size='xl' mt={100} mb={5}>Closed Tickets</Heading>
      <Table variant='striped'>
        <Thead className='tickets'>
          <Tr variant='striped'>
            <Th>Ticket No.</Th>
            <Th>Customer</Th>
            <Th>Completed On</Th>
            <Th>Assigned Staff</Th>
            <Th>Assigned Students</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Th>3</Th>
          <Th>Peggy Potatoes</Th>
          <Th>06/24/2022</Th>
          <Th>Barry Cheung</Th>
          <Th>Jessica Yu, Leia Harlow</Th>

        </Tbody>
      </Table>
    </TableContainer>
  )
}


// for form formatting
  // {
  //   label: "Colors",
  //   options: [
  //   { value: "blue", label: "Blue", color: "#0052CC" },
  //   { value: "purple", label: "Purple", color: "#5243AA" },
  //   { value: "red", label: "Red", color: "#FF5630" },
  //   { value: "orange", label: "Orange", color: "#FF8B00" },
  //   { value: "yellow", label: "Yellow", color: "#FFC400" },
  //   { value: "green", label: "Green", color: "#36B37E" }
  // ]
  // },
  // {
  //   label: "Flavors",
  //   options: [
  //     { value: "vanilla", label: "Vanilla", rating: "safe" },
  //     { value: "chocolate", label: "Chocolate", rating: "good" },
  //     { value: "strawberry", label: "Strawberry", rating: "wild" },
  //     { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" }
  //   ]
  // }

// for assign button
  // <>
  //   <Button onClick={onOpen}>Assign</Button>

  //   <Modal isOpen={isOpen} onClose={onClose}>
  //     <ModalOverlay />
  //     <ModalContent>
  //       <ModalHeader>Assign:</ModalHeader>
  //       <ModalCloseButton />
  //       <ModalBody>
  //         <Container mb={16}>
  //           <FormControl mb={4}>
  //             <FormLabel>
  //               Staff
  //             </FormLabel>
  //             <Select
  //               name="staff"
  //               options={[
  //                 {
  //                   label: "Students",
  //                   options: [
  //                     {value: 'staff', label: "a staff"},
  //                     {value: 'o ', label: "o"}
  //                   ]
  //                 }
  //               ]}
  //               placeholder="Select some colors..."
  //             />
  //           </FormControl>

  //           <FormControl mb={4}>
  //             <FormLabel>
  //               Student
  //             </FormLabel>
  //             <Select
  //               // selectedOptionColor="#F8E4C3"
  //               isMulti
  //               name="students"
  //               options={[
  //                 {
  //                   label: "Students",
  //                   options: [
  //                     {value: 'hello', label: "hello"},
  //                     {value: 'wow', label: "wow"}
  //                   ]
  //                 },
  //               ]}
  //               placeholder="Select student"
  //               closeMenuOnSelect={false}
  //             >
  //             </Select>
  //           </FormControl>
  //         </Container>
  //       </ModalBody>

  //       <ModalFooter>
  //         <Button variant='ghost' mr={3} onClick={onClose}>
  //           Cancel
  //         </Button>
  //         <Button colorScheme='blue' >Submit</Button>
  //       </ModalFooter>
  //     </ModalContent>
  //   </Modal>
  // </>