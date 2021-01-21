import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

//Listing Screen to show a list of existing listings
function ListingsScreen({ navigation }) {
  //listings srtate, default set to empty array
  const [listings, setListings] = useState([]);

  //function to get the listings from server and set the listings state to the result of the server request
  const loadListings = async () => {
    const response = await listingsApi.getlistings();
    setListings(response.data);
  };

  //call the loadListings function at the first loading
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {/* flatlist component to create a list of listings  */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={'$' + item.price}
            // get the image url from images instance of server response data object
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
