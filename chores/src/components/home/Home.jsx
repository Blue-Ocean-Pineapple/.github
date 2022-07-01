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
  Box,
  chakra,
  Link,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Layout } from './Layout.jsx';
import { useAuth } from '../../contexts/AuthContext';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

// const Logo = (props: any) => {
//   return (
//     <svg
//       height={32}
//       viewBox="0 0 120 28"
//       xmlns=""
//       {...props}>
//       <path
//         d="https://i.imgur.com/7cgiM5L.png"
//         fill="currentColor"
//       />
//       <path
//         d="https://i.imgur.com/7cgiM5L.png"
//         fill="#2F855A"
//       />
//     </svg>
//   );
// };

// Help promote after-school programs
// Give kids a safe and productive environment
// Kids earn money for college!
// Think Uber, but for getting your dishes done, or your lawn mowed!

//

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
    Think Uber, but for getting your dishes done, or your lawn mowed! Help contribute to a childs future education!
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
    <Heading>Ensuring students stay
motivated and focused.</Heading>
    <Text color={'gray.500'} fontSize={'lg'}>
      We give kids a safe and productive envirionment to stay focused in. Our goal is to promote child wellness while helping students stay busy!
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

<br></br><br></br>
<Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* <Logo /> */}
        <Stack direction={'row'} spacing={6}>
          <Link href={'http://localhost:3000/'}>Home</Link>
          <Link href={'http://localhost:3000/map'}>Map</Link>
          <Link href={'http://localhost:3000/login'}>Login</Link>
          <Link href={'http://localhost:3000/register'}>Register</Link>
          <Link href={'http://localhost:3000/profile'}>Profile</Link>

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
    </Container>


  )
}
