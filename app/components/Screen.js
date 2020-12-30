import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
  },
});

export default Screen;
