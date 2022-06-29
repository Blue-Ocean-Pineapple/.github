import { React, useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

// grab user's location to center google map api for nearby tickets but for MVP just center around LA

// map will get all assigned tickets
// subscribe to db so whenever a new ticket is assigned, the map auto adds that point???
// render out a map using googlemap api
// pinpoint each ticket's location
// on click of the markers, ticket detail will show
// at the bottom is a sticky scroll that will show list of assigned tickets and their details

// useEffect axios.get all assigned tickets

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat:34.052235,
  lng:-118.243683
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API}`
  })
  const [assignedTix, setTix] = useState([]);
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  },[]);

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/api/map/ticket`)
    .then((data) => setTix(data.data))
    .catch((err) => console.log(err))
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
    )
  : null
}

export default Map;