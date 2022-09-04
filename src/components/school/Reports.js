import React from "react";
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

import SearchIcon from "@mui/icons-material/Search";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import FeeBarGraph from "../../common/FeeBarGraph";
import PaidUpPieChart from "../../common/PaidUpPieChart";
import FeePaidThroughPieChart from "../../common/FeePaidThrougPieChart";

const Reports = () => {
  // const [period, setPeriod] = useState(3);

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

              <FormControl sx={{ ml: 2, width:120 }} >
                <InputLabel id="demo-select-small">Period</InputLabel>
                <Select
                  sx={{ height: "4ch" }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={period}
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
                      <p>Total Fees Collected</p>
                    </Typography>
                  </Box>{" "}
                  <Box
                    sx={{ mt: -2, ml: 2 }}
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" fontWeight="600">
                      $150, 790
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingDownIcon sx={{ color: "red" }} />
                      <Typography
                        sx={{ color: "red", display: "inline", fontSize: 14 }}
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
                        Down from Last Month
                      </Typography>
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: -2 }}>
                  <Box
                    sx={{
                      mt: -3,
                      mr: 2,
                      backgroundColor: "rgba(255, 215, 0, .1)",
                      borderRadius: 2,
                    }}
                  >
                    <CreditScoreIcon
                      sx={{ color: "rgb(255, 215, 0)", fontSize: 35 }}
                    />
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
                <Stack sx={{ mt: -2, ml: 2 }}>
                  <Box display="flex">
                    <Typography fontWeight="300">
                      <p>Unpaid Invoices</p>
                    </Typography>
                  </Box>{" "}
                  <Box sx={{ mt: -2 }} display="flex" alignItems="flex-start">
                    <Typography variant="h5" fontWeight="600">
                      893
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
                      backgroundColor: "rgba(255,114,118 .1 )",
                      borderRadius: 2,
                    }}
                  >
                    <ReceiptOutlinedIcon
                      sx={{ color: "rgb(255,114,118)", fontSize: 35 }}
                    />
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
                <Stack sx={{ mt: -2, ml: 2 }}>
                  <Box display="flex" sx={{}}>
                    <Typography fontWeight="300">
                      <p>Total Users</p>
                    </Typography>
                  </Box>{" "}
                  <Box sx={{ mt: -2 }} display="flex" alignItems="flex-start">
                    <Typography variant="h5" fontWeight="600">
                      10
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ display: "inline" }}>
                      <TrendingUpIcon sx={{ color: "green" }} />
                      <Typography
                        sx={{ color: "green", display: "inline", fontSize: 14 }}
                      >
                        6.4%
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
                      backgroundColor: "rgba(41, 95, 171, .1)",
                      borderRadius: 2,
                    }}
                  >
                    <PeopleAltOutlinedIcon
                      sx={{ color: "rgb(41, 95, 171)", fontSize: 35 }}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ boxShadow: 5 }}>
        <Stack
          direction="row"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack sx={{ mt: 2, ml: 2 }}>
            <Box>
              <Typography variant="h5" fontWeight="600">
                Paid VS Outstanding Invoices
              </Typography>
            </Box>
            <Box sx={{ width: 400 }}>
              <PaidUpPieChart />
            </Box>
          </Stack>
          <Stack sx={{mr:30, mt:2}}>
            <Box display="flex">
              <Typography variant="h5" fontWeight="600">
                Fees Paid through SkoolPesa
              </Typography>
            </Box>
            <Box sx={{ width: 400 }}>
              <FeePaidThroughPieChart />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Reports;
