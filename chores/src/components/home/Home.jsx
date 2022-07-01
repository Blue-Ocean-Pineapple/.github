import React from 'react';
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
} from '@chakra-ui/react';
import { Layout } from './Layout.jsx';
import { useAuth } from '../../contexts/AuthContext';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Homepage({setIsAuth}) {
  const { currentUser } = useAuth();
  return (
    // <Layout setIsAuth={setIsAuth}>
    //   <Heading>Home page</Heading>
    //   {/* <Text my={6}>{`current user is ${currentUser.email}`}</Text> */}
    // </Layout>

<Container maxW={'5xl'} py={12}>
<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
  <Stack spacing={4}>
    <Text
      textTransform={'uppercase'}
      color={'blue.400'}
      fontWeight={600}
      fontSize={'sm'}
      bg={useColorModeValue('blue.50', 'blue.900')}
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}>
      Our Story
    </Text>
    <Heading>Help students earn money
towards college! </Heading>
    <Text color={'gray.500'} fontSize={'lg'}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore
    </Text>
    <Stack
      spacing={4}
      divider={
        <StackDivider
          borderColor={useColorModeValue('gray.100', 'gray.700')}
        />
      }>
    </Stack>
  </Stack>
  <Flex>
    <Image
      rounded={'md'}
      alt={'feature image'}
      src={
        'https://learn.allergyandair.com/wp-content/uploads/2015/10/vacuum-cleaning.jpg'
      }
      objectFit={'cover'}
    />
  </Flex>
</SimpleGrid>

<br></br>

<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
  <Stack spacing={4}>
    <Stack
      spacing={4}
      divider={
        <StackDivider
          borderColor={useColorModeValue('gray.100', 'gray.700')}
        />
      }>
      <Image
      rounded={'md'}
      alt={'feature image'}
      src={
        'https://media.istockphoto.com/photos/dad-and-daughter-folding-clothes-in-bedroom-together-picture-id913255916?k=20&m=913255916&s=612x612&w=0&h=Wukdu-nUL3NNtbXdsh95tPiz0_zAsQ3d7ET0dvr6ReI='
      }
      objectFit={'cover'}
    />
    </Stack>
  </Stack>
  <Flex>
  <Stack spacing={4}>
    <Text
      textTransform={'uppercase'}
      color={'blue.400'}
      fontWeight={600}
      fontSize={'sm'}
      bg={useColorModeValue('blue.50', 'blue.900')}
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}>
      Join Us!
    </Text>
    <Heading>Helping students stay
motivated and focused</Heading>
    <Text color={'gray.500'} fontSize={'lg'}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore
    </Text>
    <Stack
      spacing={4}
      divider={
        <StackDivider
          borderColor={useColorModeValue('gray.100', 'gray.700')}
        />
      }>
    </Stack>
  </Stack>
  </Flex>
</SimpleGrid>
</Container>



  )
}
