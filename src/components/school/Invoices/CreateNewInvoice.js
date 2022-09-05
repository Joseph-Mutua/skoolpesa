import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
  Button,
  TextField,
  Popover,
} from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from "material-ui-popup-state/hooks";

import SaveAltIcon from "@mui/icons-material/SaveAlt";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function SettingsPopover(){
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
};

const CreateNewInvoice = () => {
  const [settingsPopover, setSettingsPopover] = React.useState({
    anchorEl: null,
    child: <SettingsPopover />,
  });
  const [calendarPopover, setCalendarPopover] = React.useState({
    anchorEl: null,
    child: <calendarPopover />,
  });

  const theme = useTheme();
//   const settingsPopState = usePopupState({
//     variant: "popover",
//     popupId: "settingsPopover",
//   });

//   const calendarPopState = usePopupState({
//     variant: "popover",
//     popupId: "calendarPopover",
//   });

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

      <Box display="flex" sx={{ mt: 10, ml: 25 }}>
        <Typography variant="h6" fontWeight="500">
          Bill Information
        </Typography>
      </Box>

      <Box display="flex" sx={{ mt: 2, ml: 25 }}>
        <Typography fontWeight="300">Bill From</Typography>
      </Box>

      <Box display="flex" sx={{ mt: 2, ml: 25 }}>
        <TextField
          sx={{ width: "55ch", borderRadius: 2 }}
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
              onClose={() => setSettingsPopover({ ...settingsPopover, anchorEl: null })}
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
            <TextField
              required
              value="07 Dec 2021"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => {}}
       
                    edge="end"
                  >
                    <CalendarMonthOutlinedIcon
                      sx={{ color: `${theme.palette.primary.main}` }}
                    />
                  </IconButton>
                ),
              }}
            />
            <Popover
              id="calendarPopover"
      
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              Wooow
            </Popover>

            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    // {...bindTrigger(settingsPopState)}
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
              //   {...bindPopover(settingsPopState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            ></Popover>

            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    // {...bindTrigger(settingsPopState)}
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
              //   {...bindPopover(settingsPopState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            ></Popover>
          </Stack>

          <Stack
            component="form"
            sx={{ "& .MuiTextField-root": { width: "45ch" } }}
          >
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    // {...bindTrigger(settingsPopState)}
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
              //{...bindPopover(settingsPopState)}
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
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    // {...bindTrigger(settingsPopState)}
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
              //{...bindPopover(settingsPopState)}
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
                <p>Invoice #</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              value="INV-0000005"
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    // {...bindTrigger(settingsPopState)}
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
              //{...bindPopover(settingsPopState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {" "}
            </Popover>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateNewInvoice;
