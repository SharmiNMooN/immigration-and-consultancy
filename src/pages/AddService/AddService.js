import React, { useState } from "react";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";

const AddService = () => {
  document.title = "Add service";
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;

    const payload = {
      name,
      image,
      description,
      price,
    };
    console.log({ payload });
    fetch(`${process.env.REACT_APP_SERVER_BASEURL}/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(`service added...`, result);
        toast.success("New Service Added Successfully");
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="mt-2">
      <h5 className="text-center">Add New Service </h5>
      {isLoading ? (
        <div className="text-center">
          <Spinner className="" animation="border" variant="warning" />
        </div>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit} className="w-50 m-auto w-sm-100">
        <Form.Group className="text-white" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="border-4"
            placeholder="Enter service name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2 text-white" controlId="formBasicImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="image"
            type="text"
            className="border-4"
            placeholder="Enter service image url"
            required
          />
        </Form.Group>
        <>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              name="description"
              required
              placeholder="Description of the service"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>
        <Form.Group className="mb-2 text-white" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            className="border-4"
            placeholder="Enter service price"
            required
          />
        </Form.Group>

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

export default AddService;
