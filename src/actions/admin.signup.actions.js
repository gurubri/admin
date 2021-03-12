import axios from "axios";

export const signup = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/admin/signup", form)
      .then((res) => {
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: { error: error.response },
        });
        reject();
      });
    dispatch({
      type: "SIGNUP_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
export const getAdmins = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3001/api/getAdmins")
      .then((res) => {
        dispatch({
          type: "ADMINS_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "ADMINS_FAILURE",
          payload: { error: error.response },
        });
        reject();
      });
    dispatch({
      type: "ADMINS_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
