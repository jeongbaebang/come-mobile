import { createTheme } from '@rneui/themed';

export const colors = {
  primary: '#337FFE',
  secondary: '#FFC724',
  warning: '#F05E51',
  info: '#24ABE4',
  success: '#20BD4A',
} as const;

export const font = {
  grayscale: {
    900: '#212121',
    800: '#424242',
    700: '#616161',
    600: '#757575',
    500: '#9E9E9E',
    400: '#BDBDBD',
    300: '#E0E0E0',
    200: '#EEEEEE',
    100: '#F5F5F5',
    50: '#FAFAFA',
    0: '#FFFFFF',
  },
  type: {
    title1: {
      fontSize: 26,
    },
    title2: {
      fontSize: 22,
    },
    title3: {
      fontSize: 18,
    },
    title4: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 13,
    },
    body3: {
      fontSize: 12,
    },
    caption: {
      fontSize: 10,
    },
  },
} as const;

export const theme = createTheme({
  lightColors: colors,
  font,
});
