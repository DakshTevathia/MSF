import React from "react";
import "../App.css";

const Form2 = ({ prevStep, nextStep, handleChange }) => {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="twitter">Twitter</label>
        <input
          id="twitter"
          onChange={(event) => {
            handleChange("twitter", event.target.value);
          }}
          type="text"
          name="twitter"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="facebook">Facebook</label>
        <input
          onChange={(event) => {
            handleChange("facebook", event.target.value);
          }}
          id="facebook"
          type="text"
          name="facebook"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="github">Github</label>
        <input
          id="github"
          type="text"
          onChange={(event) => {
            handleChange("github", event.target.value);
          }}
          name="github"
        ></input>
      </div>
      <div className="btnGroup">
        <button className="nextBtn" onClick={prevStep}>
          Previous
        </button>
        <button className="nextBtn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Form2;
