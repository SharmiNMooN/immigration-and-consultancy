import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
import Slider from "../shared/Slider/Slider";
const Home = () => {
  const { data: AllServices } = useLoaderData();
  console.log(AllServices);
  return (
    <div>
      <Slider></Slider>
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
