import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#97572b', 
    },
    error: {
      main: '#f44336', 
    },
    background: {
      default: '#f5f5f5', 
    },
  },
});

export default theme;
