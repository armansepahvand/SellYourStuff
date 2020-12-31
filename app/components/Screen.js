import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import constants from "expo-constants";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={ style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
