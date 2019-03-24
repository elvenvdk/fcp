import { LOAD_STACKS, ADD_STACK } from "../actions";

const INITIAL_STATE = [];

const Stacks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_STACKS:
      return action.payload;
    case ADD_STACK:
      return [...state, { ...action.payload, id: state.length }];
    default:
      return state;
  }
};

export default Stacks;
