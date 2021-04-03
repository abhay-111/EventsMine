import React, { Component } from "react";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import Navbarr from "../Navbar/Navbar";
import Serverservice from "../../Services/Serverservice";
import logo from "../../logo.svg";
import { Redirect } from "react-router-dom";
export default class Verifyotp extends Component {
  state = {
    input: { otp: "" },
    redirect: null,
  };
  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  };
  resendOtp = () => {
    console.log("asdj");
    const data = {
      email: localStorage.getItem("email"),
    };
    Serverservice.resendOtp(data)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  handleClick = (e) => {
    e.preventDefault();
    const data = {
      otp: this.state.input.otp,
      email: localStorage.getItem("email"),
    };
    Serverservice.corporateverifyOtp(data)
      .then((response) => {
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("usertype", response.data.usertype);
        this.setState({ redirect: "/" });
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            state: {
              email: this.state.input.email,
            },
          }}
        />
      );
    }
    return (
      <div>
        <Navbarr />
        <Container fluid>
          <Row className="justify-content-md-center mt-5">
            <Col></Col>
            <Col xs={4}>
              <h1 className="text-center">Almost There !!</h1>
              <h3 className="mt-5">Verify Your Email</h3>
              <p className="mt-3">
                Good to have you in aou community sign up and enjoy all the
                advantages. Good to have you in aou community sign up and enjoy
                all the advantages. Good to have you in aou community sign up
                and enjoy all the advantages.
              </p>
            </Col>
            <Col xs={1}></Col>
            <Col xs={4}>
              <img src={logo} style={{ width: "150px", marginLeft: "30%" }} />
              <Form className=" ">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Enter Otp</Form.Label>
                  <Form.Control
                    type="text"
                    name="otp"
                    required
                    onChange={this.handleChange}
                    placeholder="Eg:- 125533"
                  />
                </Form.Group>

                <Button variant="dark" type="submit" onClick={this.handleClick}>
                  Submit
                </Button>
                <span className="ml-3">
                  Did'nt recieved an Otp?
                  <Button onClick={this.resendOtp}>Resend Otp</Button>
                </span>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
