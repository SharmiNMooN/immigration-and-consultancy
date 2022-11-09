import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const AddReview = ({ serviceId }) => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const token = localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_SERVER_BASEURL}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description: review,
        serviceId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(`review added...`, result);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {});
  };
  return (
    <div className="mt-2">
      <h5>Add your review </h5>

      <Form onSubmit={handleSubmit} className="w-50 w-sm-100">
        <>
          <FloatingLabel controlId="floatingTextarea2" label="Review">
            <Form.Control
              as="textarea"
              name="review"
              required
              placeholder="Leave a review here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>

        <Button
          variant="danger"
          className="border-4 mt-2 border-light me-2"
          type="submit"
        >
          Submit Review
        </Button>
        <Form.Text className="text-danger me-4">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default AddReview;
