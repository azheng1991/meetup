import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberofEvents from "./NumberofEvents";
import { getEvents } from "./api";

class App extends Component {
  state = { events: [], is_mounted: false, lat: null, lon: null, page: null };

  componentDidMount() {
    this.is_mounted = true;
  }
  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((response) =>
        this.setState({ events: response, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((response) =>
        this.setState({ events: response, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(
        (response) => {
          if (this.is_mounted) {
            this.setState({ events: response });
          }
        }
      );
    }
  };

  componentWillUnmount() {
    this.is_mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberofEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
