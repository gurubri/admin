import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { addOrder1 } from "../actions";

const Addorder = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    const user = JSON.parse(localStorage.getItem("admin"));
    dispatch(addOrder1({ id, mechanic: user._id, progress: "started" }));
  }, []);

  return <Redirect to="/orders" />;
};

export default Addorder;
