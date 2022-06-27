import React from 'react';
import {
  Heading,
  Text
} from '@chakra-ui/react';

import { Layout } from './Layout.jsx';
import { useAuth } from '../../contexts/AuthContext'


export default function Homepage() {
  const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading>Home page</Heading>
      <Text my={6}>{ `current user is ${currentUser}`}</Text>
        <Heading>
        </Heading>
    </Layout>
  )
}