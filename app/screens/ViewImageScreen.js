import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ViewImageScreen(props) {
  return <Image style={styles.image} source={require("../assets/chair.jpg")} />;
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
