import axios from "axios";
const BASE_URL = "https://stark-fortress-38086.herokuapp.com/";
class Serverservice {
  signup = (data) => {
    return axios.post(BASE_URL + "auth/signup", data);
  };

  profile = (data) => {
    return axios.post(BASE_URL + "user/profile", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  changepassword = (data) => {
    return axios.post(BASE_URL + "user/changepassword", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  homeDetails = () => {
    return axios.get(BASE_URL + "home/homeDetails");
  };
  search = (data) => {
    return axios.post(BASE_URL + "search", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  getprofile = (data) => {
    return axios.post(BASE_URL + "user/getprofile", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };

  yourtickets = (data) => {
    return axios.post(BASE_URL + "user/yourtickets", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  printtickets = (data) => {
    return axios.post(BASE_URL + "user/printticket", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  login = (data) => {
    // console.log("servic");
    // console.log(data);

    return axios.post(BASE_URL + "auth/login", data);
  };
  corporatesignup = (data) => {
    return axios.post(BASE_URL + "auth/corporatesignup", data);
  };
  eventdetail = (data) => {
    return axios.get(BASE_URL + "event/eventdetail/" + data);
  };
  bookticket = (data) => {
    return axios.post(BASE_URL + "event/booktickets", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  deleteyourevent = (data) => {
    console.log(data);
    return axios.post(BASE_URL + "corporate/deleteyourevent", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  eventbycategory = (data) => {
    console.log(data);
    return axios.get(BASE_URL + "event/eventbycategory/" + data);
  };
  getyourevents = (data) => {
    return axios.post(BASE_URL + "corporate/getyourevents", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  corporatelogin = (data) => {
    // console.log("servic");
    // console.log(data);

    return axios.post(BASE_URL + "auth/corporatelogin", data);
  };
  createEvent = (data) => {
    return axios.post(BASE_URL + "corporate/createevent", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        //"Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    });
  };
  verifyOtp = (data) => {
    return axios.post(BASE_URL + "auth/verifyOtp", data);
  };
  corporateverifyOtp = (data) => {
    console.log(data);
    return axios.post(BASE_URL + "auth/corporateverifyOtp", data);
  };
  resendOtp = (data) => {
    return axios.post(BASE_URL + "auth/resendOtp", data);
  };
}
export default new Serverservice();
