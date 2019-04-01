import { LOGIN } from "../consts/actions";

const INITIAL_STATE = {
  access_token: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, access_token: action.payload };
  }

  return state;
};
