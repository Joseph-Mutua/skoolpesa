import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {

  Tab,
  Tabs,
  useTheme,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";


export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}
const routes = {
  allusers: 0,
  adminuser: 1,
  platformregistrar: 2,
  accountant: 3,
  viewer: 4,
  0: "allusers",
  1: "adminuser",
  2: "platformregistrar",
  3: "accountant",
  4: "viewer",
};

const UserList = () => {
  const theme = useTheme();
const { userType } = useParams();

  const [selectedTab, setSelectedTab] = useState(routes[userType]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 2,
        mt: 8,
        borderColor: "#FFFFFF",
      }}
    >
      <Stack direction="row" display="flex" justifyContent="space-between">
        <Typography
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ ml: 1, mt: 3 }}
        >
          <p>Find all your users' accounts and their associated role</p>
        </Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              style={{
                maxWidth: "180px",
                maxHeight: "40px",
                minWidth: "50px",
                minHeight: "30px",
              }}
              id="outlined-adornment-weight"
              placeholder="Search User"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />{" "}
          </FormControl>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              style={{
                maxWidth: "180px",
                maxHeight: "40px",
                minWidth: "50px",
                minHeight: "30px",
              }}
              id="outlined-adornment-weight"
              placeholder="Sort By Role"
              endAdornment={
                <InputAdornment position="end">
                  <ArrowDropDownIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />{" "}
          </FormControl>
        </Box>
      </Stack>

      <Box sx={{ mb: -5 }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          sx={{
            "& button": {
              color: "rgba(194, 202, 214, )",
              borderBottom: 2,
              borderBottomColor: "transparent",
            },

            "& button:focus": {
              borderBottomColor: `${theme.palette.primary.main}`,
              color: `${theme.palette.primary.main}`,
            },
          }}
        >
          <Tab
            sx={{
              borderBottom: 2,
              borderBottomColor: "transparent",
              "&:focus": {
                borderBottomColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.main}`,
              },
            }}
            component={Link}
            to={"allusers"}
            label="All (3300)"
          />

          <Tab
            sx={{
              borderBottom: 2,
              borderBottomColor: "transparent",
              "&:focus": {
                borderBottomColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.main}`,
              },
            }}
            component={Link}
            to={"adminuser"}
            label="Admin (1)"
          />
          <Tab
            sx={{
              borderBottom: 2,
              borderBottomColor: "transparent",
              "&:focus": {
                borderBottomColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.main}`,
              },
            }}
            component={Link}
            to={"platformregistrar"}
            label="Platform Registrar (10)"
          />

          <Tab
            sx={{
              borderBottom: 2,
              borderBottomColor: "transparent",
              "&:focus": {
                borderBottomColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.main}`,
              },
            }}
            component={Link}
            to={"accountant"}
            label="Accountant (50)"
          />
          <Tab
            sx={{
              borderBottom: 2,
              borderBottomColor: "transparent",
              "&:focus": {
                borderBottomColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.main}`,
              },
            }}
            component={Link}
            to={"viewer"}
            label="Viewer (3200)"
          />
        </Tabs>
      </Box>

      <Box display="flex" sx={{ mt: 5 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserList;
