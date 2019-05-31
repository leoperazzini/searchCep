import { LOGIN, CADASTRAR, SETUSERS } from "../consts/actions";

const INITIAL_STATE = {
  users: [],
  logged: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, logged: action.payload };
    case CADASTRAR:
      return { ...state, users: [...state.users, action.payload] };
    case SETUSERS:
      return { ...state, users: action.payload };
  }

  return state;
};
