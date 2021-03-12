import React, { useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router";
const Logout = (props) => {
  useEffect(() => {
    window.localStorage.removeItem("auth");
    window.localStorage.removeItem("admin");
    axios.get("http://localhost:3000/api/admin/logout");
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
