import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import Results from "./Results";

import { useSelector } from "react-redux";
import Loading from "../../loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const CustomerListView = () => {
  const classes = useStyles();

  const users = useSelector((state) => state.users);
  if (users.loading) {
    return <Loading />;
  }

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Results customers={users.data} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
