//this component exports an objects wich overrides some of the peoperties of the colors object ..
// in the default navigation theme

import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
