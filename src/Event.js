import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    return (
      <div className="Event">
        <div className="event__Overview">
          <p className="event__Overview--localTime">
            {this.props.event.local_time}
          </p>
          <p className="event__Overview--localDate">
            {this.props.event.local_date}
          </p>
          <p className="event__Overview--name">{this.props.event.name}</p>
          {this.props.event.group && this.props.event.group.name && (
            <p className="event__Overview--groupName">
              {this.props.event.group.name}
            </p>
          )}
          <p className="event__Overview--peopleGoing">
            {this.props.event.yes_rsvp_count}
          </p>
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}
          >
            show details
          </button>
        </div>
        {this.state.showDetails && (
          <div className="event__Details">
            <p className="event__Details--description">
              {this.props.event.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
