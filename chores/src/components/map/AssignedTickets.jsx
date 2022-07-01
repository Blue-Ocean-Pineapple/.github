import react from 'react';
import { Box, Text, Heading, Divider, Flex } from '@chakra-ui/react';

const AssignedTickets = ({ticket}) => {
  const parsedAddy = ticket.address.split(',').slice(0,2).join(',');

  const handleReroute = () => {
    window.location.assign(`http://maps.google.com?q=${ticket.coordinates.lat},${ticket.coordinates.lng}`);
  }


  return(
    <Box
    mb='15px'
    mt='5px'
    borderRadius='md'
    borderWidth='0.5px'
    p='20px'
    h='35%'
    w='65%'
    onClick={handleReroute}
    _hover={{ fontWeight: 'semibold' }}>
      <Heading as='h2' size='s'>{ticket.taskName}</Heading>
      <Text fontSize='xs'>Address: {parsedAddy}</Text>
      <Divider orientation='horizontal' pt='3px' />
      <Flex flexDir='row' justifyContent='flex-start'>
        <Heading as='h3' size='xs' pt='5px' pr='5px'>Students:</Heading>
        <Text fontSize='xs' pt='5px'>{ticket.studentNames.join(', ')}</Text>
      </Flex>
      <Flex flexDir='row' justifyContent='flex-start'>
        <Heading as='h3' size='xs' pt='5px' pr='5px'>Staff:</Heading>
        <Text fontSize='xs' pt='5px'>{ticket.staffName}</Text>
      </Flex>
    </Box>
  )
}

export default AssignedTickets;