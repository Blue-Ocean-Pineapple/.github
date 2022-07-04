import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext.js";
import Navlink from "./Navlink";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Navbar({ setIsAuth, role }) {
  const { toggleColorMode } = useColorMode();
  const { logout, currentUser } = useAuth();
  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      py={4}
      backgroundColor='#4D96FF'
    >
      <HStack
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        spacing={4}
      >
        <Navlink to="/" name="Home" size="lg" backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>
        <Spacer />
        {!currentUser && <Navlink to="/login" name="Login"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>}
        {!currentUser && <Navlink to="/register" name="Register"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>}
        {currentUser && <Navlink to="/profile" name="Profile"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}} />}
        {currentUser && role === 'Admin' && <Navlink to="/admin" name="Admin"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>}
        {currentUser && role === 'Customer' &&  <Navlink to="/customer" name="Customer"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>}
        {currentUser && role === 'Staff' && <Navlink to="/staff" name="Staff"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}} />}
        {currentUser && role === 'Student' && <Navlink to="/student" name="Student"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}}/>}
        {currentUser && <Navlink to="/map" name="Map"  backgroundColor='white' color='grey'  _hover={{bg:"#D3D3D3"}} />}
        {currentUser && (
          <Navlink
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();
              await logout().then(() => {
                localStorage.clear();
                setIsAuth(false);
                window.location.pathname = "/";
              });
            }}
          />
        )}
        <IconButton
          variant="ghost"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>


    </Box>


  );
}
