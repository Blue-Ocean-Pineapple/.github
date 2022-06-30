import React from 'react';
import {
  Heading,
  Text
} from '@chakra-ui/react';
import { Layout } from './Layout.jsx';
import { useAuth } from '../../contexts/AuthContext';

export default function Homepage({setIsAuth}) {
  const { currentUser } = useAuth();
  return (
    <Layout setIsAuth={setIsAuth}>
      <Heading>Hi </Heading>
      {/* <Text my={6}>{`current user is ${currentUser.email}`}</Text> */}

    </Layout>
  )
}
