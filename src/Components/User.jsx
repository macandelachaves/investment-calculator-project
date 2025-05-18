import React, { useState } from "react";

export default function User() {
  const [values, setValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(event.target.value);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Intial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            onChange={handleChange}
            value={values.initialInvestment}
          />
        </div>
        <div>
          <label htmlFor=""> Annual Investment</label>

          <input
            type="number"
            required
            name="annualInvestment"
            onChange={handleChange}
            value={values.annualInvestment}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          {" "}
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            onChange={handleChange}
            value={values.expectedReturn}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            name="duration"
            onChange={handleChange}
            value={values.duration}
          />
        </div>
      </div>
    </div>
  );
}
