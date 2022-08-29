import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";

import { Link } from "react-router-dom";

const pages = ["Dashboard", "Students", "Invoices", "Fees", "Reports", "Users"];
const settings = ["View Profile", "Logout", "Deactivate Account"];

const AdminNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* SKOOLPESA LOGO ON SCREEN SIZE ABOVE MD */}

          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              alt="SkoolPesa"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              style={{ width: "150px", height: "30px", marginRight: "20px" }}
            ></img>
          </Box>

          {/* MENU BUTTONS ICON ON DROPDOWN */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* MENU APPBAR ICON ON SCREEN BELOW MD */}

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* MENU BUTTONS ON SCREEN BELOW MD */}

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/admin/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* SKOOLPESA LOGO ON SCREEN SIZE BELOW MD*/}

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <img
              alt="SkoolPesa"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              style={{
                width: "150px",
                height: "30px",
                justify: "center",
                marginRight: "80px",
                marginLeft: "50px",
              }}
            ></img>
          </Box>

          {/* MENU BUTTONS ON SCREEN ABOVE MD */}

          <Box
            sx={{
              textTransform: "none",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "1rem",
                  textTransform: "none",
                  color: "white",
                  my: 2,
                  mr: 2,
                  display: "block",
                  "&:hover,&:focus": {
                    
                    backgroundColor: "rgba(255,255,255, .1)",
                  },
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/admin/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {/* NOTIFICATION, TUNE AND PROFILE ICONS  */}

          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <IconButton sx={{ color: "white" }}>
              <CircleNotificationsOutlinedIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <TuneOutlinedIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Joseph Mutua" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {/* PROFILE SETTINGS ON DROP DOWN */}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: "flex-end", xs: "none", md: "flex", ml: 1 }}>
            <p style={{ fontSize: "1rem", fontWeight: 200, marginBottom: -10 }}>
              Joseph Mutua
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 100 }}>Administrator</p>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AdminNav;