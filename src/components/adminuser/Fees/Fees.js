import React, { useState } from "react";
import { Box, Stack, Typography, Divider, useTheme, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


const Fees = () => {
  const theme = useTheme();
  const [year, setYear] = useState(0);
  const [feeType, setFeeType] = useState(null);
  const [feeAmount, setFeeAmount] = useState(null);
  const [activity, setActivity] = useState('active');

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleFeeTypeChange = (event) => {
    setFeeType(event.target.value);
  };

  const handleFeeAmountChange = (event) => {
    setFeeAmount(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 5,
        mt: 4,
        borderColor: "#FFFFFF",
      }}
    >
      <Stack
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{ mt: 2, pt: 4 }}
      >
        <Box>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: `${theme.palette.primary.darkButton}`,
              width: "800px",
              height: "6ch",
              borderRadius: 2,
              ml: -0.2,
            }}
          >
            <Box sx={{ pl: 7 }}>
              <Typography variant="h5" fontWeight="500">
                Fee Type
              </Typography>
            </Box>

            <Box sx={{ pr: 5 }}>
              <Typography>Current Session: 2020-2021</Typography>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ pr: 5 }}>
          {" "}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Year</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={year}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={0}>All Years</MenuItem>
              <MenuItem value={1}>First Year</MenuItem>
              <MenuItem value={2}>Second Yer</MenuItem>
              <MenuItem value={3}>Third Yer</MenuItem>
              <MenuItem value={4}>Fourth Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box>
        <Stack
          direction="row"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ ml: 5 }}>
            <Stack>
              <Box display="flex" sx={{  mb: -1}}>
                <Typography fontWeight="500">
                  <p>Add Fee Type</p>
                </Typography>
              </Box>
              <Box sx={{ mt: 1, borderRadius: 2 }}>
                <Box display="flex" sx={{ mb: -1 }}>
                  <Typography>
                    <p>Fee Type</p>
                  </Typography>{" "}
                </Box>

                <TextField
                  size="small"
                  sx={{ width: "30ch" }}
                  value={feeType}
                  onChange={handleFeeTypeChange}
                  id="demo-helper-text-misaligned"
                  label="Fee Type"
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Box display="flex" sx={{ mb: -1 }}>
                  <Typography>
                    <p>Amount</p>
                  </Typography>
                </Box>

                <TextField
                  value={feeAmount}
                  onChange={handleFeeAmountChange}
                  size="small"
                  sx={{ width: "30ch" }}
                  id="demo-helper-text-misaligned"
                  label="$0.00"
                />
              </Box>

              <Box>
                {" "}
                <FormControl>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ mt: 2 }}
                  >
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={activity}
                      onChange={handleActivityChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Active"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Inactive"
                      />
                    </RadioGroup>
                  </Box>
                </FormControl>
              </Box>

              <Box display="flex" sx={{mt: 5}}>
                <Button variant="contained">ADD NEW FEE</Button>
              </Box>
            </Stack>
          </Box>
          <Divider variant="middle"></Divider>
          <Box>List of All Fee Types</Box>
        </Stack>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Fees;
