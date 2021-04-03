import React, { Component } from "react";
import Serverservice from "../../Services/Serverservice";
import Navbarr from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Alert,
  Nav,
} from "react-bootstrap";
export default class Profile extends Component {
  state = {
    input: {
      preferedGerne: "",
      preferedLanguage: "",
      Addressl1: "",
      Addressl2: "",
      city: "",
      password: "",
      newpassword: "",
    },
    redirect: null,
    user: "",
  };
  handleCLick = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    const data = {
      preferedGerne:
        this.state.input.preferedGerne || this.state.user.preferedGerne,
      preferedLanguage:
        this.state.input.preferedLanguage || this.state.user.preferedLanguage,
      Addressl1: this.state.input.Addressl1 || this.state.user.Addressl1,
      Addressl2: this.state.input.Addressl2 || this.state.user.Addressl2,
      city: this.state.input.city || this.state.user.city,
      id: localStorage.getItem("id"),
    };
    Serverservice.profile(data)
      .then((response) => {
        // console.log(response);
        this.setState({
          redirect: "/",
        });
      })
      .catch((err) => {});
  };
  changepassword = (e) => {
    e.preventDefault();
    // console.log(this.state.input.password, this.state.input.newpassword);
    const data = {
      password: this.state.input.password,
      newpassword: this.state.input.newpassword,
      id: localStorage.getItem("id"),
    };
    Serverservice.changepassword(data)
      .then(() => {
        this.setState({
          redirect: "/",
        });
      })
      .catch((err) => {
        // console.log(err.response);
        if (err) {
          // alert("pass wrong");
        }
      });
  };
  componentDidMount() {
    const data = {
      id: localStorage.getItem("id"),
    };
    Serverservice.getprofile(data)
      .then((response) => {
        this.setState({
          user: response.data.data,
          preferedGerne: response.data.data.preferedGerne,
          preferedLanguage: response.data.data.preferedLanguage,
          Addressl1: response.data.data.Addressl1,
          Addressl2: response.data.data.Addressl2,
          city: response.data.data.city,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  handleChange = (event) => {
    let input = this.state.input;
    // console.log(event.target.value);
    input[event.target.name] = event.target.value;

    this.setState({
      input,
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
        <Container>
          <h1 className=" text-center mt-4">Profile</h1>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">User Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Change Password</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            disabled
                            placeholder={localStorage.getItem("username")}
                            required
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            placeholder={this.state.user.email}
                            disabled
                            required
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          onChange={this.handleChange}
                          placeholder={this.state.user.Addressl1}
                          name="Addressl1"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                          onChange={this.handleChange}
                          type="text"
                          placeholder={this.state.user.Addressl2}
                          name="Addressl2"
                          required
                        />
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Prefered Gerne</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            as="select"
                            name="city"
                            defaultValue="Choose..."
                            required
                          >
                            <option>Choose...</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Chennai</option>
                            <option>Kolkata</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Prefered Gerne</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            as="select"
                            name="preferedGerne"
                            defaultValue="Choose..."
                            required
                          >
                            <option>Choose...</option>
                            <option>Movies</option>
                            <option>Plays</option>
                            <option>Sports</option>
                            <option>Comedy</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Prefered Language</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            as="select"
                            name="preferedLanguage"
                            defaultValue="Choose..."
                            required
                          >
                            <option>Choose...</option>
                            <option>Hindi</option>
                            <option>English</option>
                            <option>Marathi</option>
                            <option>Urdu</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleCLick}
                      >
                        UPDATE
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder={this.state.user.email}
                          disabled
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={this.handleChange}
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="newpassword"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.changepassword}
                      >
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        {/* <Container>
          <h1 className=" text-center mt-4">Profile</h1>

          <Row>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      disabled
                      placeholder={localStorage.getItem("username")}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    placeholder="1234 Main St"
                    name="Addressl1"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    placeholder="Apartment, studio, or floor"
                    name="Addressl2"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.handleChange} name="city" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Prefered Gerne</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      as="select"
                      name="preferedGerne"
                      defaultValue="Choose..."
                    >
                      <option>Choose...</option>
                      <option>Movies</option>
                      <option>Plays</option>
                      <option>Sports</option>
                      <option>Comedy</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Prefered Language</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      as="select"
                      name="preferedLanguage"
                      defaultValue="Choose..."
                    >
                      <option>Choose...</option>
                      <option>Hindi</option>
                      <option>English</option>
                      <option>Marathi</option>
                      <option>Urdu</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleCLick}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
