import User from "./Components/User.jsx";
import Results from "./Components/Results.jsx";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
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
