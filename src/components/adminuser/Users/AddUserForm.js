import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Button,
  FormControl,

  Stack,
  Typography,
  TextField,
} from "@mui/material";

// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import AddIcon from "@mui/icons-material/Add";

// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const AddUserForm = () => {
  // const [username, setUsernamme] = useState("");
  // const [firstName, setFristName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [location, setLocation] = useState("");
  // const [password, setPassword] = useState("");
  // const [userRole, setUserRole] = useState("");
  // const [sendPassword, setSendPassword] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Box sx={{ boxShadow: 5, mt: 8.1 }}>
      <Box display="flex" sx={{ mt: 5, ml: 30 }}>
        <Typography variant="h5" fontWeight="600">
          <p>User Account Details</p>
        </Typography>
      </Box>
      <Stack justifyContent="center">
        {" "}
        <Stack direction="row" sx={{ ml: 30 }}>
          <Stack
            component="form"
            sx={{ mr: 10, "& .MuiTextField-root": { width: "45ch" } }}
          >
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>User Name</p>
              </Typography>
            </Box>
            <TextField
              required
              id="userName"
              label="User Name"
              placeholder="User Name"
            />
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Last Name</p>
              </Typography>
            </Box>
            <TextField
              id="lastName"
              label="Last Name"
              placeholder="Last Name"
            />{" "}
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Email</p>
              </Typography>
            </Box>
            <TextField required id="email" label="Email" placeholder="Email" />{" "}
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Password</p>
              </Typography>
            </Box>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Stack>

          <Stack
            component="form"
            sx={{ "& .MuiTextField-root": { width: "45ch"} }}
          >
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>First Name</p>
              </Typography>
            </Box>
            <TextField
              required
              id="firstName"
              label="First Name"
              placeholder="First Name"
            />
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Phone Number (Optional)</p>
              </Typography>
            </Box>
            <TextField
              id="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
            />{" "}
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Location</p>
              </Typography>
            </Box>
            <TextField
              required
              id="location"
              label="Location"
              placeholder="Location"
            />{" "}
            <Box display="flex" sx={{ mb: -1 }}>
              <Typography fontWeight="400">
                <p>Password Confirmation</p>
              </Typography>
            </Box>
            <TextField
              id="outlined-password-input"
              label="Password Confirmation"
              type="password"
            />
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ ml: 30 }}>
        {/* USER ROLE */}
        <Stack direction="row" alignItems="center">
          <Box>
            <Typography fontWeight="500">
              <p>User Role</p>
            </Typography>
          </Box>

          <Box sx={{ m: 5, width: "25ch"}}>
            {" "}
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">User Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={userRole}
                label="UserRole"
                // onChange={handleChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="platfromRegistrar">
                  Platform Registrar
                </MenuItem>
                <MenuItem value="principal">Principal</MenuItem>
                <MenuItem value="accountant">Accountant</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        {/* SEND PASSWORD */}
        <Stack direction="row" alignItems="center">
          <Box>
            <Typography fontWeight="500">
              <p>Send Password to Users's email? </p>
            </Typography>
          </Box>
          <Box>
            <Checkbox />
          </Box>

          <Box>
            <Typography fontWeight="500">
              <p>Send this password to the new user by email</p>
            </Typography>
          </Box>
        </Stack>

        <Stack sx={{ width: 100, pb: 20, pt: 5 }}>
          {" "}
          <Button variant="contained">Add User</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddUserForm;
