import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Login = () => {
  // const [userId, setUserId] = useState();
  // const [password, setPassword] = useState();
  const userId = useRef();
  const password = useRef();
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const isSuccess = isTouched && isValid;

  useEffect(() => {
    axios.get("http://localhost:4000/db").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const user = users.find(
      (ele) =>
        ele.userID === userId.current.value &&
        ele.password === password.current.value
    );

    console.log(user);
    if (user) {
      setIsValid(true);
      setIsTouched(true);
      setMessage("Login Successful!!Please wait profile page Loading...");
    } else {
      setIsValid(false);
      setIsTouched(true);
      setMessage("Invalid credentials!!");
      userId.current.value = "";
      password.current.value = "";
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#Login"
        style={{
          backgroundColor: "#248f8f",
          color: "white",
          outline: "none",
        }}
      >
        Login
      </button>
      <div
        class="modal fade"
        id="Login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLongTitle">
                Login
              </h3>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="User ID" class="form-label">
                    User ID:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="User ID"
                    ref={userId}
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="Password3" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="Password3"
                    ref={password}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-warning"
                  onClick={loginHandler}
                >
                  Login
                </button>
              </form>
              <br />
              <br />
              {isSuccess ? (
                <p class="text-center text-success">{message}</p>
              ) : (
                <p class="text-center text-danger">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
