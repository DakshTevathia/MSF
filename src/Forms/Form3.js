import React from "react";
import "../App.css";
const Form3 = ({ prevStep, handleChange, handleUpdate }) => {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={(event) => {
            handleChange("firstName", event.target.value);
          }}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={(event) => {
            handleChange("lastName", event.target.value);
          }}
          id="lastName"
          type="text"
          name="lastName"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          onChange={(event) => {
            handleChange("address", event.target.value);
          }}
          id="address"
          type="text"
          name="address"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          onChange={(event) => {
            handleChange("city", event.target.value);
          }}
          id="city"
          type="text"
          name="city"
        ></input>
      </div>
      <div className="btnGroup">
        <button className="nextBtn" onClick={prevStep}>
          Previous
        </button>
        <button className="nextBtn" onClick={handleUpdate}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form3;
