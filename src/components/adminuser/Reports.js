import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  MenuItem,
  InputLabel,
  Select,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

import FeeBarGraph from "../../common/FeeBarGraph";

const Reports = () => {
  const [period, setPeriod] = useState(3);

  const handleChange = () => {};

  return (
    <Box>
      <Box
        sx={{ mt: 2 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{}}>
          <Typography variant="h5" fontWeight="700">
            All Reports
          </Typography>
        </Box>
        <Box>
          <Stack direction="row">
            <Box sx={{}}>
              <FormControl sx={{}}>
                <OutlinedInput
                  sx={{
                    height: "4ch",
                  }}
                  id="outlined-adornment-weight"
                  placeholder="Search for something here..."
                  aria-describedby="outlined-weight-helper-text"
                  startAdornment={
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  }
                  inputProps={{
                    "aria-label": "Anything",
                  }}
                />{" "}
              </FormControl>

              <FormControl sx={{ ml: 2 }} size="small">
                <InputLabel id="demo-select-small">Period</InputLabel>
                <Select
                  sx={{ height: "4ch" }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={period}
                  label="Period"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>Past Week</MenuItem>
                  <MenuItem value={2}>This Month</MenuItem>
                  <MenuItem value={3}>Last Month </MenuItem>
                  <MenuItem value={4}>This Year</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ ml: 2 }}>
              {" "}
              <Box>
                <Button
                  startIcon={<FileUploadOutlinedIcon />}
                  variant="contained"
                  sx={{ width: "12ch" }}
                >
                  Export
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box m={1} display="flex" justifyContent="space-between">
        <Box sx={{ boxShadow: 5, mt: 2, width: 1200, height: 550 }}>
          <Box display="flex" sx={{ mt: 2, ml: 2 }}>
            <Typography variant="h5" fontWeight="600">
              Total Amount of School Fees Paid
            </Typography>
          </Box>
          <Box sx={{ mt: 4, pb: -4, px: 2 }}>
            <FeeBarGraph />
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Stack>
            <Box sx={{ ml: 2, mb: 2, boxShadow: 5 }}>
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack>
                  <Box>Ele 1 Box 1</Box> <Box>Ele 2 Box 1</Box>
                  <Box>Ele 3 Box 1</Box>
                </Stack>
                <Stack>
                  <Box sx={{ mt: -5 }}>
                    <p>Icon Living</p>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ ml: 2, mb: 2, boxShadow: 5 }}>
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack>
                  <Box>Ele 1 Box 1</Box> <Box>Ele 2 Box 1</Box>
                  <Box>Ele 3 Box 1</Box>
                </Stack>
                <Stack>
                  <Box sx={{ mt: -5 }}>
                    <p>Icon Living</p>
                  </Box>
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ ml: 2, mb: 2, boxShadow: 5 }}>
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack>
                  <Box>Ele 1 Box 1</Box> <Box>Ele 2 Box 1</Box>
                  <Box>Ele 3 Box 1</Box>
                </Stack>
                <Stack>
                  <Box sx={{ mt: -5 }}>
                    <p>Icon Living</p>
                  </Box>
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ ml: 2, mb: 2, boxShadow: 5 }}>
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack>
                  <Box>Ele 1 Box 1</Box> <Box>Ele 2 Box 1</Box>
                  <Box>Ele 3 Box 1</Box>
                </Stack>
                <Stack>
                  <Box sx={{ mt: -5 }}>
                    <p>Icon Living</p>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Reports;
