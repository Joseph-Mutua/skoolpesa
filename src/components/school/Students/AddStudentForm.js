import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const AddStudentForm = () => {
  const theme = useTheme();
  return (
    <Box boxShadow="5" sx={{ mt: 10 }}>
      <Stack direction="row" sx={{ ml: 20 }}>
        <Stack
          component="form"
          sx={{ "& .MuiTextField-root": { width: "55ch" }, mb: 5 }}
        >
          <Box display="flex" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="500">
              <p>Student's Details</p>
            </Typography>
          </Box>
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Student Name</p>
            </Typography>
          </Box>
          <TextField
            id="studentName"
            label="Student Name"
            placeholder="Student Name"
          />
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Student Id</p>
            </Typography>
          </Box>
          <TextField
            label="Student Id"
            placeholder="Student Id"
            autoComplete="off"
          />{" "}
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Date of Admission</p>
            </Typography>
          </Box>
          <TextField label="Date of Admission" placeholder="YYYY-MM-DD" />{" "}
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Gender</p>
            </Typography>
          </Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            // value={currency}
            // onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Date of Birth</p>
            </Typography>
          </Box>
          <TextField label="Date of Birth" placeholder="YYYY-MM-DD" />{" "}
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Mother's Name</p>
            </Typography>
          </Box>
          <TextField label="Mother's Name" placeholder="Mother's Name" />{" "}
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Mother's Phone Number / Email</p>
            </Typography>
          </Box>
          <TextField
            label="Mother's Phone Number / Email"
            placeholder="YYYY-MM-DD"
          />{" "}
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Father's Name</p>
            </Typography>
          </Box>
          <TextField label="Father's Name" placeholder="Father's Name" />{" "}
        </Stack>

        <Stack
          component="form"
          sx={{ "& .MuiTextField-root": { width: "55ch" }, mb: 5, ml: 20 }}
        >
          <Box display="flex" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="500">
              <p>Fee Detail</p>
            </Typography>
          </Box>
          <Box display="flex" sx={{ mb: -1 }}>
            <Typography fontWeight="500">
              <p>Class / Stream</p>
            </Typography>
          </Box>
          <TextField
            select
            label="Class / Stream"
            // value={currency}
            // onChange={handleChange}
          >
            <MenuItem value="male">Form 1</MenuItem>
            <MenuItem value="female">Form 2</MenuItem>
            <MenuItem value="male">Form 3</MenuItem>
            <MenuItem value="female">Form 4</MenuItem>
          </TextField>

          <Box display="flex" sx={{ mt: 4 }}>
            <Button sx={{ borderRadius: 2 }} variant="contained" size="large">
              Save Fee Detail
            </Button>
          </Box>

          <Box display="flex" sx={{ mt: 4 }}>
            <Box
              sx={{
                width: 600,
                height: 200,
                backgroundColor: `#E0E8EB`,
                borderRadius: 2,
              }}
            >
              <Box display="flex" m={2}>
                <Typography variant="h6" fontWeight="600">
                  Bulk Add Instructions
                </Typography>
              </Box>
              <Box display="flex" sx={{ mt: 2, ml: 2 }}>
                <Typography>
                  Need to add multiple Students? It is recommended that you do
                  that
                </Typography>
              </Box>
              <Box display="flex" sx={{ ml: 2 }}>
                <Typography>
                  using the Bulk import button below to import data from CSV
                  file.
                </Typography>
              </Box>
              <Box display="flex" sx={{ ml: 2, mt: 2 }}>
                <Typography
                  component={Link}
                  onClick={() => {}}
                  sx={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Click here for more instructions
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box display="flex" sx={{ mt: 4 }}>
            <Button
              sx={{ borderRadius: 2 }}
              startIcon={<SaveAltIcon />}
              variant="contained"
              size="large"
            >
              Bulk import
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AddStudentForm;
