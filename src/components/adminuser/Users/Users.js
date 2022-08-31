import React, { useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import {
  Button,
  Tab,
  Tabs,

  Menu,
  MenuItem,
  useTheme,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";


export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}
const actions = ["View", "Send Reminder", "Print"];


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


const Users = () => {
  const theme = useTheme();
  const { userType } = useParams();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedTab, setSelectedTab] = useState(routes[userType]);


  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseMenu}
      >
        {actions.map((action) => (
          <MenuItem key={action} onClick={handleCloseMenu}>
            <Typography textAlign="center">{action}</Typography>
          </MenuItem>
        ))}
      </Menu>

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
          component={Link}
          to={"adduser"}
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
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 5,
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
    </Box>
  );
};

export default Users;
