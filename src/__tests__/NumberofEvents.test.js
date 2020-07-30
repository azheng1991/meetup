import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe("<NumberofEvents /> component", () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberofEvents updateEvents={() => {}} />);
  });

  test("render textbox element", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("check number of events textbox is rendered correctly", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents input")).toHaveLength(1);
  });

  test("check default value of number of events", () => {
    expect(
      NumberofEventsWrapper.find(".numberOfEvents input").prop("value")
    ).toBe(32);
  });

  test("check changing the value of number of events", () => {
    NumberofEventsWrapper.find(".numberOfEvents input").simulate("change", {
      target: { value: 24 },
    });

    expect(NumberofEventsWrapper.state("numberOfEvents")).toBe(24);
  });

  test("show number of events input label", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});
