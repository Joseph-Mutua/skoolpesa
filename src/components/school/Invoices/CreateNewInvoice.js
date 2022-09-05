import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
  Button,
  TextField,
  MenuItem,
  Popover,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SettingsPopover() {
  return (
    <Box sx={{ width: 650, height: 400, border: 1, borderRadius: 2 }}>
      <Box display="flex" sx={{ mt: 2, ml: 2 }}>
        <Typography sx={{ fontWeight: 500 }}>Preview</Typography>
      </Box>
      <Stack direction="row">
        <Stack sx={{ mt: 2, ml: 2 }}>
          <Typography fontWeight="300">INV-0000001</Typography>
          <Typography sx={{ mt: 5 }} fontWeight="200">
            INV-0000002
          </Typography>
          <Typography sx={{ mt: 5 }} fontWeight="100">
            INV-0000003
          </Typography>
          <Typography sx={{ mt: 5 }} fontWeight="10">
            INV-0000004
          </Typography>
        </Stack>
        <Stack sx={{ ml: 8, mr: 4 }}>
          <TextField
            //   value="Rename to"
            label="Rename to"
            placeholder="Rename to"
            sx={{ width: "50ch" }}
          ></TextField>
          <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" sx={{ mt: 3 }}>
              Current Name
            </Button>

            <Button
              variant="outlined"
              sx={{ mt: 3 }}
              endIcon={<ArrowDownwardIcon />}
            >
              Delete
            </Button>
          </Stack>

          <Box display="flex" sx={{ mt: 10 }}>
            <Typography fontWeight="500">Start ascending from</Typography>
            <Typography sx={{ ml: 1 }} fontWeight="100">
              0000001
            </Typography>
          </Box>

          <Box sx={{ mt: 5, ml: 24 }}>
            <Button variant="outlined">Cancel</Button>
            <Button sx={{ ml: 4 }} variant="contained">
              Rename
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

const currencies = [
  {
    value: "USD",
    label: "$ -US Dollar",
  },
  {
    value: "EUR",
    label: "€ Euro",
  },
  {
    value: "BTC",
    label: "฿ Bitcoin",
  },
  {
    value: "JPY",
    label: "¥ Japanese Yen",
  },
  {
    value: "KSH",
    label: "Ksh - Kenyan Shillings",
  },
];

const invoiceDescriptions = [
  {
    value: "Form 1 Term 1",
    label: "Form 1 Term 1",
  },
  {
    value: "Form 1 Term 2",
    label: "Form 1 Term 2",
  },
  {
    value: "Form 1 Term 3",
    label: "Form 1 Term 3",
  },
  {
    value: "Form 2 Term 1",
    label: "Form 2 Term 1",
  },
  {
    value: "Form 2 Term 2",
    label: "Form 2 Term 2",
  },
  {
    value: "Form 2 Term 3",
    label: "Form 2 Term 3",
  },
  {
    value: "Form 3 Term 1",
    label: "Form 3 Term 1",
  },
];

const CreateNewInvoice = () => {
  const [settingsPopover, setSettingsPopover] = React.useState({
    anchorEl: null,
    child: <SettingsPopover />,
  });

  const [date, setDate] = React.useState(null);
  const [currency, setCurrency] = React.useState("USD");
  const [invoiceDescription, setInvoiceDescription] = React.useState(
    "Form 1 Term 1"
  );

  const theme = useTheme();

  return (
    <Box boxShadow="5">
      <Stack
        direction="row"
        sx={{ mt: 5, ml: 25 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight="500">
            New Invoice
          </Typography>
        </Box>

        <Box display="flex">
          <Box sx={{}}>
            <IconButton
              sx={{
                m: 2,
                border: 1,
                borderColor: `${theme.palette.primary.main}`,
                borderRadius: 1,
                color: `${theme.palette.primary.main}`,
              }}
            >
              <SaveAltIcon />
            </IconButton>
          </Box>
          <Box sx={{}}>
            <IconButton
              sx={{
                m: 2,
                border: 1,
                borderColor: `${theme.palette.primary.main}`,
                borderRadius: 1,
                color: `${theme.palette.primary.main}`,
              }}
            >
              <PrintOutlinedIcon />
            </IconButton>
          </Box>{" "}
          <Box sx={{}}>
            <Button
              sx={{
                m: 2,
                border: 1,
                borderColor: `${theme.palette.primary.main}`,
                borderRadius: 2,
                color: `${theme.palette.primary.main}`,
                height: 45,
              }}
              variant="outlined"
            >
              Save Draft
            </Button>
          </Box>
        </Box>
      </Stack>

      <Box display="flex" sx={{ mt: 5, ml: 25 }}>
        <Typography variant="h6" fontWeight="500">
          Bill Information
        </Typography>
      </Box>

      <Box display="flex" sx={{ mt: 2, ml: 25 }}>
        <Typography fontWeight="300">Bill From</Typography>
      </Box>

      <Box display="flex" sx={{ mt: 2, ml: 25 }}>
        <TextField
          sx={{ width: "70ch", borderRadius: 2 }}
          id="outlined-basic"
          label="Bill From"
          value="ST.THOMAS HIGH SCHOOL"
          variant="outlined"
        />
      </Box>

      <Box display="flex" sx={{ mt: 5, ml: 25 }}>
        <Typography variant="h6" fontWeight="500">
          Invoice details
        </Typography>
      </Box>

      <Stack justifyContent="center">
        {" "}
        <Stack direction="row" sx={{ ml: 25 }}>
          <Stack
            component="form"
            sx={{ mr: 10, "& .MuiTextField-root": { width: "30ch" } }}
          >
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(event) =>
                      setSettingsPopover({
                        ...settingsPopover,
                        anchorEl: event.currentTarget,
                      })
                    }
                    edge="end"
                  >
                    <SettingsIcon
                      sx={{ color: `${theme.palette.primary.main}` }}
                    />
                  </IconButton>
                ),
              }}
            />
            <Popover
              id="settingsPopover"
              anchorEl={settingsPopover.anchorEl}
              //   {...bindPopover(settingsPopState)}
              open={Boolean(settingsPopover.anchorEl)}
              onClose={() =>
                setSettingsPopover({ ...settingsPopover, anchorEl: null })
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {settingsPopover.child}
            </Popover>

            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Payment Due Date</p>
              </Typography>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Payment Due Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Currency</p>
              </Typography>
            </Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={(newValue) => setCurrency(newValue)}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack
            component="form"
            sx={{ "& .MuiTextField-root": { width: "30ch" } }}
          >
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Date</p>
              </Typography>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Description</p>
              </Typography>
            </Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={invoiceDescription}
              onChange={(newValue) => setInvoiceDescription(newValue)}
            >
              {invoiceDescriptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Popover
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            ></Popover>{" "}
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Balance Due</p>
              </Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Balance Due"
              value="$0.00"
              variant="outlined"
            />
          </Stack>
        </Stack>
        <Box display="flex" sx={{ ml: 25, mb: 5, mt: 5 }}>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
          <Button sx={{ ml: 4 }} variant="contained" size="large">
            Done
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CreateNewInvoice;
