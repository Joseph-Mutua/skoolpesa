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
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
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
        <Box sx={{ boxShadow: 5, mt: 2, width: 1200, height: 505 }}>
          <Box display="flex" sx={{ mt: 2, ml: 2 }}>
            <Typography variant="h5" fontWeight="600">
              Total Amount of School Fees Paid
            </Typography>
          </Box>
          <Box sx={{ mt: 4, pb: -4, px: 2 }}>
            <FeeBarGraph />
          </Box>
        </Box>
        <Box sx={{ mt: 2, width: 280 }}>
          <Stack>
            <Box
              sx={{ ml: 2, mb: 3, boxShadow: 5, borderRadius: 2, height: 110 }}
            >
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack sx={{ mt: -2 }}>
                  <Box>
                    <Typography fontWeight="300">
                      <p>Number of Students</p>
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{ mt: -2, ml: 2 }}
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" fontWeight="600">
                      1,893
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingUpIcon sx={{ color: "green" }} />
                      <Typography
                        sx={{ color: "green", display: "inline", fontSize: 14 }}
                      >
                        8.5%
                      </Typography>
                      <Typography
                        noWrap
                        sx={{
                          display: "inline",
                          fontWeight: 300,
                          fontSize: 12,
                          pl: 0.3,
                        }}
                      >
                        Up from Last Month
                      </Typography>
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: -2 }}>
                  <Box
                    sx={{
                      mt: -3,
                      mr: 2,
                      backgroundColor: "rgba(0, 255, 0, .1 )",
                      borderRadius: 2,
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ color: "green", fontSize: 35 }} />
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{ ml: 2, mb: 3, boxShadow: 5, borderRadius: 2, height: 110 }}
            >
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack sx={{ mt: -2 }}>
                  <Box>
                    <Typography fontWeight="300">
                      <p>Number of Students</p>
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{ mt: -2, ml: 2 }}
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" fontWeight="600">
                      1,893
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingUpIcon sx={{ color: "green" }} />
                      <Typography
                        sx={{ color: "green", display: "inline", fontSize: 14 }}
                      >
                        8.5%
                      </Typography>
                      <Typography
                        noWrap
                        sx={{
                          display: "inline",
                          fontWeight: 300,
                          fontSize: 12,
                          pl: 0.3,
                        }}
                      >
                        Up from Last Month
                      </Typography>
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: -2 }}>
                  <Box
                    sx={{
                      mt: -3,
                      mr: 2,
                      backgroundColor: "rgba(0, 255, 0, .1 )",
                      borderRadius: 2,
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ color: "green", fontSize: 35 }} />
                  </Box>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{ ml: 2, mb: 2, boxShadow: 5, borderRadius: 2, height: 110 }}
            >
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack sx={{ mt: -2 }}>
                  <Box>
                    <Typography fontWeight="300">
                      <p>Number of Students</p>
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{ mt: -2, ml: 2 }}
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" fontWeight="600">
                      1,893
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingUpIcon sx={{ color: "green" }} />
                      <Typography
                        sx={{ color: "green", display: "inline", fontSize: 14 }}
                      >
                        8.5%
                      </Typography>
                      <Typography
                        noWrap
                        sx={{
                          display: "inline",
                          fontWeight: 300,
                          fontSize: 12,
                          pl: 0.3,
                        }}
                      >
                        Up from Last Month
                      </Typography>
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: -2 }}>
                  <Box
                    sx={{
                      mt: -3,
                      mr: 2,
                      backgroundColor: "rgba(0, 255, 0, .1 )",
                      borderRadius: 2,
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ color: "green", fontSize: 35 }} />
                  </Box>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{ ml: 2, mb: 2, boxShadow: 5, borderRadius: 2, height: 110 }}
            >
              <Stack
                direction="row"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack sx={{ mt: -2 }}>
                  <Box>
                    <Typography fontWeight="300">
                      <p>Number of Students</p>
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{ mt: -2, ml: 2 }}
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" fontWeight="600">
                      1,893
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingUpIcon sx={{ color: "green" }} />
                      <Typography
                        sx={{ color: "green", display: "inline", fontSize: 14 }}
                      >
                        8.5%
                      </Typography>
                      <Typography
                        noWrap
                        sx={{
                          display: "inline",
                          fontWeight: 300,
                          fontSize: 12,
                          pl: 0.3,
                        }}
                      >
                        Up from Last Month
                      </Typography>
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: -2 }}>
                  <Box
                    sx={{
                      mt: -3,
                      mr: 2,
                      backgroundColor: "rgba(0, 255, 0, .1 )",
                      borderRadius: 2,
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ color: "green", fontSize: 35 }} />
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
