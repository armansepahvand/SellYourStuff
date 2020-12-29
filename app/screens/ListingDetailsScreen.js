import React from "react";
import { Image, View, StyleSheet } from "react-native";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style source={require("../assets/jacket.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ListingDetailsScreen;
