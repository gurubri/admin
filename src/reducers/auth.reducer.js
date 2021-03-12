const initState = {
  isAuth: false,
  loading: false,
  user: {},
  error: "",
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload, loading: false, isAuth: true };
    case "LOGIN_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "LOGIN_REQUEST":
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
