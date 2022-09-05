import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { red, green } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const actions = ["View", "Reset Password", "Deactivate"];

function getChipProps(params) {
  if (params.value === "Active") {
    return {
      label: params.value,
      style: {
        width: "75px",
        color: green[600],
        borderColor: green[100],
        backgroundColor: green[100],
        borderRadius: 5,
      },
    };
  } else {
    return {
      label: params.value,
      style: {
        width: "75px",
        color: red[600],
        borderColor: red[100],
        backgroundColor: red[100],
        borderRadius: 5,
      },
    };
  }
}

const UserListTable = () =>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const columns = [
    {
      field: "account",
      headerName: "Account",
      width: 300,
      renderCell: (params) => {
        // console.log(params);
        return (
          <>
            <Avatar src={params.value.avatar} />
            {params.value.accountName}
          </>
        );
      },
    },
    { field: "email", headerName: "Email", width: 350 },
    {
      field: "role",
      headerName: "Role",
      width: 200,
    },
    {
      field: "createdOn",
      headerName: "Created On",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
      renderCell: (params) => {
        return (
          <Chip variant="outlined" size="medium" {...getChipProps(params)} />
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        // console.log(params.row);
        if (params.row.actions === "locked") {
          return (
            <IconButton sx={{ color: "red" }}>
              <LockOutlinedIcon />
            </IconButton>
          );
        } else {
          return (
            <IconButton>
              <MoreVertIcon onClick={handleOpenNavMenu} />
            </IconButton>
          );
        }
      },
    },
  ];

  const rows = [
    {
      id: 1000000,
      account: {
        accountName: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      email: "Harry@gmail.com",
      role: "Admin",
      createdOn: "05 Nov, 2020",
      status: "Active",
      actions: "locked",
    },

    {
      id: 1,
      account: {
        accountName: "Merv Andreix",
        avatar: "https://robohash.org/suntutdolore.png?size=50x50&set=set1",
      },
      email: "mandreix0@seattletimes.com",
      role: "Principal",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 2,
      account: {
        accountName: "Charil Sayle",
        avatar:
          "https://robohash.org/natuslaboriosamimpedit.png?size=50x50&set=set1",
      },
      email: "csayle1@nasa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 3,
      account: {
        accountName: "Errol Skowcraft",
        avatar:
          "https://robohash.org/corruptiabaliquam.png?size=50x50&set=set1",
      },
      email: "eskowcraft2@epa.gov",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 4,
      account: {
        accountName: "Rosemary Tann",
        avatar: "https://robohash.org/quoddebitisrerum.png?size=50x50&set=set1",
      },
      email: "rtann3@upenn.edu",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 5,
      account: {
        accountName: "Alix Danslow",
        avatar:
          "https://robohash.org/faciliscumquenesciunt.png?size=50x50&set=set1",
      },
      email: "adanslow4@noaa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 11,
      account: {
        accountName: "Merv Andreix",
        avatar: "https://robohash.org/suntutdolore.png?size=50x50&set=set1",
      },
      email: "mandreix0@seattletimes.com",
      role: "Principal",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 12,
      account: {
        accountName: "Charil Sayle",
        avatar:
          "https://robohash.org/natuslaboriosamimpedit.png?size=50x50&set=set1",
      },
      email: "csayle1@nasa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 13,
      account: {
        accountName: "Errol Skowcraft",
        avatar:
          "https://robohash.org/corruptiabaliquam.png?size=50x50&set=set1",
      },
      email: "eskowcraft2@epa.gov",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 14,
      account: {
        accountName: "Rosemary Tann",
        avatar: "https://robohash.org/quoddebitisrerum.png?size=50x50&set=set1",
      },
      email: "rtann3@upenn.edu",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 15,
      account: {
        accountName: "Alix Danslow",
        avatar:
          "https://robohash.org/faciliscumquenesciunt.png?size=50x50&set=set1",
      },
      email: "adanslow4@noaa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 21,
      account: {
        accountName: "Merv Andreix",
        avatar: "https://robohash.org/suntutdolore.png?size=50x50&set=set1",
      },
      email: "mandreix0@seattletimes.com",
      role: "Principal",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 22,
      account: {
        accountName: "Charil Sayle",
        avatar:
          "https://robohash.org/natuslaboriosamimpedit.png?size=50x50&set=set1",
      },
      email: "csayle1@nasa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 23,
      account: {
        accountName: "Errol Skowcraft",
        avatar:
          "https://robohash.org/corruptiabaliquam.png?size=50x50&set=set1",
      },
      email: "eskowcraft2@epa.gov",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
    {
      id: 24,
      account: {
        accountName: "Rosemary Tann",
        avatar: "https://robohash.org/quoddebitisrerum.png?size=50x50&set=set1",
      },
      email: "rtann3@upenn.edu",
      role: "Accountant",
      createdOn: "05 Nov, 2020",
      status: "Inactive",
    },
    {
      id: 25,
      account: {
        accountName: "Alix Danslow",
        avatar:
          "https://robohash.org/faciliscumquenesciunt.png?size=50x50&set=set1",
      },
      email: "adanslow4@noaa.gov",
      role: "Viewer",
      createdOn: "05 Nov, 2020",
      status: "Active",
    },
  ];

  return (
    <>
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
        onClose={handleCloseNavMenu}
      >
        {actions.map((action) => (
          <MenuItem key={action} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{action}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </>
  );
}

export default UserListTable;