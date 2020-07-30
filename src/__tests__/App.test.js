import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberofEvents from "../NumberofEvents";
import { mockEvents } from "../mock-events";
import Event from "../Event";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render number of events", () => {
    expect(AppWrapper.find(NumberofEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  test("get list of events after user selects a city", async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked("value", 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test("change state after get list of events", async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2, null);
    await AppWrapper.update();
    expect(AppWrapper.state("events")).toEqual(mockEvents.events);
  });

  test("render correct list of events", () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    });
    expect(AppWrapper.find(".Event")).toHaveLength(4);
    AppWrapper.unmount();
  });

  test("get list of events when user has not searched for a city", async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();

    // console.log("there");
    AppWrapper.find(CitySearch).instance().componentDidMount();

    // const CitySearchWrapper = AppWrapper.find(CitySearch);
    // CitySearchWrapper.instance().mount();
    // CitySearchWrapper.instance().handleItemClicked("value", 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(
      null,
      null,
      null
    );
    AppWrapper.unmount();
  });

  test("update List of events after user changes number of events", () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberofEventsWrapper = AppWrapper.find(NumberofEvents);

    NumberofEventsWrapper.instance().handleOnChange({ target: { value: 1 } });
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(
      null,
      null,
      1
    );

    AppWrapper.unmount();
  });
});
