import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import constants from 'expo-constants';
import colors from '../config/colors';

// Screen componenet with children and style props to implement safe area view for Apple devices
//...to apply automatic padding depending on the screen limitations
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
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
