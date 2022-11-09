import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
const Home = () => {
  document.title = "Services";

  const { data: AllServices } = useLoaderData();
  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">MY SERVICES</h3>
        {AllServices.map((service, index) => (
          <Col sx={12} sm={12} md={6} lg={6}>
            <Service key={index} service={service} isDetails={true}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
