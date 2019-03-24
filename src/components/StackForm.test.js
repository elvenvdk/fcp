import React from "react";
import { shallow } from "enzyme";
import { StackForm } from "./StackForm";

import setupTests from "../setupTests";

const setup = {
  title: "",
  cards: []
};

describe("StackForm", () => {
  const stackForm = shallow(<StackForm {...setup} />);

  it("renders a link home", () => {
    expect(
      stackForm
        .find("h4")
        .first()
        .text()
    ).toEqual("Home");
  });

  it("renders the form title", () => {
    expect(
      stackForm
        .find("h4")
        .at(1)
        .text()
    ).toEqual("Create a new stack");
  });

  it("renders a Form component", () => {
    console.log(stackForm.debug());
    expect(stackForm.find(".stack-form").exists()).toBe(true);
  });

  it("renders a button to add a new card", () => {
    expect(
      stackForm
        .find(".stack-form-button")
        .at(0)
        .props().children
    ).toEqual("Save and Add to Stack");
  });

  it("renders a button to submit the form", () => {
    expect(
      stackForm
        .find(".stack-form-button")
        .at(1)
        .props().children
    ).toEqual("Add Card");
  });
});
