// import s1 from "./s1.jpg";
// import s2 from "./s1.jpg";
// import s3 from "./s1.jpg";
// import s4 from "./s1.jpg";

const ServiceList = ({ services }) => {
  const service = services.map((service) => (
    <div class="w-25" key={service.id}>
      <div class="card text-center">
        <img
          class="card-img-top"
          src={require(`${service.img}`)}
          alt="Card img cap"
          style={{ height: "20vh" }}
        />
        <div class="card-body">
          <h5 class="card-title">{service.title}</h5>
          <p class="card-text">{service.des}</p>
          <a
            href={`/Services/${service.title}`}
            class="btn"
            style={{ backgroundColor: "#248f8f" }}
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  ));

  return <div class="row justify-content-center">{service}</div>;
};

export default ServiceList;
