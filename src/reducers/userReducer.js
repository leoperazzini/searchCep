import {
  LOGIN,
  CADASTRAR,
  SETUSERS,
  SETFORMATTEDADRESS,
  SETCEP,
  SETDISPLAY
} from "../consts/actions";

const INITIAL_STATE = {
  users: [],
  logged: false,
  formatted_address: "",
  cep: "",
  display: "auto"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, logged: action.payload };
    case CADASTRAR:
      return { ...state, users: [...state.users, action.payload] };
    case SETUSERS:
      return { ...state, users: action.payload };
    case SETFORMATTEDADRESS:
      return { ...state, formatted_address: action.payload };
    case SETCEP:
      return { ...state, cep: action.payload };
    case SETDISPLAY:
      return { ...state, display: action.payload };
  }

  return state;
};
