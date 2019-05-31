import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  userReducer,
  form: formReducer
});

export default allReducers;
