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

  const validValue = values.duration > 0;

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
      <User values={values} onChange={handleChange} />

      {validValue && <Results values={values} />}
      {!validValue && (
        <p className="center"> Please, enter a duration greater than zero</p>
      )}
    </main>
  );
}

export default App;
