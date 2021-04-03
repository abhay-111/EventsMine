import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Youreventcard from "../Yourevents/Youreventcard";
import Navbarr from "../Navbar/Navbar";
import Youreventsrow from "../Yourevents/Youreventsrow";
import Serverservice from "../../Services/Serverservice";
import "../Yourevents/Yourevents.css";
import { Redirect } from "react-router-dom";
export default class Yourevents extends Component {
  state = {
    events: [],
    redirect: null,
  };
  checkauth = () => {
    console.log("inn");
  };

  componentDidMount() {
    const data = {
      id: localStorage.getItem("id"),
    };
    Serverservice.getyourevents(data)
      .then((response) => {
        console.log(response);
        this.setState({
          events: response.data.events,
        });
        console.log(this.state.events);
      })
      .catch((err) => {
        if (err.response.status == 502) {
          this.setState({
            redirect: "/auth/corporatelogin",
          });
        }

        console.log(err.response);
      });
  }
  render() {
    // this.checkauth();
    const token = localStorage.getItem("token");
    const usertype = localStorage.getItem("usertype");
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
    return (
      <div>
        <Navbarr />
        <Container>
          <h2 className="text-center mt-5">Your Events</h2>
          <div className="yourevents">
            {this.state.events.map((data) => {
              return (
                <Youreventcard
                  eventname={data.eventname}
                  eventtype={data.eventtype}
                  eventregion={data.eventregion}
                  eventcity={data.eventcity}
                  audience={data.audience}
                  eventdate={data.eventdate}
                  eventdescription={data.eventdescription}
                  id={data.id}
                  email={data.email}
                  ticketprice={data.ticketPrice}
                />
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}
