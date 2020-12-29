import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText>Green jacket for sale</AppText>
        <AppText>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default ListingDetailsScreen;
