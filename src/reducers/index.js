import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  login: loginReducer, 
  form: formReducer
});

export default allReducers;
