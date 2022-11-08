import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const { service, reviews } = data;
  console.log({ service, reviews });
  return (
    <Row>
      <Col className="m-auto" sx={12} sm={12} md={12} lg={12}>
        <Card className="mb-2" border="warning">
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Img
              variant="top"
              style={{ maxHeight: "350px" }}
              src={service.image}
            />
            <Card.Text>{service.description}</Card.Text>
            <Card.Text>Price: {service.price}/- tk</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <h4 className="text-dark mt-2"> Review of the service:</h4>

      {reviews.map((review, index) => (
        // <Col className="m-auto" sx={12} sm={12} md={6} lg={5}>
        <Review review={review} key={index}></Review>
        // </Col>
      ))}
    </Row>
  );
};

export default ServiceDetails;
