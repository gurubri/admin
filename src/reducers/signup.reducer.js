const initState = {
  success: false,
  error: "",
  loading: false,
  admins: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...state, ...action.payload, loading: false };
    case "SIGNUP_FAILURE":
      return { ...state, ...action.payload.error, loading: false };
    case "SIGNUP_REQUEST":
      return { ...state, loading: action.payload.loading };
    case "ADMINS_SUCCESS":
      return { ...state, admins: [...action.payload.users], loading: false };
    case "ADMINS_FAILURE":
      return { ...state, ...action.payload, loading: false };
    case "ADMINS_REQUEST":
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
