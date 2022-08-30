
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#295fab",
      light: "#72bcd5",
    },
  },
  typography: {
    fontFamily: ["IBM Plex Sans"],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    button: {
      textTransform: "none",
    },
  },
  //   components: {
  //     AppBar:{
  //         styleOverrides:{
  //             dense:{
  //                 minHeight: 400
  //             }
  //         }
  //     }
  //   }
});

export default theme;
