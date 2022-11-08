import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Service = ({ service, isDetails = false }) => {
  console.log(service, isDetails);
  return (
    <Card className="mb-2" border="warning">
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Img
          variant="top"
          style={{ maxHeight: "200px" }}
          src={service.image}
        />
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
          <Link className="btn btn-warning" to={`/services/${service._id}`}>
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
  );
};

export default Service;
