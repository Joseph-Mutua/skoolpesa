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
      {/* <Box
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
              to={"allusers/allusers"}
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
              to={"allusers/adminuser"}
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
              to={"allusers/platformregistrar"}
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
              to={"allusers/accountant"}
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
              to={"allusers/viewer"}
              label="Viewer (3200)"
            />
          </Tabs>
        </Box>


        <Box display="flex" sx={{ mt: 5 }}>
          <Outlet />
        </Box>
      </Box> */}
    </Box>
  );
};

export default Users;
