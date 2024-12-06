import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#491441', // Purple for AppBar and buttons
    },
    secondary: {
      main: '#ffffff', // white for highlights and hover effects
    },
    background: {
      default: '#ffffff', 
      paper: '#724778', // Slightly lighter cards
    },
    text: {
      primary: '#000000', // White text
      secondary: '#000000', // Gray text for subtitles
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#ffffff', // Apply purple to headers
    },
    body1: {
      color: '#ECEFF1',
    },
  },
});

export default theme;
