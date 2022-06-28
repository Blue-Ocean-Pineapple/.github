import { React, useEffect, useState } from 'react';
import axios from 'axios';

// grab user's location to center google map api for nearby tickets but for MVP just center around LA

// map will get all assigned tickets
// subscribe to db so whenever a new ticket is assigned, the map auto adds that point???
// render out a map using googlemap api
// pinpoint each ticket's location
// on click of the markers, ticket detail will show
// at the bottom is a sticky scroll that will show list of assigned tickets and their details

// useEffect axios.get all assigned tickets

const Map = () => {
  const [assignedTix, setTix] = useState([]);

  useEffect(() => {
    console.log('running axios');
    axios.get(`${process.env.REACT_APP_URL}/api/map/ticket`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }, [])

  return(
    <div>
      <p>This is the Map Page</p>
    </div>
  )
}

export default Map;