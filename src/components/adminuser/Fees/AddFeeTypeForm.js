import React, {useState} from "react";
import {Box, Button, Typography, TextField, FormControl} from "@mui/material"

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


const AddFeeTypeForm = () => {
  const [feeType, setFeeType] = useState(null);
  const [feeAmount, setFeeAmount] = useState(null);
  const [activity, setActivity] = useState("active");

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };



  const handleFeeTypeChange = (event) => {
    setFeeType(event.target.value);
  };

  const handleFeeAmountChange = (event) => {
    setFeeAmount(event.target.value);
  };

return (
  <>
    <Box display="flex" sx={{ mb: -1 }}>
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
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
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
      <Box display="flex" sx={{ mt: 5 }}>
        <Button variant="contained">ADD NEW FEE</Button>
      </Box>
    </Box>
  </>
);
}

export default AddFeeTypeForm;