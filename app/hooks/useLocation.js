import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const { coords } = await Location.getLastKnownPositionAsync();
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
