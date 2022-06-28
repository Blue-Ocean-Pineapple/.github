import {
  Container,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Layout } from '../home/Layout';
import { useAuth } from '../../contexts/AuthContext';
import axios from "axios";

export default function Profile() {
  const { currentUser } = useAuth();
  console.log('currentUser in Profile', currentUser);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const roles = ['Student','Client', 'Staff', 'Admin'];
  // const [role, setRole] = useState(roles);
  const [organization, setOrginization] = useState('');
  const [active, setActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [isOpen, setOpen] = useState(false);
  const [role, setRole] = useState(roles);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      uid: currentUser.uid,
      name: name,
      email: currentUser.email,
      age,
      address,
      city,
      state,
      phone,
      role,
      organization,
      active
    }
    console.log('Updated User', updatedUser);
    try {
      const res =  await axios.post('/users/info', updatedUser);
      console.log('HIT POST USER!', res.data);
      setIsSubmitting(true);
      navigate('/users/' + res.data.uid)
    } catch (err) {
      console.log('error while updating user information', err)
    }
  }
  return (
    <Layout>
      <Heading>Profile page</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> Email: {JSON.stringify(currentUser.email)}</pre>}
          {currentUser && <pre> uid: {JSON.stringify(currentUser.uid)}</pre>}
        </chakra.pre>
        {
        currentUser && (
        <chakra.form  onSubmit={handleSubmit} >
          <Stack spacing='6'>
            <FormControl id='name'>
              <FormLabel>Name</FormLabel>
              <Input
                name='name'
                type='name'
                autoComplete='name'
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id='age'>
              <FormLabel>Age</FormLabel>
              <Input
                name='age'
                type='age'
                autoComplete='age'
                required
                onChange={e =>setAge(e.target.value)}
              />
            </FormControl>
            <FormControl id='address'>
              <FormLabel>Address</FormLabel>
              <Input
                name='address'
                type='address'
                autoComplete='address'
                required
                onChange={e =>setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id='age'>
              <FormLabel>City</FormLabel>
              <Input
                name='city'
                type='city'
                autoComplete='city'
                required
                onChange={e =>setCity(e.target.value)}
              />
            </FormControl>
            <FormControl id='State'>
              <FormLabel>State</FormLabel>
              <Input
                name='state'
                type='state'
                autoComplete='state'
                required
                onChange={e =>setState(e.target.value)}
              />
            </FormControl>
            <FormControl id='phone'>
              <FormLabel>Phone</FormLabel>
              <Input
                name='phone'
                type='phone'
                autoComplete='phone'
                required
                onChange={e =>setPhone(e.target.value)}
              />
            </FormControl>
            {/* <FormControl id='role'>
              <FormLabel>Role</FormLabel>
              <Input
                name='role'
                type='dropdown'
                autoComplete='role'
                required
                onChange={e =>setRole(e.target.value)}
              />
            </FormControl> */}
            <Menu>
              <MenuButton as={Button} colorScheme='pink' onClick={toggleDropdown}>Role</MenuButton>
              <MenuList>
                {
                  roles.map((role) => {
                    return (
                      <MenuItem key={role} value={role} onClick={e => setRole(e.target.value)}>{role}</MenuItem>
                    )
                  })
                }
              </MenuList>
            </Menu>
            <FormControl id='orginization'>
              <FormLabel>Organization</FormLabel>
              <Input
                name='organization'
                type='organization'
                autoComplete='organization'
                required
                onChange={e =>setOrginization(e.target.value)}
              />
            </FormControl>
            <FormControl id='Active '>
              <FormLabel>Active Status</FormLabel>
              <Input
                name='active'
                type='active'
                autoComplete='active'
                required
                onChange={e =>setActive(e.target.value)}
              />
            </FormControl>
            <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
            Update Account
            </Button>
          </Stack>
        </chakra.form>
            )
          }
      </Container>
    </Layout>
  )
}

