import axios from "axios";

export const getAllServices = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3001/api/allServices")
      .then((res) => {
        dispatch({
          type: "GET_SERVICE_SUCCESS",
          payload: res.data.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_SERVICE_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "GET_SERVICE_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const addService = ({ name, price, description }) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/createService", {
        name,
        price,
        description,
      })
      .then((res) => {
        dispatch({
          type: "CREATE_SERVICE_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_SERVICE_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "CREATE_SERVICE_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const deleteService = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/deleteService?id=${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_SERVICE_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_SERVICE_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "DELETE_SERVICE_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
