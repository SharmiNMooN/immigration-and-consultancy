import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import EditReview from "../EditReview/EditReview";
import MyReviewCard from "../MyReviewCard/MyReviewCard";
const MyReview = () => {
  document.title = "My Reviews";
  const [reviewes, setReviewes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = useState(false);
  const [reviewData, setReviewData] = useState({});

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
      <EditReview
        show={modalShow}
        review={reviewData}
        getReviewByUser={getReviewByUser}
        onHide={() => setModalShow(false)}
      />
      {isLoading ? (
        <div className="text-center">
          <Spinner className="" animation="border" variant="danger" />
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
          reviewes?.map((review, index) => (
            <MyReviewCard
              setReviewData={setReviewData}
              review={review}
              key={index}
              removeReview={removeReview}
              setModalShow={setModalShow}
            ></MyReviewCard>
          ))
        )}
      </Row>
    </div>
  );
};

export default MyReview;
