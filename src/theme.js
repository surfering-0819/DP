import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#265DA6",
    },
    secondary: {
      main: "#1fa698",
    },
  },

  typography: {
    fontFamily: "Arial",
    h1: {
      fontSize: "2.0rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.6rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.0rem",
    },
    button: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          // backgroundColor: "#2A2A3A",
          color: "#ffffff",
          fontSize: "1.2rem",
          borderRadius: "0.5rem",
          marginRight: "5px",
          marginBottom: "5px",
          // "&:hover": {
          //   backgroundColor: "#606175",
          // },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
  },
});

export default theme;
