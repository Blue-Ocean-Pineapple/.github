import React from "react";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Home from "./components/home/Home.jsx";
import Profile from "./components/profile/Profile.jsx";
import Admin from "./components/admin/Admin.jsx";
import Customer from "./components/customer/Customer.jsx";
import Map from "./components/map/Map.jsx";
import Staff from "./components/staff/Staff.jsx";
import Student from "./components/student/Student.jsx";
import { Navbar } from "./components/home/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContextProvider from "./contexts/AuthContext";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import {
  Heading,
  Text,
  ListItem,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  chakra,
  Link,
  VisuallyHidden,
} from '@chakra-ui/react';
import Navlink from "./components/home/Navlink";
import { useAuth } from "./contexts/AuthContext.js";

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

function App(props) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // console.log("is Auth console", isAuth);
  const roles = ["Student", "Customer", "Staff", "Admin"];
  const [role, setRole] = useState(["Student", "Customer", "Staff", "Admin"]);
  // console.log('role in App :', role);

  return (
    <AuthContextProvider>
      <Router>
        <Navbar setIsAuth={setIsAuth} role={role} />
        <Routes>
          <Route exact path="/" element={<Home />} />
=======
  const roles = ['Student','Customer', 'Staff', 'Admin'];
  const [role, setRole] = useState(['Student','Customer', 'Staff', 'Admin']);
  const { logout, currentUser } = useAuth();
  return (
    <AuthContextProvider>
      <Router>
      <Navbar setIsAuth={setIsAuth} role={role}/>
        <Routes>
          <Route exact path="/" element={<Home role={role}/>} />
          <Route exact path="/student" element={<Student />} />
          <Route
            path="/login"
            element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}
          />
          <Route
            path="/register"
            element={!isAuth ? <Register setIsAuth={setIsAuth} /> : <Home />}
          />
          <Route path="/profile" element={ <Profile role={role} setRole={setRole} roles={roles}/> } />
          <Route path="/admin" element={isAuth  ?  <Admin /> : <Login />}/>
          <Route path="/customer" element={isAuth  ?  <Customer />  : <Login />}/>
          <Route path="/staff" element={isAuth ?  <Staff /> : <Login />}/>
          <Route path="/student" element={isAuth ?  <Student /> : <Login /> }/>
          <Route path="/map" element={isAuth ? <Map /> : <Login />} />
        </Routes>

        <Box
           position ={"fixed"}
           right={0}
           bottom={0}
           left={0}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
        padding-bottom={'60px'}
        >
        <Stack direction={'row'} spacing={6}>
            {!isAuth && <Navlink to="/login" name="Login" />}
            {!isAuth && <Navlink to="/register" name="Register"  />}
            {isAuth && <Navlink to="/profile" name="Profile"  />}
            {isAuth && role === 'Admin' && <Navlink to="/admin" name="Admin" />}
            {isAuth && role === 'Customer' &&  <Navlink to="/customer" name="Customer" />}
            {isAuth && role === 'Staff' && <Navlink to="/staff" name="Staff"  />}
            {isAuth && role === 'Student' && <Navlink to="/student" name="Student" />}
            {isAuth && <Navlink to="/map" name="Map"  />}
            {isAuth && (
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
      </Router>
    </AuthContextProvider>
  );
}
export default App;
