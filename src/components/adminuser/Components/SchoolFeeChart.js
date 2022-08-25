import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FeeChart from "../../../common/FeeChart";
import PaidUpPieChart from "../../../common/PaidUpPieChart";

import CreditScoreIcon from "@mui/icons-material/CreditScore";

const SchoolFeeChart = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container columnSpacing={{ xs: 4, sm: 2, md: 3 }} sx={{}}>
        <Grid xs={9}>
          <Box sx={{ m: 0, boxShadow: 2, p: 5, height: "500px" }}>
            <Box>The Chart I keep telling you about</Box>
            <FeeChart />
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
          <Box sx={{ boxShadow: 2, mt: 2 }}>
            <Box>
              {" "}
              <Typography
                align="center"
                variant="h5"
                sx={{
                  ml: 2,
                  mt: 1,
                  color: "black",
                  
                  letterSpacing: "0.003rem",
                }}
              >
                <h4>
                  Number of Students <br></br>with Paid Up Fees
                </h4>
              </Typography>
            </Box>  
            <PaidUpPieChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SchoolFeeChart;
