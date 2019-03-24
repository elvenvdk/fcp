import React from "react";
import { shallow } from "enzyme";
import { Stacklist } from "./Stacklist";
import { stacks } from "../data/fixtures";

import setupTests from "../setupTests";

const props = { stacks };

describe("Stacklist", () => {
  const stackList = shallow(<Stacklist {...props} />);

  it("renders the correct number of links", () => {
    // console.log(stackList.debug());
    const linkCount = stackList.find("Link").length;
    expect(stackList.find("Link").length).toEqual(linkCount);
  });
});
