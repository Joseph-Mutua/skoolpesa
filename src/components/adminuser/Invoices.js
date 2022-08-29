import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";


// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// import { twitterTabsStylesHook } from '@mui-treasury/styles/tabs';




export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}



const actions = ["View", "Send Reminder", "Print"];

const Invoices = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [tabIndex, setTabIndex] = React.useState(0);


    
    // const tabsStyles = twitterTabsStylesHook.useTabs();
    // const tabItemStyles = twitterTabsStylesHook.useTabItem();

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const columns = [
    { field: "studentName", headerName: "Student Name", width: 250 },
    { field: "studentID", headerName: "Student ID", width: 150 },

    {
      field: "dateOfAdmission",
      headerName: "Date of Admission",
      width: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 150,
    },
    {
      field: "motherName",
      headerName: "Mother's Name",
      width: 180,
    },
    {
      field: "motherContact",
      headerName: "Mother's Contact Details",
      width: 250,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        console.log(params);
        return (
          <IconButton>
            <MoreVertIcon onClick={handleOpenMenu} />
          </IconButton>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      studentName: "Julius Malema",
      studentID: "1334576589",
      dateOfAdmission: "25 Dec, 2020",
      gender: "Male",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Amanda Hoff",
      motherContact: "amandaHoff@gmail.com",
    },
    {
      id: 1,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 May, 2021",
      gender: "Male",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 11,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "15 March, 2018",
      gender: "Male",
      dateOfBirth: "11 Feb, 2002",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 12,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2003",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 1,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 13,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 April, 2022",
      gender: "Male",
      dateOfBirth: "11 Feb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 14,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 15,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 16,
      studentName: "Julius Malema",
      studentID: "1334576589",
      dateOfAdmission: "22 March, 2019",
      gender: "Male",
      dateOfBirth: "27 Nov, 2001",
      motherName: "Amanda Hoff",
      motherContact: "amandaHoff@gmail.com",
    },
    {
      id: 17,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 May, 2020",
      gender: "Male",
      dateOfBirth: "17 Nov, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 18,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Aug, 2022",
      gender: "Male",
      dateOfBirth: "11/02/1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 19,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 21,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 221,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Aug, 2022",
      gender: "Male",
      dateOfBirth: "11 Feb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 331,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 133,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 144,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 May, 2020",
      gender: "Male",
      dateOfBirth: "17 Dec, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 155,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Aug, 2022",
      gender: "Male",
      dateOfBirth: "11 FEb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 166,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 Dec, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 177,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 Sep, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 188,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Aug, 2022",
      gender: "Male",
      dateOfBirth: "11/02/1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 199,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 Jan, 2022",
      gender: "Female",
      dateOfBirth: "23 Sep, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 1111,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 Feb, 2020",
      gender: "Male",
      dateOfBirth: "17 Oct, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 1222,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "21 May, 2022",
      gender: "Male",
      dateOfBirth: "11 Feb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 1333,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 1444,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19/07/2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 1555,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Sep, 2022",
      gender: "Male",
      dateOfBirth: "21 Aug, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 1666,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 July, 2022",
      gender: "Female",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 1777,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "11 Jan, 2020",
      gender: "Male",
      dateOfBirth: "17 Oct, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 1888,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 March, 2022",
      gender: "Male",
      dateOfBirth: "11 April, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 1999,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 March, 2022",
      gender: "Female",
      dateOfBirth: "23 Sep, 2004",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 11111,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 Oct, 2018",
      gender: "Female",
      dateOfBirth: "23 Dec, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 12222,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 May, 2022",
      gender: "Male",
      dateOfBirth: "11 Feb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 13333,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 Jan, 2022",
      gender: "Female",
      dateOfBirth: "23 June, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 14444,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 April, 2020",
      gender: "Male",
      dateOfBirth: "17 Aug, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 15555,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 Dec, 2022",
      gender: "Male",
      dateOfBirth: "11 Dec, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 16666,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 Sep, 2022",
      gender: "Female",
      dateOfBirth: "23 Aug, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 1777,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 June, 2018",
      gender: "Female",
      dateOfBirth: "23 March, 2003",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 18888,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 July, 2022",
      gender: "Male",
      dateOfBirth: "11 Dec, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 19999,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 July, 2022",
      gender: "Female",
      dateOfBirth: "23/07/2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 100000,
      studentName: "Winston Churchil",
      studentID: "2344997865",
      dateOfAdmission: "17 Jan, 2020",
      gender: "Male",
      dateOfBirth: "21 Dec, 2000",
      motherName: "Sarah Tongi",
      motherContact: "sarahTongi@gmail.com",
    },
    {
      id: 123432,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "14 July, 2022",
      gender: "Male",
      dateOfBirth: "11 Feb, 1999",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 134543,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "28 June, 2022",
      gender: "Female",
      dateOfBirth: "23 July, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
    {
      id: 145654,
      studentName: "Mercie Kimani",
      studentID: "45328975783",
      dateOfAdmission: "19 July, 2018",
      gender: "Female",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Gladys Kimani",
      motherContact: "gladysKimani@gmail.com",
    },
    {
      id: 156765,
      studentName: "Kelvin Ombati",
      studentID: "8759425091",
      dateOfAdmission: "25 Dec, 2022",
      gender: "Male",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Gloria Ombatio",
      motherContact: "gloriaOmbati@gmail.com",
    },
    {
      id: 167876,
      studentName: "Wambui Macharia",
      studentID: "9043567812",
      dateOfAdmission: "25 Dec, 2022",
      gender: "Female",
      dateOfBirth: "23 Nov, 2005",
      motherName: "Everlyn Macharia",
      motherContact: "everlynmacharia@gmail.com",
    },
  ];

  return (
    <Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseMenu}
      >
        {actions.map((action) => (
          <MenuItem key={action} onClick={handleCloseMenu}>
            <Typography textAlign="center">{action}</Typography>
          </MenuItem>
        ))}
      </Menu>
      ;
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 5,
          mt: 4,
          borderColor: "#FFFFFF",
        }}
      >
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ ml: 3, mt: 4 }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 600, fontFamily: "sans-serif" }}
            >
              <p>Outstanding Invoices</p>
            </Typography>
          </Box>

          <Box
            m={1}
            mt={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  display: "flex",
                  height: "50px",
                  borderRadius: "7px",
                }}
                id="outlined-adornment-weight"
                placeholder="Search For a Student"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />{" "}
            </FormControl>

            <FormControl sx={{ m: 1, width: "26ch" }} variant="outlined">
              <OutlinedInput
                style={{
                  height: "50px",
                  borderRadius: "7px",
                }}
                id="outlined-adornment-weight"
                placeholder="Filter By Student Id"
                endAdornment={
                  <InputAdornment position="end">
                    <ArrowDropDownIcon />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />{" "}
            </FormControl>

            <Button
              sx={{
                width: "220px",
                height: "50px",
                textDecoration: "none",
                borderRadius: "7px",
              }}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create New Invoice
            </Button>
          </Box>
        </Stack>

        <Box>

        </Box>

        <Box sx={{ p: 5 }}>
          <DataGrid
            autoHeight
            // autoPageSize
            // showLastButton={true}
            GridLinesVisibility="None"
            rows={rows}
            columns={columns}
            pageSize={15}
            components={{
              ColumnSortedDescendingIcon: SortedDescendingIcon,
              ColumnSortedAscendingIcon: SortedAscendingIcon,
            }}
            rowsPerPageOptions={[5, 10, 15, 20]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Invoices;
