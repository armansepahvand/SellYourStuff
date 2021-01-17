import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

//AppText componenet to create custome Text items by getting the wrapped variable  and style as  props
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
