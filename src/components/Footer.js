import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h6>Links</h6>
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Services</li>
                            <li>
                                <ul>
                                    <li>Balloon Twisting</li>
                                    <li>Balloon Arches</li>
                                    <li>Balloon Garlands</li>
                                    <li>Balloon Clusters</li>
                                    <li>Deliverables</li>
                                    <li>Centerpieces</li>
                                </ul>
                            </li>

                        </ul>
                    </Col>

                    <Col>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <br/>
                                <span class="footer-email"> kevinsballoons@gmail.com</span>
                        </div>
                        <div>
                            <a
                                className='btn btn-social-icon btn-instagram'
                                href='http://instagram.com/kevins.balloons'
                            >
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-linkedin'
                                href='http://https://www.linkedin.com/in/kevin-bice-927385133/'
                            >
                                <i className='fa fa-linkedin' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-google'
                                href='http://youtube.com/'
                            >
                                <i className='fa fa-youtube' />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;