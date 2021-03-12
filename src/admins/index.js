import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../components/Page";
import ToolBar from "./Toolbar";
import { Box, Container, makeStyles } from "@material-ui/core";
import { getAllServices } from "../actions/services.action";
import { getAdmins } from "../actions";
import Results from "./Results";
import Loading from "../loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Admin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const signup = useSelector((state) => state.signup);
  console.log(signup);
  useEffect(() => {
    dispatch(getAllServices());
    dispatch(getAdmins());
  }, []);

  if (signup.loading) {
    return <Loading />;
  }

  return (
    <div>
      <Page title="Customers" className={classes.root}>
        {services.services ? <ToolBar /> : null}

        <Container maxWidth={false}>
          <Box mt={3}>
            <Results customers={signup.admins} />
          </Box>
        </Container>
      </Page>
    </div>
  );
};

export default Admin;
