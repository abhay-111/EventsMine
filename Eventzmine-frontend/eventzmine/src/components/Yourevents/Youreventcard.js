import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import Serverservice from "../../Services/Serverservice";
export default class Youreventcard extends Component {
  deleteevent = () => {
    console.log(this.props.id);
    const data = {
      id: this.props.id,
      userId: localStorage.getItem("id"),
    };
    Serverservice.deleteyourevent(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <div>
        <div className="event mb-3">
          <div style={{ margin: "20px 50px" }}>
            <h3>{this.props.eventname}</h3>

            <p className="text-muted">
              {this.props.eventtype}{" "}
              <span style={{ float: "right" }}>{this.props.email}</span>{" "}
            </p>

            <p>{this.props.eventdescription}</p>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Event Type</th>
                  <th>Event Region</th>
                  <th>Event City</th>
                  <th>Event Date</th>
                  <th>Expected Auidence </th>
                  <th>Ticket Price </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.eventtype}</td>
                  <td>{this.props.eventregion}</td>
                  <td>{this.props.eventcity}</td>
                  <td>{this.props.eventdate}</td>
                  <td>{this.props.audience}</td>
                  <td>{this.props.ticketprice}</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="danger" onClick={this.deleteevent}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
