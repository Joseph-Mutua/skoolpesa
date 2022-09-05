import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {Box, Button, InputAdornment} from "@mui/material"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StudentsNav = () => {
    const navigate = useNavigate()
  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ mb: -10, mt: 4 }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("all-students")}
          sx={{
            bgcolor: "#245da3",
            textTransform: "none",
            borderRadius: 0,
            height: "45px",
          }}
          startIcon={<PeopleAltIcon />}
        >
          All Students(15)
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("add-student")}
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
          Add Student
        </Button>
      </Box>

      <Outlet />
    </>
  );
};

export default StudentsNav;
