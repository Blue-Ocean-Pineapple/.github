import { useState, useEffect } from 'react';
import axios from 'axios';
import Geocode from "react-geocode";

function useGetAssignedTickets() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  Geocode.setApiKey(process.env.REACT_APP_MAP_API);
  Geocode.setLocationType("ROOFTOP");


  const fetchData = async () => {
    try {
      const data = await axios.get(`http://localhost:3001//api/map/ticket`);

      // go through each ticket in ticket collection
      for (let i = 0 ; i < data.data.length; i++) {

        const data2 = await axios.get(`${process.env.REACT_APP_URL}/api/staff/staffName`,{params:{staffId: data.data[i].staffId}});
        data.data[i].staffName=data2.data;

        data.data[i].studentNames =[];

        // go through each studentId in the ticket
        for (let j = 0; j < data.data[i].studentId.length; j++) {
          const data3 = await axios.get(`${process.env.REACT_APP_URL}/api/staff/studentName`,{params:{studentId: data.data[i].studentId[j]}})
          data.data[i].studentNames.push(data3.data);
        }
      }
      const val = await data.data;
      setData(val);
      setLoading(false);
    } catch(err) {
      setError(err);
    }
  }


  useEffect(() => {
    fetchData();
  },[])

  return {data, error, isLoading}
}

export default useGetAssignedTickets;