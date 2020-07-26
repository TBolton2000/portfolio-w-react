import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    common: { "black": "#000", "white": "#fff" },
    background: {
      paper: "rgba(255, 255, 255, 1)",
      default: "rgba(255, 255, 255, 0.85)"
    },
    primary: {
      main: blue[500],
      dark: blue[800],
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(235, 220, 176, 1)",
      main: "rgba(245, 215, 124, 1)",
      dark: "rgba(245, 196, 49, 1)",
      contrastText: "rgba(0, 0, 0, 1)"
    }
  }
});

export default theme;