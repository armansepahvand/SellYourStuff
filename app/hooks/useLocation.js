//Custome hook to get the user location

import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default useLocation = () => {
  const [location, setLocation] = useState({});

  //Function to ask for location access permission and if permission is granted get the location of the user
  const getLocation = async () => {
    try {
      // ask for location access on user device and if the access is denied return
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      //After access is granted get the longitude and latitude of the user decvice
      const { coords } = await Location.getLastKnownPositionAsync();
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  //Call getLocation function once at the begining of component rendering
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
