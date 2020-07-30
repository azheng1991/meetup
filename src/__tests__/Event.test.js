import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 1487190400000,
      duration: 3600000,
      id: "lmqbqmybckbtb",
      name: "Creative Protesting",
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1594864800000,
      local_date: "2020-07-15",
      local_time: "19:00",
      rsvp_open_offset: "PT168H",
      rsvp_close_offset: "PT48H",
      updated: 1487193351000,
      utc_offset: -25200000,
      waitlist_count: 0,
      yes_rsvp_count: 0,
      is_online_event: false,
      group: {
        created: 1486184133000,
        name: "#Resist: Burnaby",
        id: 22223764,
        join_mode: "open",
        lat: 49.2599983215332,
        lon: -122.86000061035156,
        urlname: "Resist-Burnaby",
        who: "Members",
        localized_location: "Burnaby, BC",
        state: "BC",
        country: "ca",
        region: "en_US",
        timezone: "Canada/Pacific",
      },
      link: "https://www.meetup.com/Resist-Burnaby/events/lmqbqmybckbtb/",
      description:
        "<p>Let's Meet up and talk about the challenges we face and will be facing as Protesters and find creative way to get our message out there</p> ",
      visibility: "public",
      pro_is_email_shared: false,
      member_pay_fee: false,
    };

    EventWrapper = shallow(<Event event={event} />);
  });

  test("Event wrapping div is rendered", () => {
    expect(EventWrapper.find(".Event")).toHaveLength(1);
  });

  test("Event wrapping div should just contain overview", () => {
    expect(EventWrapper.find(".Event").children()).toHaveLength(1);
  });

  test("test that event__Overview is rendered", () => {
    expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
  });

  test("test that event__Overview children are rendered", () => {
    expect(EventWrapper.find(".event__Overview").children()).toHaveLength(6);
  });

  test("test that show/hide details button is rendered", () => {
    expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
  });

  test("click on button should show details", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".event__Overview button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("test that event__Details children are rendered", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find(".event__Details").children()).toHaveLength(1);
  });

  test("Mock event data is displayed", () => {
    expect(EventWrapper.find(".event__Overview--name").text()).toBe(
      "Creative Protesting"
    );
  });
});
