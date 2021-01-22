import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

//Listing Screen to show a list of existing listings
function ListingsScreen({ navigation }) {
  //listings srtate, default set to empty array
  const [listings, setListings] = useState([]);

  //State to check for any server error
  const [error, setError] = useState(false);

  //call the loadListings function at the first loading
  useEffect(() => {
    loadListings();
  }, []);

  //function to get the listings from server and set the listings state to the result of the server request
  const loadListings = async () => {
    const response = await listingsApi.getlistings();

    //if response status is not ok set error state to true
    if (!response.ok) return setError(true);
    //if there is no error set error state to false and put the response datat into listings state
    setError(false);
    setListings(response.data);
  };

  console.log('the listing is ', error);
  return (
    <Screen style={styles.screen}>
      {/* if ther is a server error dispaly it and set a button to retry accessing the data */}
      {error && (
        <>
          <AppText>Couldnt retrieve the data</AppText>
          <AppButton title="Retry" onPress={loadListings()}></AppButton>
        </>
      )}

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
