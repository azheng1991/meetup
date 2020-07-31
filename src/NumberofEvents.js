import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberofEvents extends Component {
  state = { numberOfEvents: 32, errorText: "" };

  handleOnChange = (event) => {
    const value = event.target.value;
    if (value < 1) this.setState({ errorText: "Please enter a valid number" });
    else this.setState({ errorText: "" });
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label>Number of Events: </label>
        <input
          value={this.state.numberOfEvents}
          onChange={this.handleOnChange}
          className="eventsNumberInput"
        />
      </div>
    );
  }
}

export default NumberofEvents;
