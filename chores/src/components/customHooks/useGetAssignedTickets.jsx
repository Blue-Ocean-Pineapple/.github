import { useState, useEffect } from 'react';
import axios from 'axios';
import Geocode from "react-geocode";

function useGetAssignedTickets() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  Geocode.setApiKey(process.env.REACT_APP_MAP_API);
  Geocode.setLocationType("ROOFTOP");

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_URL}/api/map/ticket`)
    .then((data) => {
      let res = data.data;
      // if (res) {
      //   res.forEach((ticket) => {
      //     getGeoCode(ticket);
      //   })
      // }
      setData(res)
    })
    .catch((err) => setError(err))
    .finally(() => {setLoading(false)})
  }

  // const getGeoCode = (ticket) => {
  //   console.log('running geocode');
  //   Geocode.fromAddress(ticket.location)
  //   .then((data) => {
  //     ticket.position = data.results[0].geometry.location
  //   })
  //   .catch((err) => {console.log(err);})
  // }

  useEffect(() => {
    fetchData();

  },[])

  return {data, error, isLoading}
}

export default useGetAssignedTickets;