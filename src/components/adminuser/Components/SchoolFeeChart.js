import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Typography} from "@mui/material";
import FeeChart from "../../../common/FeeChart";
import PaidUpPieChart from "../../../common/PaidUpPieChart";

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
          <Box sx={{ boxShadow: 2 }}>
            {" "}
            <Typography
              align="center"
              variant="h5"
              sx={{
                ml: 2,
                mt: 1,
                color: "black",
                fontWeight: 600,
              }}
            >
              Number of Students with Paid Up Fees
            </Typography>
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
                  fontWeight: 600,
                  letterSpacing: "0.003rem",
                }}
              >
                <bold>Number of Students <br></br>with Paid Up Fees</bold>
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
