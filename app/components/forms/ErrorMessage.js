import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

//Reusable validation error message
function ErrorMessage({ error, visible }) {
  // if there is no error or the element is set to invisible retun null
  if (!visible || !error) return null;

  //return an AppText showing the validation error message
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default ErrorMessage;
