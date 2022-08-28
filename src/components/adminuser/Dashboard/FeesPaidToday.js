import React from "react";
import {
  DataGrid,

  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box, Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const actions = ["View", "Send Reminder", "Print"];

export default function FeesPaidToday() {
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
        console.log(params);
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


function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}



  return (
    
      <Box sx={{ mt: 2 , boxShadow: 5, p:2}}>
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
          <Box>
            <h2>Just a stupid box</h2>
          </Box>
          <div>
            <DataGrid
              autoHeight

              // autoPageSize
              // showLastButton={true}
              components={{ Toolbar: QuickSearchToolbar }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPage={15}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />
          </div>
        </Box>
      </Box>

  );
}
