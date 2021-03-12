import axios from "axios";

export const getAllUsers = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3001/api/allUsers")
      .then((res) => {
        dispatch({
          type: "GET_ALL_USERS_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_ALL_USERS_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "GET_ALL_USERS_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
export const getCurrentUserInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3001/api/currentUser")
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_CURRENT_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "GET_CURRENT_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
