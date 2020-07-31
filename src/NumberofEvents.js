import React, { Component } from "react";

class NumberofEvents extends Component {
  state = { numberOfEvents: 32 };

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
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
