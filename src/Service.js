import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/db").then((res) => {
      setServices(res.data.services);
    });
  }, []);

  const service = services.find((item) => item.title === params.type);
  console.log(service);

  return (
    <>
      <Header />
      <h1>{params.type}</h1>
      <p>{service && service.des}</p>
      <hr></hr>
    </>
  );
};

export default Service;
