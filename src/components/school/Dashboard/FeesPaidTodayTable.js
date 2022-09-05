import React from "react";
import { DataGrid, } from "@mui/x-data-grid";
// import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import {
  Box,
  Stack,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  FormControl,OutlinedInput,InputAdornment
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";


import SearchIcon from "@mui/icons-material/Search";

export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}
const actions = ["View", "Send Reminder", "Print"];

export default function FeesPaidTodayTable() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const columns = [
    {
      field: "studentName",
      headerName: "Student Name",
      width: 450,
      renderCell: (params) => {
        // console.log(params);
        return (
          <>
            <Avatar src={params.value.avatar} />
            {params.value.studentName}
          </>
        );
      },
    },
    { field: "studentID", headerName: "Student ID", width: 250 },
    {
      field: "class",
      headerName: "Class/Stream",
      width: 250,
    },
    {
      field: "feesPaid",
      headerName: "Fees Paid",
      width: 200,
    },
    {
      field: "balance",
      headerName: "Balance",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        // console.log(params);
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
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
    {
      id: 1,
      studentName: {
        studentName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      studentID: 1,
      class: "Form 4 N",
      feesPaid: "$1200",
      balance: "$15.50",
    },
  ];

  // function QuickSearchToolbar() {
  //   return (
  //     <Box
  //       sx={{
  //         p: 0.5,
  //         pb: 0,
  //       }}
  //     >
  //       <GridToolbarQuickFilter />
  //     </Box>
  //   );
  // }

  return (
    <Box sx={{ mt: 2, boxShadow: 2, p: 2 }}>
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

      <Box>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ ml: 3 }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 600, fontFamily: "sans-serif" }}
            >
              <p>Fees Paid Today</p>
            </Typography>
          </Box>

          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FormControl
              sx={{
                
                width: "60ch",

                backgroundColor: "rgba(227, 250, 251, .5)",
              }}
              variant="outlined"
            >
              <OutlinedInput
                style={{
                  height: "50px",
                  borderRadius: "7px",
                }}
                id="outlined-adornment-weight"
                placeholder="Filter By Student's Name, Student Id or Class/Stream"
                startAdornment={
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                }
 
              />
            </FormControl>
          </Box>
        </Stack>
        <div>
          <DataGrid
            pagination
            autoHeight
            // autoPageSize
            // showLastButton={true}
            components={{
              // Toolbar: QuickSearchToolbar,
              ColumnSortedDescendingIcon: SortedDescendingIcon,
              ColumnSortedAscendingIcon: SortedAscendingIcon,
            }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[5, 10, 15, 20]}
          />
        </div>
      </Box>
    </Box>
  );
}
