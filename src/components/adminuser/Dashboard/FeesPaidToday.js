import React from "react";
import { DataGrid } from "@mui/x-data-grid";
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
      width: 200,
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
    { field: "studentID", headerName: "Student ID", width: 130 },
    {
      field: "class",
      headerName: "Class/Stream",
      width: 90,
    },
    {
      field: "feesPaid",
      headerName: "Fees Paid",
      width: 100,
    },
    {
      field: "balance",
      headerName: "Balance",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
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
      email: "Harry@gmail.com",
      status: "Active",
      transaction: "$120",
    },
  ];

  return (
    <Box sx={{mt:2}}>
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


      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </Box>
  );
}
