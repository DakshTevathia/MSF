import React from "react";
import "../App.css";

const Form1 = ({ nextStep, handleChange }) => {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(event) => {
            handleChange("email", event.target.value);
          }}
          type="email"
          name="email"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(event) => {
            handleChange("password", event.target.value);
          }}
        ></input>
      </div>
      <div className="btnGroup">
        <button className="nextBtn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Form1;
