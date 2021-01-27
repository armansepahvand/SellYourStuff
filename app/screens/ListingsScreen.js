import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useApi from '../hooks/useApi';

//Listing Screen to show a list of existing listings
function ListingsScreen({ navigation }) {
  //used the useApi custom hook to get the listings data from server
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getlistings
  );

  //call the loadListings function at the first loading
  useEffect(() => {
    loadListings();
  }, []);

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
      <ActivityIndicator animating={loading} size="large" color="#0000ff" />
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
