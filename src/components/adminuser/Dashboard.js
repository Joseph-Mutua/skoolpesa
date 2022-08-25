import * as React from "react";
import { Stack, Box, useTheme, Typography } from "@mui/material";

const AdminDashboard = () => {
  const theme = useTheme();

  return (
    <Box

      display="flex"
      sx={{
        mt: 2,
        width: "100%",
        height: 180,
        boxShadow: 10,
        borderRadius: 2,
         background:"linear-gradient(90deg, rgba(36,93,163,1) 0%, rgba(117,170,203,1) 50%, rgba(36,93,163,1) 100%)"
      }}
    >
      <Stack
        m={2}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ border: 2, borderColor: "red" }}
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
        ;
      </Stack>
      <Box>
        <h1>Stack stop pushing me</h1>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
