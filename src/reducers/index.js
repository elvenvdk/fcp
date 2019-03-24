import { combineReducers } from "redux";
import Stack from "./stack";
import Stacks from "./stacks";

const rootReducer = combineReducers({
  stack: Stack,
  stacks: Stacks
});

export default rootReducer;
