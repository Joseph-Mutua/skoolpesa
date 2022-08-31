import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import { red, green } from "@mui/material/colors";
import { Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material";

function getChipProps(params) {
  if (params.value === "Active") {
    return {
      label: params.value,
      style: {
        width: "75px",
        color: green[600],
        borderColor: green[100],
        backgroundColor: green[100],
        borderRadius: "none",
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
        borderRadius: "none",
      },
    };
  }
}



const FeeTypesTable = () => {
  const theme = useTheme();
const columns = [
  {
    field: "feeType",
    headerName: "Fee Type",

    width: 150,
    description: "Row number",
    renderCell: (params) => {
      return (
        <Typography sx={{ textTransform: "uppercase" }}>
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",

    width: 150,
  },

  {
    field: "status",
    headerName: "Status",

    width: 150,
    description: "Status",
    headerAlign: "left",
    renderCell: (params) => {
      return (
        <Chip variant="outlined" size="medium" {...getChipProps(params)} />
      );
    },
  },
  {
    field: "createdOn",
    headerName: "Created On",

    width: 150,
    headerAlign: "left",
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ color: `${theme.palette.primary.main}`, fontSize: "small" }}
            onClick={() => console.log(params.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ color: "red", fontSize: "small" }}
            onClick={() => console.log(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      );
    },
  },
];
  const rows = [
    {
      id: 1,
      feeType: "Exams",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 2,
      feeType: "Activity",
      amount: "$60",
      status: "Inactive",
      createdOn: "11-05-2019",
    },
    {
      id: 3,
      feeType: "Admission",
      amount: "$60",
      status: "Inactive",
      createdOn: "11-05-2019",
    },
    {
      id: 4,
      feeType: "Library",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 5,
      feeType: "Sports",
      amount: "$60",
      status: "Inactive",
      createdOn: "11-05-2019",
    },
    {
      id: 6,
      feeType: "Sports",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 1,
      feeType: "Exams",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 2,
      feeType: "Activity",
      amount: "$60",
      status: "Inactive",
      createdOn: "11-05-2019",
    },
    {
      id: 3,
      feeType: "Admission",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 4,
      feeType: "Library",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
    {
      id: 5,
      feeType: "Sports",
      amount: "$60",
      status: "Inactive",
      createdOn: "11-05-2019",
    },
    {
      id: 6,
      feeType: "Sports",
      amount: "$60",
      status: "Active",
      createdOn: "11-05-2019",
    },
  ];

  return (
    <Box style={{ height: 600, width: "800px" }}>
      <DataGrid
        checkboxSelection
        hideFooter
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default FeeTypesTable;
