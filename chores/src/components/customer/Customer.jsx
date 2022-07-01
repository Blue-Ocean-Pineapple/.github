import React, { useState, useEffect, Suspense } from 'react';
import {
  Button,
  Spacer,
  Flex,
  HStack,
  Center,
  Box,
} from '@chakra-ui/react';
import Ticket from './Ticket.jsx';
import TicketForm from './TicketForm.jsx';
import CompletedTickets from './CompletedTickets.jsx';
import { useAuth } from '../../contexts/AuthContext';

function Customer() {
  const [view, setView] = useState({ name: "All Tickets", viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log("Changing view to: " + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const { currentUser } = useAuth();
  console.log(currentUser)

  const renderView = () => {
    switch (view.name) {
      case "All Tickets":
        return <Ticket  />;
      case "New Ticket":
        return <TicketForm onSubmit={changeView("All Posts")} />;
      case "Completed Tickets":
        return <CompletedTickets onSubmit={changeView("Completed Tickets")} />;
      default:
        return <Ticket />;
    }
  };

  return (
    <>
      <header>
        <nav>
        <Box m={3} p={2}>
          <HStack spacing='20px'>
            <Button colorScheme='blue' onClick={changeView("All Tickets")}>Tickets</Button>
            <Button colorScheme='blue' onClick={changeView("Completed Tickets")}>Completed Tickets</Button>
            <Button colorScheme='blue' onClick={changeView("New Ticket")}>New Ticket</Button>
          </HStack>
        </Box> <br></br>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </>
  );
}
export default Customer;

// function Customer() {

//   const [tickets, setTickets] = useState([]);
//   const [completed, setCompleted] = useState([]);


//   const onLoad = ()=> {
//     axios.get(`http://localhost:3001/api/clients/tickets`)
//       .then((data)=> {
//         console.log(data.data)
//         setTickets(data.data);
//       })
//       .catch((error) => {
//         alert(error);
//       });

//       axios.get(`http://localhost:3001/api/clients/done`)
//       .then((data)=> {
//         console.log(data.data)
//         setCompleted(data.data);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };

//   useEffect(onLoad, []);
//   return (

//     <div>
//       {tickets ? (

//         <Ticket
//           tickets={tickets}
//           completed={completed}
//         />
//         ) : null}

//     </div>
//   );
// }

// export default Customer;
