import React from "react";
import { shallow } from "enzyme";
import { StackForm } from "./StackForm";

import setupTests from "../setupTests";

describe("StackForm", () => {
  const stackForm = shallow(<StackForm />);

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

  describe("and updating the title", () => {
    beforeEach(() => {
      stackForm
        .find(".stack-form-control-title")
        .simulate("change", { target: { value: "change title" } });
    });

    it("updates the title in state", () => {
      expect(stackForm.state().title).toEqual("change title");
    });
  });

  describe("when adding a new card", () => {
    beforeEach(() => {
      stackForm
        .find(".stack-form-button")
        .at(1)
        .simulate("click");
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it("adds a new card to stack", () => {
      console.log(stackForm.state());
      expect(stackForm.state().cards.length).toEqual(1);
    });
    it("renders the prompt section", () => {
      console.log(stackForm.debug());
      expect(stackForm.find(".stack-form-label-prompt").exists()).toBe(true);
    });

    it("renders the answer section", () => {
      expect(stackForm.find(".stack-form-label-answer").exists()).toBe(true);
    });

    describe("and updating the card prompt", () => {
      beforeEach(() => {
        stackForm
          .find(".stack-form-control-prompt")
          .at(0)
          .simulate("change", { target: { value: "change prompt" } });
      });

      it("updates the prompt in the state", () => {
        console.log(stackForm.state());
        expect(stackForm.state().cards[0].prompt).toEqual("change prompt");
      });
    });

    describe("and updating the card answer", () => {
      beforeEach(() => {
        stackForm
          .find(".stack-form-control-answer")
          .at(0)
          .simulate("change", { target: { value: "test answer" } });
      });

      afterEach(() => {
        stackForm.setState({ cards: [] });
      });

      it("updates teh answer in the state", () => {
        console.log(stackForm.state());
        expect(stackForm.state().cards[0].answer).toEqual("test answer");
      });
    });
  });
});
