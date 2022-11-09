import React, { useEffect, useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
const MyReview = () => {
  const [reviewes, setReviewes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  async function getReviewByUser() {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function removeReview(reviewId) {
    console.log({ reviewId });

    setIsLoading(true);
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/reviews/delete-review`;

    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reviewId,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        getReviewByUser();
        toast.success("Review Deleted Successfully");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getReviewByUser();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="text-center">
          <Spinner className="" animation="border" variant="warning" />
        </div>
      ) : (
        ""
      )}

      <Row>
        {reviewes?.length < 1 ? (
          <Col className="m-auto" sx={12} sm={12} md={6} lg={6}>
            <h5 className="text-center">No reviews were added</h5>
          </Col>
        ) : (
          reviewes?.map((review) => (
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
          ))
        )}
      </Row>
    </div>
  );
};

export default MyReview;
