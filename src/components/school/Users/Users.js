import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Button, InputAdornment, Box } from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Users = () => {
  // const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          mb: -8,
          mt: 4,
          "& button": {
            borderBottom: 2,
            borderBottomColor: "transparent",
          },

          "& button:focus": {
            bgcolor: "#245da3",
          },
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("allusers/allusers", {})}
          sx={{
            bgcolor: "#75AACB",
            textTransform: "none",
            borderRadius: 0,
            height: "45px",
          }}
          startIcon={<PeopleAltIcon />}
        >
          All Users (1200)
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("adduser", {})}
          sx={{
            bgcolor: "#75AACB",
            textTransform: "none",
            borderRadius: 0,
            height: "45px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <ArrowDropDownIcon />
            </InputAdornment>
          }
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
      </Box>

      <Outlet />
    </Box>
  );
};

export default Users;
