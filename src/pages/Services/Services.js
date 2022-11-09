import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Services = () => {
  document.title = "Services";

  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  async function loadServices(page = 1) {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_SERVER_BASEURL}/services?page=${page}&limit=2`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadServices(page);
  }, [page]);
  return (
    <div>
      <Row>
        <h3 className="text-center text-info fw-bolder">MY SERVICES</h3>
        {isLoading ? (
          <div className="text-center">
            <Spinner className="" animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}
        {allServices?.map((service, index) => (
          <Col sx={12} sm={12} md={6} lg={6}>
            <Service key={index} service={service} isDetails={true}></Service>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        {page > 1 ? (
          <Button
            variant="light"
            onClick={() => {
              setPage(page - 1);
              loadServices(page);
            }}
            className="border-4 mt-2 border-light me-2"
          >
            <FaArrowLeft className="me-2 text-danger h1"></FaArrowLeft>
            Previous
          </Button>
        ) : (
          ""
        )}

        {allServices.length > 0 ? (
          <Button
            variant="light"
            onClick={() => {
              setPage(page + 1);
              loadServices(page);
            }}
            className="border-4 mt-2 border-light me-2"
          >
            <FaArrowRight className="me-2 text-danger h1"></FaArrowRight>
            Next
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Services;
