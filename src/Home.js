import "bootstrap/dist/css/bootstrap.min.css";
import image from "./backgroundImage.jpeg";
import Header from "./Header";

import ServiceList from "./ServiceList";

const Home = ({ services }) => {
  return (
    <>
      <Header />
      <div
        style={{
          height: "30vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ color: "white", width: "80vh" }}>
          If you're not making mistakes, then you're not doing anything
        </h1>
      </div>
      <div class="align-self-center ">
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title" style={{ color: "#248f8f" }}>
              An Hub For Your Financial Needs
            </h3>
            <p class="card-text">
              We offer the extensive array of services by providing loans to
              Small Scale Business Loans, Money Remittance, Wealth Management,
              Micro Finance and also providing Micro Finance to small business
              in rural regions.
            </p>
          </div>
        </div>
      </div>
      <ServiceList services={services} />
    </>
  );
};

export default Home;
