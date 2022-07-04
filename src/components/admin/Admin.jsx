import React, { useState, useEffect } from "react";
// chores/src/components/admin/AdminEntry.jsx
import AdminEntry from "./AdminEntry.jsx";
import UserEntry from "./UserEntry.jsx";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  chakra,
  Link,
  VisuallyHidden,
  Container
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

export default function Admin(props) {
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/staff/allTickets")
      .then((response) => {
        console.log("working");
        let adminData = response.data;
        //console.log(adminData);
        setAdmin(adminData);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/staff/allStudents")
      .then((response) => {
        //
        console.log("working");
        let userData = response.data;
        console.log(userData);
        setUsers(userData);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  return (
    <ChakraProvider bg="white">
      <Box bg="white" />
      <Flex justifyContent="center">
        <Box borderWidth="1px" width="80vw" height="10vh" bg="#6BCB77">
          <Text textAlign="center" fontSize="4xl" fontFamily=" 'Open Sans', sans-serif">
            Chores
          </Text>
        </Box>
      </Flex>
      <Box className="ContainingBox" width="100vw">
        <Flex
          className="containingFlex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box className="tableBox" maxW="60vw" margin="20px">
            <Text textAlign="center">Tickets</Text>
            <TableContainer display="block" maxWidth="100%">
              <Table variant="striped">
                <TableCaption>Student Ticket List</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Task Name</Th>
                    <Th>Status</Th>
                    <Th>Date</Th>
                    <Th>Completed</Th>
                    <Th>Approve</Th>
                    <Th>Mark Completed</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {admin.map((data) => {
                    return (
                      <AdminEntry
                        clientStatus={data.clientStatus}
                        complete={data.complete}
                        date={data.createdAt}
                        creatorId={data.creatorId}
                        description={data.description}
                        reacts={data.reacts}
                        staffId={data.staffId}
                        studentId={data.studentId}
                        id={data._id}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>

      <Box bg="white" />
      <Flex justifyContent="center"></Flex>
      <Box className="ContainingBox" width="100vw">
        <Flex
          className="containingFlex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box className="tableBox" maxW="60vw" margin="20px">
            <Text textAlign="center">Users</Text>
            <TableContainer display="block" maxWidth="100%">
              <Table variant="striped">
                <TableCaption>User Account List</TableCaption>
                <Thead>
                  <Tr>
                    <Th>User Name</Th>
                    <Th>Organization</Th>
                    <Th>Role</Th>
                    <Th>Active</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((data) => {
                    return (
                      <UserEntry
                        firstName={data.firstName}
                        lastName={data.lastName}
                        organization={data.organization}
                        id={data._id}
                        role={data.role}
                        email={data.email}
                        active={data.active}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>

      <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* <Logo /> */}
        <Stack direction={'row'} spacing={6}>
          <Link href={'http://localhost:3000/'}>Home</Link>
          <Link href={'http://localhost:3000/map'}>Map</Link>
          <Link href={'http://localhost:3000/login'}>Login</Link>
          <Link href={'http://localhost:3000/register'}>Register</Link>
          <Link href={'http://localhost:3000/profile'}>Profile</Link>

        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© Pineapple Lovers</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>

    </ChakraProvider>
  );
}
