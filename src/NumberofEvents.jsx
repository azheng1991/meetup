import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberofEvents extends Component {
  state = { numberOfEvents: 32 };

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
        <center>
          <form>
            <label>Number of Events: </label>
            <input
              type="number"
              value={this.state.numberOfEvents}
              onChange={this.handleOnChange}
              className="eventsNumberInput"
            />
          </form>
        </center>
      </div>
    );
  }
}

export default NumberofEvents;
