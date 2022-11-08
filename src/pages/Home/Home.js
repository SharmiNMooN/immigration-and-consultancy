import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
const Home = () => {
  const { data: AllServices } = useLoaderData();
  console.log(AllServices);
  return (
    <div>
      <h2>Total Services: {AllServices.length}</h2>

      <Row>
        {AllServices.map((service) => (
          <Col sx={12} sm={12} md={6} lg={6}>
            <Service key={service._id} service={service}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
