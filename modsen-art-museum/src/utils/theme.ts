import { Theme } from '@index';

const theme: Theme = {
  colors: {
    background: '#ffffff',
    border: '#f0f1f1',
    darkPrimary: '#333333',
    primary: '#393939',
    header: 'linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%)',
    secondary: '#e0a449',
    title: '#f17900',
    isFavorite: '#fbd7b24d',
    isNotFavorite: '#f9f9f9',
    favoriteHover: '#f8f8f8',
  },
  fonts: {
    family: {
      regular: 'Lexend Deca, sans-serif',
      secondary: 'Inter',
    },
    size: {
      title: '64px',
      primary: '32px',
      secondary: '16px',
    },
    weight: {
      regular: '400',
      extraRegular: '500',
      bold: '700',
    },
  },
};

export default theme;
