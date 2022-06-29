import { React, useEffect, useState, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import Geocode from "react-geocode";
import useGetAssignedTickets from '../customHooks/useGetAssignedTickets.jsx';
import { CircularProgress,
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
        useDisclosure,
        Button,
        Popover,
        PopoverTrigger,
        PopoverContent,
        PopoverHeader,
        PopoverBody,
        PopoverFooter,
        PopoverArrow,
        PopoverCloseButton,
        PopoverAnchor,
      } from '@chakra-ui/react'

// grab user's location to center google map api for nearby tickets but for MVP just center around LA

// map will get all assigned tickets
// subscribe to db so whenever a new ticket is assigned, the map auto adds that point???
// render out a map using googlemap api
// pinpoint each ticket's location
// on click of the markers, ticket detail will show
// at the bottom is a sticky scroll that will show list of assigned tickets and their details

// useEffect axios.get all assigned tickets

const containerStyle = {
  width: '100vw',
  height: '100vw'
};

// basing it off LA area
const center = {
  lat:34.052235,
  lng:-118.243683
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API}`
  })
  const [map, setMap] = useState(null);
  const { data, isLoading } = useGetAssignedTickets();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const onLoad = useCallback((map) => {
    setMap(map)

  },[]);

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, []);

  // const getGeoCode = (ticket) => {
  //   console.log('running geoCode');
  //   Geocode.fromAddress(ticket.location)
  //   .then((data) => {
  //     ticket.position = data.results[0].geometry.location
  //   })
  //   .catch((err) => {console.log(err);})
  // };



  return isLoading ?
    <CircularProgress
    isIndeterminate color='green.300'
    style={{
      "display": "flex",
      "height":"100vw",
      "width":"100vw",
      "justifyContent": "center",
      "alignItems": "center"
    }} /> :
    isLoaded && data ? (
      <div>
        <div
        style={{
          "display": "flex",
          "justifyContent":"center"
        }}>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Assigned Tickets</DrawerHeader>

            <DrawerBody>
            {data.map((ticket, key)=>{
              return (
                <div
                key={key}
                style={{
                  "padding": '10px',
                  "marginBottom": '10px',
                  "border": "solid gray",
                  "borderRadius": 15
                }}>
                  <p>{ticket.taskName}</p>
                  <p>{ticket.address}</p>
                  <p>{ticket.description}</p>
                </div>
                    )
              })}
              </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
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

      </div>
      )
    : null
}

export default Map;
