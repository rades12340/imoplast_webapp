import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, white, orange, green } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#143302",
    },
    secondary: {
      main: orange.A700,
    },

    error: {
      main: red.A400,
    },
    text: {
      primary: "#3e8105",
      secondary: "#143302",
    },
  },
  background: {
    default: "linear-gradient(to top, #faf9f9, #ffffff)",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "transparent",
      },
      root: {
        backgroundColor: "transparent",
      },
    },
    MuiBottomNavigation: {
      root: {
        background: orange.A700,
        boxShadow:
          "2px 2px 10px 3px rgba(196, 196, 196, 1), -2px -2px 10px 3px rgba(255, 255, 255, 1)",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        "&$selected": {
          color: "orange",
        },
      },
    },

    MuiListItemText: {
      primary: {
        fontSize: "1em",
        lineHeight: 1,
      },
    },
    MuiBottomNavigationAction: {
      root: {
        "&$selected": {
          backgroundColor: orange.A700,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
