import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1>About Us</h1>
      <p>Civil-Finloan is a .....</p>

      <button
        type="button"
        class="btn btn-warning"
        onClick={() => navigate("/")}
      >
        Explore Home
      </button>
    </>
  );
};

export default AboutUs;
