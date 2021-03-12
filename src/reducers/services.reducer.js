const initState = {
  services: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "GET_SERVICE_SUCCESS":
      return { ...state, services: [...action.payload], loading: false };
    case "GET_SERVICE_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "GET_SERVICE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SERVICE_SUCCESS":
      return { ...state, ...action.payload, loading: false };
    case "CREATE_SERVICE_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "CREATE_SERVICE_REQUEST":
      return { ...state, loading: true };
    case "DELETE_SERVICE_SUCCESS":
      return { ...state, loading: false };
    case "DELETE_SERVICE_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "DELETE_SERVICE_REQUEST":
      return { ...state, loading: true };
    default:
      return state;
  }
}
