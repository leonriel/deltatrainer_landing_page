import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';

const FooterIndex = () => {
    return (
        <Container fluid className="dark-background footer-container" data-nosnippet="data-nosnippet">
            <Container className="standard-width">
                <Row className="m-auto" style={{width: "100%"}}>
                    <Col md={5} className="m-auto p-0 sm-none md-block">
                        <Row>
                            <Col md={2} className="m-auto">
                                <a className="footer-link m-0" href="/faq">FAQ</a>
                            </Col>
                            <Col md={2} className="m-auto">
                                <a className="footer-link m-0" href="/about">About</a>
                            </Col>
                            <Col md={3} className="m-auto text-center pl-0">
                                <a className="footer-link m-0" href="/contact-us">Contact Us</a>
                            </Col>
                            <Col md={2} className="m-auto pr-0">
                                <a className="footer-link m-0" href="/blog">Blog</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} className="text-center p-0 my-3">
                        <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="standard-btn-text" size="lg">
                            <span>Start Free Trial</span>
                        </Button>
                    </Col>
                    <Col md={3} className="social-media-icons" style={{color: "#ffffff"}}>
                        <a className="footer-link" href="https://www.facebook.com/DeltaTrainer.fit/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x pr-2"></i></a>
                        <a className="footer-link" href="https://www.instagram.com/deltatrainer.fit/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x pl-2"></i></a>
                    </Col>
                    <Col md={2} className="my-auto p-0 copyright-col">
                        <h1 className="copyright"><a href="/terms-and-conditions" className="copyright footer-link">Terms and Conditions</a></h1>
                        <h1 className="copyright"><a href="/privacy-policy" className="copyright footer-link">Privacy Policy</a></h1>
                        <h1 className="copyright">©2021 by Delta Band Inc.</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FooterIndex