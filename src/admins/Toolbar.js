import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  IconButton,
  Typography,
  AppBar,
  Grid,
  InputAdornment,
  SvgIcon,
  MenuItem,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";

import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions";
const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Toolbar = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [services, setservices] = useState([]);
  const [password, setpassword] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const [email, setemail] = useState("");
  const service = useSelector((state) => state.services.services);
  const dispatch = useDispatch();

  console.log(service);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("lastname", lastname);
    form.append("password", password);
    form.append("profilePicture", profilePicture);
    form.append("email", email);
    form.append("services", services);
    console.log(services);
    dispatch(signup(form));
    setShow(false);
  };
  return (
    <div className={clsx(classes.root)}>
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained" onClick={handleShow}>
          Add Admin
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Dialog
        fullScreen
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Add service
            </Typography>
            <Button
              autoFocus
              color="secondary"
              variant="contained"
              // onClick={submitForm}
              style={{ marginLeft: "1rem" }}
            >
              save service
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogTitle id="form-dialog-title">Create new Service</DialogTitle>
          <DialogContentText>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Mechanic Name"
              type="text"
              variant="filled"
              fullWidth
              style={{ margin: 8 }}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Mechanic LastName"
              type="text"
              variant="filled"
              fullWidth
              style={{ margin: 8 }}
              onChange={(e) => setlastname(e.target.value)}
            />
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Mechanic Email"
              type="email"
              variant="filled"
              fullWidth
              style={{ margin: 8 }}
              onChange={(e) => setemail(e.target.value)}
            />
            <label>Services: &nbsp;</label>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              helperText="Please services offered"
              variant="filled"
              style={{ marginRight: "1rem" }}
              onChange={(e) => services.push(e.target.value)}
            >
              {service.map((option) => (
                <MenuItem key={option.name} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              variant="filled"
              helperText="Please services offered"
              style={{ marginRight: "1rem" }}
              onChange={(e) => services.push(e.target.value)}
            >
              {service.map((option) => (
                <MenuItem key={option.name} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              variant="filled"
              helperText="Please services offered"
              style={{ marginRight: "1rem" }}
              onChange={(e) => services.push(e.target.value)}
            >
              {service.map((option) => (
                <MenuItem key={option.name} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="normal"
              id="standard-password-input"
              label="Password"
              variant="filled"
              type="password"
              autoComplete="current-password"
              fullWidth
              onChange={(e) => setpassword(e.target.value)}
            />
            <TextField
              id="name"
              label="Admin picture"
              type="file"
              variant="filled"
              onChange={(e) => setprofilePicture(e.target.files[0])}
            />

            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Add Admin
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
