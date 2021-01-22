import { Platform } from 'react-native';
import colors from './colors';

//Reusable Default style Object to be used in all components and screens
export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
