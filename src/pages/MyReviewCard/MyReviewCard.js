import React from "react";
import { Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
const MyReviewCard = ({ review, removeReview }) => {
  return (
    <div>
      <Col className="m-auto" sx={12} sm={12} md={6} lg={6}>
        <Card className="mb-2">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Image
                roundedCircle
                className="me-2"
                src={review?.reviewerImage}
                style={{ height: "60px" }}
              ></Image>
              <div>
                <p className="mb-0 fw-bolder">
                  Reviewer: {review?.reviewerName}
                </p>
                <Card.Text className="fw-bold">
                  Service: {review.serviceName}
                </Card.Text>
              </div>
            </div>

            <div>
              <FaEdit className="me-2 text-success"></FaEdit>
              <FaTrash
                className="me-2 text-danger"
                onClick={() => {
                  removeReview(review._id);
                }}
              ></FaTrash>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>Review: {review.description}</Card.Text>
            <div>
              Rating: <FaStar className="text-warning me-2"></FaStar>
              <span>{review?.rating || "N/A"}</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyReviewCard;
