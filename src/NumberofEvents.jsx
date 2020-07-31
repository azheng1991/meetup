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
