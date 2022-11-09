import React from "react";
import { Nav } from "react-bootstrap";
import FooterImg from "../../../images/footer-img.png";
const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="m-auto container  mt-3" style={footerStyle}>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid  text-md-left">
          <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-6 text-center mt-md-0 mt-3 m-auto">
              <h5 className="text-uppercase">Immigration and Consultancy</h5>
              <p className="mt-2">
                I provides some services that enables Travellers to travel the
                world, students to study abroad. Through Global Education &
                Immigration , abroad prospective students can study in the UK,
                USA and Canada.
              </p>
              <div className="mt-4">
                <h5 className="text-center">Navigations</h5>
                <Nav className="flex-column text-center">
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="/blog">BLog</Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <Nav.Link href="/home"> Immigration and Consultancy</Nav.Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
