const initState = {
  pending: [],
  newCar: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "GET_CAR_SUCCESS":
      return { ...state, newCar: [...action.payload], loading: false };
    case "GET_CAR_REQUEST":
      return { ...state, loading: true };
    case "GET_NEW_SUCCESS":
      return { ...state, pending: [...action.payload], loading: false };
    case "GET_NEW_REQUEST":
      return { ...state, loading: true };
    default:
      return state;
  }
}
