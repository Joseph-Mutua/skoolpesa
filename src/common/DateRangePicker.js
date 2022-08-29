import React, { useEffect } from "react";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Box,
  Typography,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
  Popper,
  Fade,
  Paper,
  TextField,
  InputAdornment
} from "@mui/material";
import { DayPicker } from "@mui/x-date-pickers/internals";
import  { SlideDirection } from "@mui/x-date-pickers/CalendarPicker/PickersSlideTransition";

const defaultIntervals = {
  today: {
    title: "Today",
    startDate: new Date(),
    endDate: new Date()
  },
  yesterday: {
    title: "Yesterday",
    startDate: moment().subtract("1", "day").toDate(),
    endDate: moment().subtract("1", "day").toDate()
  },
  last7: {
    title: "Last 7 days",
    startDate: moment().subtract("7", "days").toDate(),
    endDate: new Date()
  },
  last30: {
    title: "Last 30 days",
    startDate: moment().subtract("30", "days").toDate(),
    endDate: new Date()
  },
  thisMonth: {
    title: "This month",
    startDate: moment().startOf("month").toDate(),
    endDate: moment().endOf("month").toDate()
  },
  prevMonth: {
    title: "Previous month",
    startDate: moment().subtract(1, "month").startOf("month").toDate(),
    endDate: moment().subtract(1, "month").endOf("month").toDate()
  }
};


const RangePicker = ({
  sDate = null,
  eDate = null,
  label = "",
  id = "range-picker",
  onChange,
  intervals = defaultIntervals
}) => {
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    sDate
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    eDate
  );
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [selectedDays, setSelectedDays] = React.useState([]);
  const [month, setMonth] = React.useState(new Date());
  const [direction, setDirection] = React.useState("left");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const minDate = moment("1 January 2020").toDate();
  const maxDate = moment("1 January 2050").toDate();

  const selectDate = (d) => {
    if (!startDate && !endDate) {
      setStartDate(d);
      return;
    }

    if (!endDate) {
      if (moment(d).isBefore(startDate)) {
        setStartDate(d);
        setEndDate(startDate);
      } else {
        setEndDate(d);
      }
      return;
    }

    setStartDate(d);
    setEndDate(null);
  };

  useEffect(() => {
    if (startDate && !endDate) {
      setSelectedDays([startDate]);
    }
    if (startDate && endDate) {
      const sDays = [];
      const diff = moment(endDate).diff(startDate, "days");
      for (let i = 0; i <= diff; i++) {
        sDays.push(moment(startDate).add(i, "days").toDate());
      }

      setSelectedDays(sDays);
    }
  }, [startDate, endDate]);

  const selectInterval = (key) => {
    setStartDate(intervals[key].startDate);
    setEndDate(intervals[key].endDate);
  };

  const v =
    selectedStartDate && selectedEndDate
      ? `${moment(selectedStartDate).format("DD MMM YYYY")} - ${moment(
          selectedEndDate
        ).format("DD MMM YYYY")}`
      : "Select Date";

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TextField
        label={label}
        id={id}
        name="rangePicker"
        variant="outlined"
        onFocus={(e) => {
          setOpen(true);
          setAnchorEl(e.currentTarget);
        }}
        value={v}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ mr: 2 }}>
              <IconButton
                aria-label="open range picker"
                onClick={(e) => {
                  setOpen(true);
                  setAnchorEl(e.currentTarget);
                }}
                edge="end"
              >
                <Icon>date_range</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={12}>
              <Box sx={{ display: "flex", width: "1000px" }}>
                <Box
                  sx={{
                    minWidth: "200px",
                    mr: 1,
                    pr: 1,
                    pt: 2,
                    borderRight: "1px solid rgba(0,0,0,0.1)"
                  }}
                >
                  <List sx={{ p: 0 }}>
                    {Object.keys(intervals).map((key) => (
                      <ListItem
                        key={key}
                        disablePadding
                        onClick={() => selectInterval(key)}
                      >
                        <ListItemButton>
                          <ListItemText primary={intervals[key].title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ display: "flex", pt: 2 }}>
                  <Box sx={{ mr: 3 }}>
                    <Grid container justifyContent="space-between">
                      <Grid item sx={{ width: "40px" }}>
                        <IconButton
                          onClick={() => {
                            setDirection("right");
                            setMonth(
                              moment(month).subtract(1, "month").toDate()
                            );
                          }}
                        >
                          <Icon>arrow_left</Icon>
                        </IconButton>
                      </Grid>
                      <Grid item sx={{ textAlign: "center" }}>
                        <Typography variant="body2">
                          {moment(month).format("MMMM")}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ width: "40px" }} />
                    </Grid>
                    <DayPicker
                      currentMonth={month}
                      selectedDays={selectedDays}
                      onSelectedDaysChange={selectDate}
                      focusedDay={new Date()}
                      isMonthSwitchingAnimating
                      onFocusedDayChange={() => null}
                      onMonthSwitchingAnimationEnd={() => null}
                      reduceAnimations={false}
                      slideDirection={direction}
                      loading={false}
                      minDate={minDate}
                      maxDate={maxDate}
                    />
                  </Box>
                  <Box>
                    <Grid container justifyContent="space-between">
                      <Grid item sx={{ width: "40px" }} />
                      <Grid item sx={{ textAlign: "center" }}>
                        <Typography variant="body2">
                          {moment(month).add(1, "month").format("MMMM")}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ width: "40px" }}>
                        <IconButton
                          onClick={() => {
                            setDirection("left");
                            setMonth(moment(month).add(1, "month").toDate());
                          }}
                        >
                          <Icon>arrow_right</Icon>
                        </IconButton>
                      </Grid>
                    </Grid>
                    <DayPicker
                      currentMonth={moment(month).add(1, "month").toDate()}
                      selectedDays={selectedDays}
                      onSelectedDaysChange={selectDate}
                      focusedDay={new Date()}
                      isMonthSwitchingAnimating
                      onFocusedDayChange={() => null}
                      onMonthSwitchingAnimationEnd={() => null}
                      reduceAnimations={false}
                      slideDirection={direction}
                      loading={false}
                      minDate={minDate}
                      maxDate={maxDate}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  textAlign: "right",
                  p: 2
                }}
              >
                <Button
                  variant="contained"
                  sx={{ mr: 1 }}
                  color="inherit"
                  onClick={() => {
                    setOpen(false);
                    setStartDate(selectedStartDate);
                    setEndDate(selectedEndDate);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setOpen(false);
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                    onChange(startDate, endDate);
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </LocalizationProvider>
  );
};

export default RangePicker;
