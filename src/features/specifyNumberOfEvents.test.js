import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import NumberofEvents from "../NumberofEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("user hasn't specified an event number", () => {});

    when("the user opens the app", () => {
      AppWrapper = mount(<NumberofEvents />);
    });

    then("the user should see 32 upcoming events", () => {
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    when("user changes the number of events", () => {
      AppWrapper.find(".eventsNumberInput").simulate("change", {
        target: { value: 30 },
      });
    });

    then("the user should see the number of events specified", () => {
      const EventWrapper = AppWrapper.find(NumberofEvents);
      expect(EventWrapper.state("numberOfEvents")).toEqual(30);
    });
  });
});
