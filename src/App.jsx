import User from "./Components/User.jsx";
import Results from "./Components/Results.jsx";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(inputIdentifier, newValue) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: newValue,
      };
    });
    console.log(event.target.value);
  }

  return (
    <main>
      <div>
        <User values={values} onChange={handleChange} />
      </div>{" "}
      <div>
        <Results values={values} />
      </div>
    </main>
  );
}

export default App;
