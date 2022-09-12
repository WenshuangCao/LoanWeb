import "bootstrap/dist/css/bootstrap.min.css";
import EmiCalculator from "./EmiCalculator";
import JoinAsMember from "./JoinAsMember";
import UpdateProfile from "./UpdateProfile";
import Login from "./Login";

const Header = (props) => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#248f8f" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Civil FinLoan
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/AboutUs">
                  About US
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    class="dropdown-item"
                    href="/Services/Small Scale Business Loans"
                  >
                    Small Scale Business Loans
                  </a>
                  <a class="dropdown-item" href="/Services/Money Remittance">
                    Money Remittance
                  </a>
                  <a class="dropdown-item" href="/Services/Wealth Management">
                    Wealth Management
                  </a>
                  <a class="dropdown-item" href="/Services/Micro Finance">
                    Micro Finance
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <EmiCalculator />
            <JoinAsMember />
            <UpdateProfile />
            <Login />
          </ul>
        </div>
      </nav>
      {props.children}
      <footer class="fixed-bottom py-2" style={{ backgroundColor: "#248f8f" }}>
        <p class="text-center mb-0" style={{ color: "white" }}>
          <>Copyright © 2022 Civil-FinLoan All rights reserved</>
        </p>
      </footer>
    </div>
  );
};

export default Header;
