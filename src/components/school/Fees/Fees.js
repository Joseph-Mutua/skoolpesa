import React, { useState } from "react";
import { Box, Stack, Typography, Divider, useTheme } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import FeeTypesTable from "./FeeTypesTable";
import { Outlet } from "react-router-dom";


const Fees = () => {
  const theme = useTheme();
  const [year, setYear] = useState(0);
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 5,
        mt: 4,
        borderColor: "#FFFFFF",
      }}
    >
      <Stack
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{ mt: 2, pt: 4 }}
      >
        <Box>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: `${theme.palette.primary.darkButton}`,
              width: "800px",
              height: "6ch",
              borderRadius: 2,
              ml: -0.2,
            }}
          >
            <Box sx={{ pl: 7 }}>
              <Typography variant="h5" fontWeight="500">
                Fee Type
              </Typography>
            </Box>

            <Box sx={{ pr: 5 }}>
              <Typography>Current Session: 2020-2021</Typography>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ pr: 5 }}>
          {" "}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Year</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={year}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={0}>All Years</MenuItem>
              <MenuItem value={1}>First Year</MenuItem>
              <MenuItem value={2}>Second Yer</MenuItem>
              <MenuItem value={3}>Third Yer</MenuItem>
              <MenuItem value={4}>Fourth Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box>
        <Stack
          direction="row"
          m={1}
          display="flex"
          justifyContent="space-between"
        >
          
          <Box sx={{ ml: 5 }}>
            <Stack>


             <Outlet/>

            </Stack>
          </Box>
          <Divider variant="middle" sx={{color: `${theme.palette.primary.darkButton}`, border: 1, height: "500px", mt:4}}/>
          <Box>
            <Box sx={{display: "flex"}}><Typography fontWeight="500"><p>List All the Fee Types</p></Typography></Box>
            <Box>
            
              <FeeTypesTable />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Fees;
