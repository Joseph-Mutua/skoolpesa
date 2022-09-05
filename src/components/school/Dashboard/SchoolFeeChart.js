import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, IconButton } from "@mui/material";
import FeeBarGraph from "../../common/FeeBarGraph";
import PaidUpPieChart from "../../common/PaidUpPieChart";

import CreditScoreIcon from "@mui/icons-material/CreditScore";
import RangePicker from "../../common/DateRangePicker";

const SchoolFeeChart = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container columnSpacing={{ xs: 4, sm: 2, md: 3 }} sx={{}}>
        <Grid xs={9}>
          <Box sx={{ boxShadow: 2, p: 2, height: "550px" }}>
            <Box
              m={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                alignItems="center"
                justifyContent="space-between"
                variant="h5"
                fontWeight="600"
                sx={{
                  mt: 2,
                  color: "black",
                  letterSpacing: "0.003rem",
                }}
              >
                <p>Amount of School Fees Paid</p>
              </Typography>

              <Box sx={{ width: "400px" }}>
              
                <RangePicker />
              </Box>
            </Box>

            <Box></Box>

            <Box>
              <FeeBarGraph />
            </Box>
          </Box>
        </Grid>

        <Grid xs={3}>
          {/*  */}

          <Box sx={{ boxShadow: 2 }}>
            <Box
              component="span"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{}}
            >
              <IconButton
                variant="contained"
                color="primary"
                fontSize="large"
                sx={{ m: 2, backgroundColor: "#d3ffd8", borderRadius: 0 }}
              >
                <CreditScoreIcon />
              </IconButton>

              {/* ALIGN TWO BOXES LEFT AND RIGHT WHILE HORIZONTALLY CENTERED */}

              <Box>
                <Typography
                  align="center"
                  sx={{
                    mb: -2,
                    mr: 18,
                    color: "black",
                    fontWeight: 300,
                    letterSpacing: "0.003rem",
                  }}
                >
                  <p>Total School Fees</p>
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    mr: 20,
                    color: "black",
                    fontWeight: 300,
                    letterSpacing: "0.003rem",
                  }}
                >
                  <h2>$159790</h2>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ boxShadow: 2, mt: -2 }}>
            <Box>
              {" "}
              <Typography
                align="center"
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mt: 4,
                  height: "90px",
                  color: "black",
                  letterSpacing: "0.003rem",
                }}
              >
                <p>
                  Number of Students <br></br>with Paid Up Fees
                </p>
              </Typography>
            </Box>
            <Box sx={{ mt: -5, height: "415px" }}>
              <PaidUpPieChart />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SchoolFeeChart;
