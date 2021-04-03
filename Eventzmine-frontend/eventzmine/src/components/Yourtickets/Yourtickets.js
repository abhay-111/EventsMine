import React, { Component } from "react";
import Navbarr from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
import { Button, Table, Container, Spinner } from "react-bootstrap";
import Serverservice from "../../Services/Serverservice";
export default class Yourtickets extends Component {
  state = {
    tickets: [],
    redirect: null,
    isloading: true,
  };
  generateTicket = (id) => {
    const data = {
      userId: localStorage.getItem("id"),
      eventId: id,
    };
    Serverservice.printtickets(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  componentDidMount() {
    const data = {
      id: localStorage.getItem("id"),
    };
    Serverservice.yourtickets(data)
      .then((response) => {
        console.log(response);

        this.setState({
          tickets: response.data.ticket,
          isloading: false,
        });
      })
      .catch((err) => {
        // console.log(err.response);
        if (err.response.status == 502) {
          this.setState({
            redirect: "/auth/login",
          });
        }
      });
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            // state: {
            //   email: this.state.input.city,
            // },
          }}
        />
      );
    }
    let data = (
      <Spinner
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "50px",
          width: "50px",
        }}
        animation="border"
      />
    );
    if (!this.state.isloading) {
      data = (
        <div className="yourevents">
          {this.state.tickets.map((ticket) => {
            return (
              <div className="event mb-3">
                <div style={{ margin: "20px 50px" }}>
                  <h3>{ticket.eventname}</h3>

                  <p className="text-muted">
                    {ticket.eventtype}{" "}
                    <span style={{ float: "right" }}>{ticket.email}</span>{" "}
                  </p>
                  <h6 className="text-success">BOOOKED</h6>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Event Type</th>
                        <th>Event Region</th>
                        <th>Event City</th>
                        <th>Event Date</th>

                        <th>Amount Paid </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{ticket.eventtype}</td>
                        <td>{ticket.eventregion}</td>
                        <td>{ticket.eventcity}</td>
                        <td>{ticket.eventdate}</td>

                        <td>{ticket.totalamount}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    onClick={() => {
                      const path = "http://localhost:8080/" + ticket.ticketurl;
                      console.log(path);
                      window.open(path);
                    }}
                    variant="danger"
                  >
                    Print Ticket
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <Navbarr />
        <h1 className="text-center mb-4 mt-4">Your Tickets</h1>
        <Container>{data}</Container>
      </div>
    );
  }
}
