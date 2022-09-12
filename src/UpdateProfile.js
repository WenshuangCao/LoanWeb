import { useRef, useState, useEffect } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const [users, setUsers] = useState([]);
  const [isValid, setIsvalid] = useState(false);
  const [message, setMessage] = useState();
  const username = useRef();
  const mobile = useRef();
  const password = useRef();
  const fullName = useRef();

  useEffect(() => {
    axios.get("http://localhost:4000/db").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) =>
        user.userID === username.current.value &&
        user.mobile === mobile.current.value &&
        user.password === password.current.value
    );
    if (user) {
      setIsvalid(true);
      axios.put("http://localhost:4000/users/" + user.id, {
        fullName: fullName.current.value,
        userID: username.current.value,
        mobile: user.mobile,
        password: user.password,
      });
      setMessage("Profile Updated Successfully!!");
    } else {
      setIsvalid(false);
      setMessage("Profile not found");
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#UpdateProfile"
        style={{
          backgroundColor: "#248f8f",
          color: "white",
          outline: "none",
        }}
      >
        Update Profile
      </button>
      <div
        class="modal fade"
        id="UpdateProfile"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="Update Profile">
                Update Profile
              </h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="userName" class="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userName"
                    ref={username}
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="Mobile No2" class="form-label">
                    Mobile No:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="Mobile No2"
                    ref={mobile}
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="Password2" class="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="Password2"
                    ref={password}
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="Full Name" class="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Full Name"
                    ref={fullName}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-warning"
                  onClick={updateHandler}
                >
                  Update
                </button>

                {isValid && <p class="text-success text-center">{message}</p>}
                {!isValid && <p class="text-danger text-center">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
