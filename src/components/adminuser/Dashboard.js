import * as React from "react";
import { Stack, Box,  Typography } from "@mui/material";
import { FormControl, OutlinedInput, Grid } from "@mui/material";

const AdminDashboard = () => {

  return (
    <Box
      sx={{
        mt: 6,
        width: "100%",
        height: 160,
        boxShadow: 10,
        borderRadius: 2,

        background:
          "linear-gradient(90deg, rgba(36,93,163,1) 0%, rgba(117,170,203,1) 50%, rgba(36,93,163,1) 100%)",
      }}
    >
      <Grid container spacing={4}>
        <Grid xs={4} md={4}>
          <Stack
            display={{ xs: "none", md: "block" }}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 6 }}
          >
            <Typography
              align="start"
              variant="h4"
              sx={{
                ml: 2,
                mt: 2,
                color: "white",
                fontWeight: 600,
              }}
            >
              School Dashboard
            </Typography>
            <Typography
              align="start"
              variant="h5"
              sx={{
                ml: 2,
                mt: 1,
                color: "white",
                fontWeight: 400,
              }}
            >
              Overview
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={8} md={8} sx={{ flexGrow: 1 }}>
          <Stack justifyContent="flex-end" alignItems="flex-end" sx={{ mr: 4 }}>
            <FormControl sx={{  }}>
              <OutlinedInput
              display="block"
                sx={{
                  width: "560px",
                  mt: 10,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                }}
                id="outlined-adornment-weight"
                placeholder="Search For a School"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "Anything",
                }}
              />{" "}
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
