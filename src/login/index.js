import React, { useState } from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Page from "../components/Page";
import { Signin } from "../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserInfo } from "../actions/userInfo.actions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);

  // if (users.current) {
  //   return <Redirect to="/dashboard" />;
  // }
  if (auth.isAuth) {
    localStorage.setItem("admin", JSON.stringify(auth.user));
    localStorage.setItem("auth", auth.user.token);
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Signin({ email, password }));
    dispatch(getCurrentUserInfo());
  };
  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          {auth.error ? (
            <Alert variant="filled" severity="error">
              {auth.error}
            </Alert>
          ) : null}
          <form>
            <Box mb={3}>
              <Typography color="textPrimary" variant="h2">
                Sign in
              </Typography>
            </Box>
            <Grid container spacing={3}></Grid>
            <Box mt={3} mb={1}>
              <Typography align="center" color="textSecondary" variant="body1">
                Sign in as Admin to view your profile
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              variant="outlined"
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              onChange={(e) => setpassword(e.target.value)}
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Sign in now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default Login;
