import React, { useContext, useEffect, useState } from "react";
import {Col, Row, Spinner} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useParams } from "react-router-dom";
import Review from "../Review/Review";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import AddReview from "../AddReview/AddReview";
const ServiceDetails = () => {
  document.title = "Service Details";


  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([])
  const [service, setService] = useState({})

  const { user } = useContext(AuthContext);
  const location = useLocation();
  let { serviceId } = useParams();
  async function getServiceDetails() {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/services/${serviceId}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
        .then((res) => res.json())
        .then((data) => {

          if (data.success) {
            setService(data.data.service);
            setReviews(data.data.reviews);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }

  useEffect(() => {
    getServiceDetails()
  }, [])

  return (
    <Row>
      <Col className="m-auto" sx={12} sm={12} md={12} lg={12}>
        {isLoading ? (
            <div className="text-center">
              <Spinner className="" animation="border" variant="danger" />
            </div>
        ) : (
            ""
        )}
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
      {reviews.length < 1 ? (
        <h6>No reviews found for this service</h6>
      ) : (
        reviews.map((review, index) => (
          <Review review={review} key={index}></Review>
        ))
      )}

      {user?.uid ? (
        <AddReview serviceId={service._id} getServiceDetails={getServiceDetails}></AddReview>
      ) : (
        <Link to="/login" state={{ from: location }}>
          Please login to add a review
        </Link>
      )}
    </Row>
  );
};

export default ServiceDetails;
