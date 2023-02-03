import { useState } from "react";
import "./App.css";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    email: "",
    password: "",
    twitter: "",
    facebook: "",
    github: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
  });

  const nextStep = () => {
    //set Next Page
    setStep((currStep) => currStep + 1);
  };

  const prevStep = () => {
    //set prevPage
    setStep((currStep) => currStep - 1);
  };

  const handleChange = (changeKey, changedValue) => {
    //set Data here
    setData({ ...data, [changeKey]: changedValue });
  };

  const handleUpdate = () => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="totalForm">
        <div
          className="ProgressBar"
          style={{
            width: step === 0 ? "33%" : step === 1 ? "66%" : "100%",
            borderRadius: step === 2 ? "0" : "",
          }}
        ></div>
        <div className="main-form">
          <div className={`form1-container  ${step === 0 ? "active" : ""} `}>
            <Form1 nextStep={nextStep} handleChange={handleChange} />
          </div>
          <div className={`form2-container  ${step === 1 ? "active" : ""} `}>
            <Form2
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
            />
          </div>
          <div className={`form2-container  ${step === 2 ? "active" : ""} `}>
            <Form3
              prevStep={prevStep}
              handleChange={handleChange}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
