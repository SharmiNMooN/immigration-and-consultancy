import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Col } from "react-bootstrap";

const Service = ({ service, isDetails = false }) => {
  return (
    <Col sx={12} sm={12} md={12} lg={12}>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <PhotoProvider>
            <PhotoView src={service.image}>
              <Card.Img
                variant="top"
                style={{ maxHeight: "200px" }}
                src={service.image}
              />
            </PhotoView>
          </PhotoProvider>

          <Card.Text>
            {service.description.length > 100 ? (
              <>
                {service.description.slice(0, 100) + "..."}{" "}
                <Link to={`/services/${service._id}`}>See More</Link>{" "}
              </>
            ) : (
              service.description
            )}
          </Card.Text>
          {isDetails === true ? (
            <Link className="btn btn-color" to={`/services/${service._id}`}>
              View details
            </Link>
          ) : (
            ""
          )}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          Price: {service.price}/- tk
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
