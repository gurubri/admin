import axios from "axios";

export const getAllOrders = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3001/api/getNewCars?id=${id}`).then((res) => {
      dispatch({
        type: "GET_CAR_SUCCESS",
        payload: res.data.car,
      });
      resolve();
    });
    dispatch({
      type: "GET_CAR_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const getNewOrders = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3001/api/getNewOrders`).then((res) => {
      dispatch({
        type: "GET_NEW_SUCCESS",
        payload: res.data.pending,
      });
      resolve();
    });
    dispatch({
      type: "GET_NEW_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const addOrder = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/updateCar", form)
      .then((res) => {
        dispatch({
          type: "ADD_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "ADD_FAILURE",
          payload: { error: error.response },
        });
        reject();
      });
    dispatch({
      type: "ADD_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const addOrder1 = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/updateCar2", form)
      .then((res) => {
        dispatch({
          type: "ADD_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "ADD_FAILURE",
          payload: { error: error.response },
        });
        reject();
      });
    dispatch({
      type: "ADD_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
