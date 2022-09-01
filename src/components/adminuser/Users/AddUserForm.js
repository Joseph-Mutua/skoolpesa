import React, { useState } from "react";
import {Link, useNavigate,} from "react-router-dom"
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const AddUserForm = () => {
  const [username, setUsernamme] = useState("");
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [sendPassword, setSendPassword] = useState("");

const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Box sx={{ boxShadow: 5, mt:8.1 }}>
        <Stack direction="row" justifyContent="center">
          <h1>First Item</h1>
          <h1>Second Item</h1>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddUserForm;
