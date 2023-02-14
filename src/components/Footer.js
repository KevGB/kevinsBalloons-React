import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/book">Balloon Twisting</Link>
                  </li>
                  <li>
                    <Link to='/arches'>Balloon Arches</Link>
                  </li>
                  <li>
                    <Link to='/garlands'>Balloon Garlands</Link>
                  </li>
                  <li>
                    <Link to='/clusters'>Balloon Clusters</Link>
                  </li>
                  <li>
                    <Link to='/deliverables'>Deliverables</Link>
                  </li>
                  <li>
                    <Link to='/centerpieces'>Centerpieces</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>

          <Col>
            <div>
              <i class="fa fa-envelope-o"></i>
              <br />
              <span class="footer-email"> kevinsballoons@gmail.com</span>
            </div>
            <div>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/kevins.balloons"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://https://www.linkedin.com/in/kevin-bice-927385133/"
              >
                <i className="fa fa-linkedin" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
