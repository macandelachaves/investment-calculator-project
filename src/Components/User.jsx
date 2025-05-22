export default function User({ values, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={values.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor=""> Annual Investment</label>

          <input
            type="number"
            required
            name="annualInvestment"
            value={values.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
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
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={values.expectedReturn}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            name="duration"
            onChange={(event) => onChange("duration", event.target.value)}
            value={values.duration}
          />
        </div>
      </div>
    </div>
  );
}
