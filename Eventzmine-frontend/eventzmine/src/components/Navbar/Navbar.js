// import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import React, { Component } from "react";
import Serverservice from "../../Services/Serverservice";

export default class Navbarr extends Component {
  state = {
    input: {
      search: "",
    },
  };
  searchevent = (e) => {
    e.preventDefault();
    const data = {
      search: this.state.input.search,
    };
    console.log(this.state.input.search);
    Serverservice.search(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
    // console.log(this.state.input.search);
  };
  render() {
    const token = localStorage.getItem("token");
    const usertype = localStorage.getItem("usertype");
    if (token == undefined || token == null) {
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img src={logo} style={{ width: "50px", height: "40px" }} />
              <Navbar.Brand href="/">Eventzmine</Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/event/Plays"
                >
                  Plays
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/event/Sports"
                >
                  Sports
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/event/Comedy"
                >
                  Comedy
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/event/Movies"
                >
                  Movies
                </NavLink>
                <NavDropdown title="Corporates" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <NavLink to="/auth/corporatelogin">
                      Login as Corporate
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/auth/corporatesignup">
                      Signup as Corporate
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavLink
                  className="mr-3 text-center mt-2"
                  to="/auth/login"
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Login
                </NavLink>
                <NavLink
                  className="mr-3 text-center mt-2"
                  eventKey={2}
                  to="/auth/signup"
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Signup
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
    if (token != undefined && usertype === "Corporate") {
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <img src={logo} style={{ width: "50px", height: "40px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/corporate/yourevents"
                >
                  Your Events
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/corporate/createevent"
                >
                  Create Event
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  className="mr-3 text-center mt-2 "
                  eventKey={2}
                  to={"profile/" + localStorage.getItem("id")}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  {localStorage.getItem("username")}
                </NavLink>
                <NavLink
                  className="mr-3 text-center mt-2"
                  eventKey={2}
                  to="/auth/signup"
                  onClick={() => localStorage.clear()}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <img src={logo} style={{ width: "50px", height: "40px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  style={{ color: "white" }}
                  className="mr-3 text-center mt-2"
                  to="/user/yourtickets"
                >
                  Your Tickets
                </NavLink>

                <NavDropdown title="Events" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/event/Plays">Plays</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/event/Comedy">Comedy</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/event/Sports">Sports</NavLink>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    {" "}
                    <NavLink to="/event/Movies">Movies</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {/* <NavLink to="/">Welcome</NavLink> */}
                <NavLink
                  className="mr-3 text-center mt-2"
                  eventKey={4}
                  to="/user/profile"
                  style={{
                    color: "white",
                    fontSize: "19px",
                    fontWeight: "bold",
                  }}
                >
                  Welcome {localStorage.getItem("username")}
                </NavLink>
                <NavLink
                  className="mr-3 text-center mt-2"
                  eventKey={2}
                  to="/auth/signup"
                  onClick={() => localStorage.clear()}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

// export default function Navbarr(props) {
//   const token = localStorage.getItem("token");
//   const usertype = localStorage.getItem("usertype");
//   const searchevent = (e) => {
//     e.preventDefault();
//     const d = e.target.value;
//     console.log(d, e);
//   };
// if (token == undefined || token == null) {
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand>
//           <img src={logo} style={{ width: "50px", height: "40px" }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/event/Plays"
//             >
//               Plays
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/event/Sports"
//             >
//               Sports
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/event/Comedy"
//             >
//               Comedy
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/event/Movies"
//             >
//               Movies
//             </NavLink>
//             <NavDropdown title="Corporates" id="collasible-nav-dropdown">
//               <NavDropdown.Item>
//                 <NavLink to="/auth/corporatelogin">
//                   Login as Corporate
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <NavLink to="/auth/corporatesignup">
//                   Signup as Corporate
//                 </NavLink>
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Form inline className="mr-5">
//               <FormControl
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//               />
//               <Button
//                 type="submit"
//                 onClick={searchevent}
//                 variant="outline-success"
//               >
//                 Search
//               </Button>
//             </Form>
//             <NavLink
//               className="mr-3 text-center mt-2"
//               to="/auth/login"
//               style={{ color: "white", fontSize: "18px" }}
//             >
//               Login
//             </NavLink>
//             <NavLink
//               className="mr-3 text-center mt-2"
//               eventKey={2}
//               to="/auth/signup"
//               style={{ color: "white", fontSize: "18px" }}
//             >
//               Signup
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// if (token != undefined && usertype === "Corporate") {
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand>
//           <img src={logo} style={{ width: "50px", height: "40px" }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/corporate/yourevents"
//             >
//               Your Events
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/corporate/createevent"
//             >
//               Create Event
//             </NavLink>
//           </Nav>
//           <Nav>
//             <NavLink
//               className="mr-3 text-center mt-2 "
//               eventKey={2}
//               to={"profile/" + localStorage.getItem("id")}
//               style={{ color: "white", fontSize: "18px" }}
//             >
//               {localStorage.getItem("username")}
//             </NavLink>
//             <NavLink
//               className="mr-3 text-center mt-2"
//               eventKey={2}
//               to="/auth/signup"
//               onClick={() => localStorage.clear()}
//               style={{ color: "white", fontSize: "18px" }}
//             >
//               Logout
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand>
//           <img src={logo} style={{ width: "50px", height: "40px" }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               style={{ color: "white" }}
//               className="mr-3 text-center mt-2"
//               to="/user/yourtickets"
//             >
//               Your Tickets
//             </NavLink>

//             <NavDropdown title="Events" id="collasible-nav-dropdown">
//               <NavDropdown.Item>
//                 {" "}
//                 <NavLink to="/event/Plays">Plays</NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 {" "}
//                 <NavLink to="/event/Comedy">Comedy</NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 {" "}
//                 <NavLink to="/event/Sports">Sports</NavLink>
//               </NavDropdown.Item>

//               <NavDropdown.Divider />
//               <NavDropdown.Item>
//                 {" "}
//                 <NavLink to="/event/Movies">Movies</NavLink>
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Form inline className="mr-5">
//               <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="mr-sm-2"
//               />
//               <Button
//                 type="submit"
//                 onSubmit={searchevent}
//                 variant="outline-success"
//               >
//                 Search
//               </Button>
//             </Form>
//             <NavLink
//               className="mr-3 text-center mt-2"
//               eventKey={2}
//               to="/auth/signup"
//               onClick={() => localStorage.clear()}
//               style={{ color: "white", fontSize: "18px" }}
//             >
//               Logout
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }
// }
