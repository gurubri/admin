import React, { useEffect, useState } from "react";
// import { Outlet } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getCurrentUserInfo,
} from "../../actions/userInfo.actions";
import { getAllOrders, getAllServices, getNewOrders } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = (props) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const users = useSelector((state) => state.users);
  const user = JSON.parse(localStorage.getItem("admin"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getCurrentUserInfo());
    if (user) {
      dispatch(getAllOrders(user._id));
    }
    dispatch(getAllServices());

    dispatch(getNewOrders());
  }, []);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      {users.current && user ? (
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          auth={users}
        />
      ) : null}

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
