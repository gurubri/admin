const initState = {
  data: [],
  current: null,
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "GET_ALL_USERS_SUCCESS":
      return { ...state, ...action.payload, loading: false };
    case "GET_ALL_USERS_FAILURE":
      return { ...state, ...action.payload.data };
    case "GET_ALL_USERS_REQUEST":
      return { ...state, loading: action.payload.loading };
    case "GET_CURRENT_SUCCESS":
      return {
        ...state,
        current: { ...action.payload.user },
        loading: false,
      };
    case "GET_CURRENT_FAILURE":
      return { ...state, error: { ...action.payload } };
    case "GET_CURRENT_REQUEST":
      return { ...state };
    default:
      return state;
  }
}
