
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#356CB0",
      light: "#75AACB",
    },
  },
  typography: {
    fontFamily: ["Inter"],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
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
