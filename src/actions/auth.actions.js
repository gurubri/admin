import axios from "axios";

export const Signin = ({ email, password }) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/admin/signin", { email, password })
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "LOGIN_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
