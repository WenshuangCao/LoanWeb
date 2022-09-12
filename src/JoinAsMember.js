import { useState, useEffect } from "react";
import axios from "axios";

const JoinAsMember = () => {
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [usernameMessage, setUsernameMessage] = useState();
  const [mobileMessage, setMobileMessage] = useState();
  const [passwordMessage, setPasswordMessage] = useState();
  const [message, setMessage] = useState();
  const [allValid, setAllValid] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const [validMobile, setValidMobile] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [isTouched, setIstouched] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/db").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const signUpHandler = (e) => {
    e.preventDefault();
    if (username.trim().length >= 4) {
      setValidUsername(true);
    } else {
      setUsernameMessage("Username must contain minimum of 4 characters");
      setValidUsername(false);
    }
    if (mobile.length === 10) setValidMobile(true);
    else {
      setMobileMessage("Mobile number should contain 10 digits");
      setValidMobile(false);
    }
    if (password.length >= 8 && password.length <= 12) setValidPassword(true);
    else {
      setPasswordMessage(
        "Password must contain minimum of 8 and maximum of 12 characters"
      );
      setValidPassword(false);
    }

    if (validUsername && validMobile && validPassword) {
      setAllValid(true);
      setMessage("User added successfully");
      let newUsers = { userID: username, mobile: mobile, password: password };
      setUsers([...users, newUsers]);
      axios.post("http://localhost:4000/users", newUsers);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#JoinAsMember"
        style={{
          backgroundColor: "#248f8f",
          color: "white",
          outline: "none",
        }}
      >
        Join as a Member
      </button>
      <div
        class="modal fade"
        id="JoinAsMember"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="Join as a Member">
                Join as a Member
              </h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="Username" class="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setIstouched(true);
                    }}
                    value={username}
                  />
                  {!validUsername && (
                    <p class="text-danger">{usernameMessage}</p>
                  )}
                </div>
                <div class="mb-3">
                  <label htmlFor="Mobile No1" class="form-label">
                    Mobile No:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="Mobile No1"
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setIstouched(true);
                    }}
                    value={mobile}
                  />
                  {!validMobile && <p class="text-danger">{mobileMessage}</p>}
                </div>
                <div class="mb-3">
                  <label htmlFor="Password1" class="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="Password1"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setIstouched(true);
                    }}
                    value={password}
                  />
                  {!validPassword && (
                    <p class="text-danger">{passwordMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  class="btn btn-warning"
                  onClick={signUpHandler}
                >
                  Sign Up
                </button>

                {isTouched &&
                  username.trim() === "" &&
                  password.trim() === "" &&
                  mobile.trim() === "" && (
                    <p class="text-center text-danger">
                      All mandatory fields are not entered with value
                    </p>
                  )}
                {allValid && isTouched && (
                  <p class="text-success text-center">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinAsMember;
