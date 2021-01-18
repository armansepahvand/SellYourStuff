import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

//temporary array to simulate data coming from server
const listings = [
  {
    id: 1,
    title: 'Green jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Bicycle for sale',
    price: 200,
    image: require('../assets/bicycle.jpg'),
  },
];

//Listing Screen to show a list of existing listings
function ListingsScreen({ navigation }) {
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
            image={item.image}
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
