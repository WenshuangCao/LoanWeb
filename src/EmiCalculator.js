import { useRef, useState } from "react";

const EmiCalculator = () => {
  const [isCalculated, setIsCalculated] = useState("false");
  const loanAmount = useRef();
  const tenure = useRef();
  const [emi, setEmi] = useState();

  const calculateHandler = (e) => {
    e.preventDefault();
    setIsCalculated(true);
    setEmi(loanAmount.current.value * tenure.current.value * 0.0003);
  };

  return (
    <>
      <button
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#EMI"
        style={{
          backgroundColor: "#248f8f",
          color: "white",
          outline: "none",
        }}
      >
        EMI Calculator
      </button>
      <div
        class="modal fade"
        id="EMI"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                EMI Calculator
              </h5>
            </div>
            <small class="text-muted text-center">
              (please check the minimum and maximum loan before checking)
            </small>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label htmlFor="Loan Type:">Loan Type:</label>
                  <select class="form-control" id="Loan Type:">
                    <option>--Select--</option>
                    <option>Small Scale Business Loans</option>
                    <option>Micro FInance</option>
                    <option>Wealth Management</option>
                    <option>Micro Finance</option>
                  </select>
                </div>
                <div class="form-group">
                  <label htmlFor="Code:">Code:</label>
                  <select class="form-control" id="Code:">
                    <option>--Select--</option>
                    <option>DI Loan</option>
                    <option>MI Loan</option>
                  </select>
                </div>
                <div class="form-group">
                  <label htmlFor="Loan Amount">Loan Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="Loan Amount"
                    ref={loanAmount}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="Tenure">Tenure</label>
                  <input
                    type="number"
                    class="form-control"
                    id="Tenure"
                    ref={tenure}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn-warning"
                  onClick={calculateHandler}
                >
                  Submit
                </button>
                <br />
                <br />
                {isCalculated && (
                  <p class="text-center text-success">
                    The estimate EMI amount is ₹{emi}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
