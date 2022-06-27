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
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Card } from '../home/Card'
import DividerWithText from '../home/DividerWithText.jsx';
import { Layout } from '../home/Layout'
import { useAuth } from '../../contexts/AuthContext';


export default function Loginpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle, login, signInWithFacebook } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast();

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
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
            login(email, password)
              .then(res => {
                console.log('login res', res)
                navigate.push('/profile')
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
                // setTimeout(() => {
                //   mounted.current && setIsSubmitting(false)
                //   console.log(mounted.current)
                // }, 1000)
                 setIsSubmitting(false)
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
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Button>
          <Button variant='link' onClick={() => navigate.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isfullwidth="true"
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => {
                // handleRedirectToOrBack()
                console.log(user)
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>

        <Button
          variant='outline'
          isfullwidth="true"
          colorScheme='blue'
          leftIcon={<FaFacebook />}
          onClick={() =>
            signInWithFacebook()
              .then(user => {
                // handleRedirectToOrBack()
                console.log(user)
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Facebook
        </Button>
      </Card>
    </Layout>
  )
}
