import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService, getAllServices } from "../actions/services.action";
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import Page from "../components/Page";
import ProductCard from "./ProductCard";
import Loading from "../loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    dispatch(getAllServices());
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const classes = useStyles();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  if (services.loading) {
    return <Loading />;
  }
  const submitForm = () => {
    if (name === "") {
      setShow(false);
    } else {
      dispatch(addService({ name, price, description }));

      setShow(false);
    }
  };

  return (
    <div>
      <Page title="Products" className={classes.root}>
        <Box
          display="flex"
          justifyContent="flex-end"
          marginTop="1rem"
          marginRight=".5rem"
        >
          <Button color="primary" variant="contained" onClick={handleShow}>
            Add service
          </Button>
        </Box>
        <Dialog
          fullScreen
          open={show}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Add service
              </Typography>
              <Button
                autoFocus
                color="secondary"
                variant="contained"
                onClick={submitForm}
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
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Service Name"
                type="text"
                variant="filled"
                fullWidth
                style={{ margin: 8 }}
                onChange={(e) => setname(e.target.value)}
              />
              <TextField
                autoFocus
                margin="normal"
                id="standard-adornment-amount"
                label="price"
                type="number"
                variant="filled"
                fullWidth
                style={{ margin: 8 }}
                onChange={(e) => setprice(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
              <TextField
                margin="normal"
                id="standard-textarea"
                label="Description"
                variant="filled"
                multiline
                rows={8}
                fullWidth
                onChange={(e) => setdescription(e.target.value)}
              />
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Box mt={3}>
          <Grid container spacing={3}>
            {services.services.length > 0
              ? services.services.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <ProductCard
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
        </Box>
      </Page>
    </div>
  );
};

export default Services;
