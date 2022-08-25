import * as React from "react";
import { Stack, Box, useTheme, Typography } from "@mui/material";

const AdminDashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 128,
          boxShadow: 10,
          backgroundColor: `${theme.palette.primary.main}`,
        },
      }}
    >
      <Stack
        m={1}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ bgcolor: "red" }}
      >
        <Typography
          align="left"
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
          align="left"
          variant="h4"
          sx={{
            ml: 2,
            mt: 2,
            color: "white",
            fontWeight: 600,
          }}
        >
          Overview
        </Typography>
        ;
      </Stack>
    </Box>
  );
};

export default AdminDashboard;
