import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { Card } from '../home/Card'
import DividerWithText from '../home/DividerWithText.jsx';
import { Layout } from '../home/Layout.jsx';
import { useAuth } from '../../contexts/AuthContext';

// const user = auth.currentUser;
// axios.post(‘/user/info’, {uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email});

export default function Register({setIsAuth}) {
  const navigate = useNavigate();
  const { signInWithGoogle, register, signInWithFacebook } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast();

  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, []);

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
       Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password) {
              toast({
                description: 'Credentials not valid.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return
            }
            setIsSubmitting(true)
            register(email, password)
              .then(res => {
                console.log('register res', res)
                navigate('/login')
              })
              .catch(error => {
                console.log(error.message)
                toast({
                  description: error.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              })
              .finally(() => {
                 mounted.current && setIsSubmitting(false)
              })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type='submit'
              colorScheme='teal'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign Up
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link' onClick={() => navigate('/login')}>
            Login
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isfullwidth="true"
          colorScheme='facebook'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => {
                console.log(user)
                navigate('/login')
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign Up with Google
        </Button>

        <Button
          variant='outline'
          isfullwidth="true"
          colorScheme='facebook'
          leftIcon={<FaFacebook />}
          onClick={() =>
            signInWithFacebook()
              .then(user => {
                console.log(user)
                navigate('/login')
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign Up with Facebook
        </Button>
      </Card>
    </Layout>
  )
}
