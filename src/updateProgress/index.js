import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { addOrder } from "../actions";

const Progress = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const no = props.match.params.id;
    const user = JSON.parse(localStorage.getItem("admin"));
    if (no == 100) {
      dispatch(
        addOrder({ status: no, mechanic: user._id, progress: "finished" })
      );
    } else {
      dispatch(addOrder({ status: no, mechanic: user._id }));
    }
  }, []);

  return <Redirect to="/dashboard" />;
};

export default Progress;
