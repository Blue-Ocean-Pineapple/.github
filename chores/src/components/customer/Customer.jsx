import React, { useState, useEffect, Suspense } from 'react';
import {
  Button,
} from '@chakra-ui/react';
import Ticket from './Ticket.jsx';
import TicketForm from './TicketForm.jsx';



function Customer() {
  const [view, setView] = useState({ name: "All Tickets", viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log("Changing view to: " + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case "All Tickets":
        return <Ticket  />;
      case "New Ticket":
        return <TicketForm onSubmit={changeView("All Posts")} />;
      default:
        return <Ticket />;
    }
  };

  return (
    <>
      <header>
        <nav>
          <h1 onClick={changeView("All Tickets")}>Chores</h1>
          <ul>
            <Button colorScheme='blue' onClick={changeView("All Tickets")}>Tickets</Button>


            {/* TODO: Enable this when working on the form:*/}
            <Button colorScheme='blue' onClick={changeView("New Ticket")}>New Ticket</Button>

            {/* TODO: Enable this when working on the Admin view:*/}
            {/* <li onClick={changeView("Admin")}>⚙️ Admin</li> */}
          </ul>
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
