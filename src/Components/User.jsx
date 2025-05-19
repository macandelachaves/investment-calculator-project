export default function User({ values, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Intial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={values.annualInvestment}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor=""> Annual Investment</label>

          <input
            type="number"
            required
            name="annualInvestment"
            value={values.annualInvestment}
            onChange={onChange}
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
            onChange={onChange}
            value={values.expectedReturn}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            name="duration"
            onChange={onChange}
            value={values.duration}
          />
        </div>
      </div>
    </div>
  );
}
