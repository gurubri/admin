import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import serviceReduce from "./services.reducer";
import signupReducer from "./signup.reducer";
import carReducer from "./car.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  services: serviceReduce,
  signup: signupReducer,
  car: carReducer,
});
export default rootReducer;
