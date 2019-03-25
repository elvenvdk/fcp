import { stack, stacks } from "../data/fixtures";
import rootReducer from "./index";
import * as actions from "../actions";

import setupTests from "../setupTests";

describe("root reducer", () => {
  it("returns initial state", () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
  });

  it("sets the main stack", () => {
    expect(
      rootReducer({}, { type: actions.SET_STACK, payload: stack })
    ).toEqual({ stack, stacks: [] });
  });

  it("loads stacks", () => {
    expect(
      rootReducer({}, { type: actions.LOAD_STACKS, payload: stacks })
    ).toEqual({ stack: {}, stacks });
  });
});
