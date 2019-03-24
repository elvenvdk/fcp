import { SET_STACK } from "../actions";

const INITIAL_STATE = {};

const Stack = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STACK:
      return action.payload;
    default:
      return state;
  }
};

export default Stack;
