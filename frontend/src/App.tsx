import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [Values, setValues] = useState({
    name: "",
    number: "",
    address: "",
    state: "",
    city: "",
    message: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };
  const submit = async () => {
    if (
      Values.name == "" ||
      Values.number == "" ||
      Values.address == "" ||
      Values.state == "" ||
      Values.city == "" ||
      Values.message == ""
    ) {
      alert("all fields are required");
    } else {
      await axios
        .post("http://localhost:1000/api/v1/post", Values)
        .then((res) => {
          alert(res.data.message);
        });
      setValues({
        name: "",
        number: "",
        address: "",
        state: "",
        city: "",
        message: "",
      });
    }
  };
  return (

    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-contact px-3 py-2 ">
        <h1>
          Contact Form
        </h1>
        <hr />

        <div className="form-floating mb-3 cont-form d-flex flex-column justify-content-between ">
          <div>
            <h5>Name</h5>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="form-control"
              value={Values.name}
              onChange={change}
            />
          </div>
          <div>
            <h5>Mobile Number</h5>
            <input 
              type="text"
              placeholder="Enter your Phone Number"
              className="form-control"
              name="number"
              value={Values.number}
              onChange={change}
            />
          </div>
          <div>
            <h5>Address</h5>
            <textarea
              placeholder="Your Address"
              name="address"
              className="form-control"
              value={Values.address}
              onChange={change}
            />
          </div>

          <div className="imp-data d-flex justify-content-between">
            <div>
              <h5>state</h5>
              <input 
                id="imp"
                type="text"
                placeholder="Your State"
                name="state"
                className="form-control m-1"
                value={Values.state}
                onChange={change}
              />
            </div>
            <div>
              <h5>city</h5>
              <input
                id="imp"
                type="text"
                placeholder="Your City"
                name="city"
                className="form-control"
                value={Values.city}
                onChange={change}
              />
            </div>
          </div>
          <div>
            <h5>message</h5>
            <textarea
              placeholder="Type your Message"
              name="message"
              className="form-control"
              value={Values.message}
              onChange={change}
            />
          </div>
          <div>
            <button className="btn btn-outline-success " onClick={submit}>
              SAVE INFO IN DB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
