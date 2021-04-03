import React, { Component } from "react";

export default class Youreventsrow extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.eventtype}</td>
          <td>{this.props.eventregion}</td>
          <td>{this.props.eventcity}</td>
          <td>{this.props.eventdate}</td>
          <td>{this.props.audience}</td>
        </tr>
      </React.Fragment>
    );
  }
}
