import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel className="mb-3" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pathwayimmi.com/wp-content/uploads/2021/10/immigration-consultants-in-chandigarh.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We are providing World travelling packages</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://devimmigration.com/wp-content/uploads/2021/07/banner-11.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="">
          <h3>We consult for Visa and immigration service</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onewayimmigration.com/wp-content/uploads/2019/06/permanenet-residency123-1920x500-1920x488.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Student visa consultancy</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
