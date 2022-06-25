import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Heading
} from '@chakra-ui/react';

export default function Home(props) {

  return (
    <ChakraProvider theme={theme}>
    <Box>
      <Heading>
        Chores
      </Heading>
    </Box>
  </ChakraProvider>
  )
}