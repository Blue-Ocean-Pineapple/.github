import { React, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import useGetAssignedTickets from '../customHooks/useGetAssignedTickets.jsx';
import { CircularProgress, Flex } from '@chakra-ui/react'
import AssignedTickets from './AssignedTickets.jsx'


const containerStyle = {
  width: '60vw',
  height: '80vw'
};


const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API}`
  })
  const [map, setMap] = useState(null);
  const { data, isLoading } = useGetAssignedTickets();

  const onLoad = useCallback((map) => {
    setMap(map)

  },[]);

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, []);


   // const getName = async (info) => {
  //   // if its not staff
  //   if (Array.isArray(info)) {
  //     info.forEach((studentId) => {
  //        const data = await axios.get('/api/staff/studentName', { })
  //      })
  //   }
  // }




  return isLoading ?
    <CircularProgress
    isIndeterminate color='green.300'
    display='flex'
    w='100%'
    h='100%'
    justifyContent='center'
    alignItems='center' /> :
    isLoaded && data ? (
      <Flex
      w='100%'
      justifyContent='space-between'>
        <Flex
        flexDir='column'
        alignItems='center'
        alignContent='center  '
        w='100%'
        h="80vw"
        overflow='scroll'
        >
          {data.map((item,key) => {
            return (
              <AssignedTickets
              key={key}
              ticket={item}
              />
            )
          })}
        </Flex>
        <Flex>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={data[0].coordinates}
            zoom={13}
            margin={[50,50,50,50]}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
          {data.map((ticket,key) => {
            return (
              <Marker
              key={key}
              position={ticket.coordinates}
              />
            )
          })}
          </GoogleMap>
        </Flex>

      </Flex>
      )
    : null
}

export default Map;