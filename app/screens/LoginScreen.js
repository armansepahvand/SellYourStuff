import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
