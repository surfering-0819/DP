import { createTheme } from "@mui/material";

const theme = createTheme({
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
});

export default theme;
