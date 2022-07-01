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
      res.forEach((ticket) => {

      })
      setData(res)
    })
    .catch((err) => setError(err))
    .finally(() => {setLoading(false)})
  }

  useEffect(() => {
    fetchData();

  },[])

  return {data, error, isLoading}
}

export default useGetAssignedTickets;