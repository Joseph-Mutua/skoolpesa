import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Tab,
  Tabs,
  IconButton,
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
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



  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
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
            bgcolor: "#75AACB",
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
          sx={{
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
            sx={{ ml: 3, mt: 3 }}
          >
            <p>Find all Students By Class or Stream</p>
          </Typography>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  maxWidth: "250px",
                  maxHeight: "40px",
                  minWidth: "50px",
                  minHeight: "30px",
                }}
                id="outlined-adornment-weight"
                placeholder="Search For a Student"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />{" "}
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  maxWidth: "250px",
                  maxHeight: "40px",
                  minWidth: "50px",
                  minHeight: "30px",
                }}
                id="outlined-adornment-weight"
                placeholder="Filter By Class/Stream"
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
      </Box>
    </>
  );
};

export default Users;
