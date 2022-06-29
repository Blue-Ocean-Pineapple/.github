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
import Admin from "../admin/Admin.jsx";
// import Customer from './components/customer/Customer.jsx';
// import Map from "./components/map/Map.jsx";
// import Staff from './components/staff/Staff.jsx';
// import Student from "./components/student/Student.jsx";

export function Navbar({ setIsAuth }) {
  const { toggleColorMode } = useColorMode();
  const { logout, currentUser } = useAuth();
  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      py={4}
    >
      <HStack
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        spacing={4}
      >
        <Navlink to="/" name="Home" size="lg" />
        <Spacer />
        {!currentUser && <Navlink to="/login" name="Login" />}
        {!currentUser && <Navlink to="/register" name="Register" />}
        {currentUser && <Navlink to="/profile" name="Profile" />}
        {currentUser && <Navlink to="/admin" name="Admin" />}
        {currentUser && (
          <Navlink
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();
              await logout().then(() => {
                localStorage.clear();
                setIsAuth(false);
                window.location.pathname = "/login";
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
