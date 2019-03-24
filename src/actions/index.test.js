import { shallow } from "enzyme";
import * as actions from "./index";

import { stack, stacks } from "../data/fixtures";

import setupTests from "../setupTests";

describe("actions", () => {
  it("creates an action to set main stack", () => {
    const expectedAction = {
      type: actions.SET_STACK,
      payload: stack
    };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });
});
