import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
import Slider from "../shared/Slider/Slider";
import Card from "react-bootstrap/Card";
const Home = () => {
  document.title = "Home";

  const { data: AllServices } = useLoaderData();
  console.log(AllServices);
  return (
    <div>
      <Slider></Slider>
      <Row>
        <Col sx={12} sm={12} md={3} lg={3}>
          <Card className="mb-5" border="warning">
            <Card.Body>
              <Card.Title>Contact with me</Card.Title>

              <Card.Text>
                Address: Mirpur 2, Dhaka 1216 <br /> Contact number: 000-111-222{" "}
                <br />
                Email Us: immigration@sharminmoon.com
                <br />
                Open hours: 9.30AM - 7.30PM
                <br />
                Friday and Saturday(off)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sx={12} sm={12} md={6} lg={6}>
          <h3 className="text-center text-info fw-bolder">MY SERVICES</h3>
          {AllServices.map((service, index) => (
            <Service key={index} service={service} isDetails={false}></Service>
          ))}
          <Link className="btn btn-dark" to="/services">
            See all services
          </Link>
        </Col>
        <Col sx={12} sm={12} md={3} lg={3}>
          <Card className="mb-5" border="warning">
            <Card.Body>
              <Card.Title>About my service</Card.Title>

              <Card.Text>
                Immigration and COnsultancy is an international consultancy
                organization that enables Travellers to travel the world,
                students to study abroad. Through Global Education & Immigration
                , abroad prospective students can study in the UK, USA and
                Canada. The professional staff at Global Education & Immigration
                delivers reliable and resourceful information and answers to
                students interested in studying abroad. The skilled and
                well-trained counsellors of Global Education & Immigration are
                devoted to giving different services and aid to the students
                anytime they need it. They have real-life experience studying
                overseas. Moreover, they get training from the specialists to be
                up-to-date with their expertise.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
