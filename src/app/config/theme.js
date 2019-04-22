import {createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';

/**
 * A theme with custom primary and secondary color.
 * It's optional.
 * @type {Theme}
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme
