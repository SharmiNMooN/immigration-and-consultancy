import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  const { data: AllServices } = useLoaderData();
  console.log(AllServices);
  return (
    <div>
      <h2>Total Services: {AllServices.length}</h2>
    </div>
  );
};

export default Home;
