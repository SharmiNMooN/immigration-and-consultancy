import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const MyReview = () => {
  const [reviewes, setReviewes] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/reviews/get-review-by-user`;

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviewes(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Row>
      {reviewes?.map((review) => (
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
                  <p className="mb-0">{review?.reviewerName}</p>
                </div>
              </div>
              <div>
                Rating: <FaStar className="text-warning me-2"></FaStar>
                <span>{review?.rating || "N/A"}</span>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{review.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MyReview;
