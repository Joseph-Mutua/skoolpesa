import React, {useEffect} from "react";
import { Stack, Box, Button, Modal, Typography, useTheme, IconButton } from "@mui/material";
import { FormControl, OutlinedInput, Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const AdminDashboardOverview = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme()

    useEffect(() => {
      handleOpen()
    }, []);
  return (
    <Box
      sx={{
        mt: 6,
        width: "100%",
        height: 160,
        boxShadow: 2,
        borderRadius: 2,

        background:
          "linear-gradient(270deg, rgba(41,95,171,1) 0%, rgba(114,188,213,1) 50%, rgba(41,95,171,1) 100%)",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2",
            borderRadius: 2,
            borderColor: `${theme.palette.primary.main}`,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" component="h4" fontWeight="500">
              Terms & Conditions
            </Typography>
            <IconButton onClick={handleClose}>X</IconButton>
          </Stack>
          <Typography
            sx={{ mt: 2 }}
            variant="h6"
            component="h6"
            fontWeight="500"
          >
            Your Consent
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            laoreet justo. Donec velit mi, dignissim eu sem sed, euismod cursus
            augue. In hac habitasse platea dictumst. Ut est eros, aliquet in
            lacus at, ullamcorper semper dolor. Donec suscipit mollis lacus, non
            malesuada massa convallis a. Sed blandit massa sed ipsum sagittis
            porttitor. Nulla vitae vehicula augue. Maecenas at hendrerit dolor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat sollicitudin accumsan. Morbi euismod arcu non tristique
            tristique. Morbi dictum sagittis accumsan. Curabitur elementum felis
            semper eros auctor mollis. Mauris nec euismod odio, eget auctor sem.
            Quisque vitae justo nec quam luctus facilisis id ac ligula. Sed
            vulputate rutrum risus in vulputate. In malesuada augue eu turpis
            scelerisque, in consectetur massa fermentum. Praesent varius feugiat
            posuere. Praesent ex magna, mollis eget cursus eu, viverra quis
            lorem. Cras non cursus est. Mauris sit amet enim ac sem mattis
            feugiat. Phasellus sit amet magna tempus, auctor metus vel, rutrum
            urna.
          </Typography>
          <Stack direction="row" sx={{ mt: 4 }} justifyContent="space-between">
            <Button onClick={handleClose} variant="text">
              Cancel
            </Button>
            <Button onClick={handleClose} variant="contained">
              Agree
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Grid container spacing={4}>
        <Grid xs={4} md={4}>
          <Stack
            display={{ xs: "none", md: "block" }}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 6 }}
          >
            <Typography
              align="start"
              variant="h4"
              sx={{
                ml: 2,
                mt: 2,
                color: "white",
                fontWeight: 600,
              }}
            >
              School Dashboard
            </Typography>
            <Typography
              align="start"
              variant="h5"
              sx={{
                ml: 2,
                mt: 1,
                color: "white",
                fontWeight: 400,
              }}
            >
              Overview
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={8} md={8} sx={{ flexGrow: 1 }}>
          <Stack justifyContent="flex-end" alignItems="flex-end" sx={{ mr: 4 }}>
            <FormControl sx={{}}>
              <OutlinedInput
                display="block"
                sx={{
                  width: "560px",
                  mt: 10,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                }}
                id="outlined-adornment-weight"
                placeholder="Search For Something"
                aria-describedby="outlined-weight-helper-text"
                startAdornment={
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                }
                inputProps={{
                  "aria-label": "Anything",
                }}
              />{" "}
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboardOverview;
