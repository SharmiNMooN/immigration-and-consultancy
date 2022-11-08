import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data: service } = useLoaderData();
  console.log(service);
  return (
    <Col className="m-auto" sx={12} sm={12} md={8} lg={8}>
      <Card className="mb-2" border="warning">
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Img
            variant="top"
            style={{ maxHeight: "200px" }}
            src={service.image}
          />
          <Card.Text>{service.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>Price: {service.price}/- tk</div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ServiceDetails;
