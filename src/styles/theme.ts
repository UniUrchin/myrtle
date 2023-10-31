import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    theme: {
      primary: {
        50: '#E7F8FF',
        100: '#ADE0F4',
        200: '#66B2D0',
        300: '#3C89A8',
        400: '#226F8E',
        500: '#03506F',
        600: '#004362',
        700: '#013C54',
        800: '#003043',
        900: '#002534',
      },
      secondary: {
        500: '#C5A377',
        600: '#B69162',
        700: '#A9804B',
      },
    },
    background: {
      primary: {
        500: '#CBD5E1',
        700: '#94A3B8',
      },
      secondary: {
        500: '#F8FAFC',
        700: '#EFF0F0',
      },
      tertiary: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: {
        500: '#6B7280',
        700: '#4B5563',
      },
      light: '##F8FAFC',
    },
    accent: {
      note: {
        500: '#EF4444',
        700: '#DC2626',
      },
      success: '#80D05A',
    },
  },
});
