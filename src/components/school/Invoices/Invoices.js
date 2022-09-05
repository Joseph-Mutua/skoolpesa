import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}


const Invoices = () => {
  const { invoiceYear } = useParams();

  const theme = useTheme();
  const navigate = useNavigate()


  const routes = {
    allyears: 0,
    firstyear: 1,
    secondyear: 2,
    thirdyear: 3,
    fourthyear: 4,
    0: "allyears",
    1: "firstyear",
    2: "secondyear",
    3: "thirdyear",
    4: "fourthyear",
  };

  const [selectedTab, setSelectedTab] = useState(routes[invoiceYear]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };



  return (
    <Box >
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 2,
          mt: 4,
          borderColor: "#FFFFFF",
        }}
      >
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ ml: 3, mt: 4 }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 600}}
            >
              <p>Outstanding Invoices</p>
            </Typography>
          </Box>

          <Box
            m={1}
            mt={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  display: "flex",
                  height: "50px",
                  borderRadius: "7px",
                }}
                id="outlined-adornment-weight"
                placeholder="Search For a Student"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />{" "}
            </FormControl>

            <FormControl sx={{ m: 1, maxWidth: "26ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  height: "50px",
                  borderRadius: "7px",
                }}
                id="outlined-adornment-weight"
                placeholder="Filter By Student Id"
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

            <Button
              sx={{
                display: "flex",
                maxWidth: "220px",
                height: "50px",
                textDecoration: "none",
                borderRadius: "7px",
              }}
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("create-new-invoice", {})}
            >
              Create New Invoice
            </Button>
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
              to={"allyears"}
              label="All (12000)"
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
              to={"firstyear"}
              label="First Year (800)"
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
              to={"secondyear"}
              label="Second Year (4000)"
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
              to={"thirdyear"}
              label="Third Year (4000)"
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
              to={"fourthyear"}
              label="Fourth Year (3200)"
            />
          </Tabs>
        </Box>

        <Outlet />
      </Box>
    </Box>
  );
};

export default Invoices;
