import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
    palette,
    typography,
  });

export default responsiveFontSizes(theme);