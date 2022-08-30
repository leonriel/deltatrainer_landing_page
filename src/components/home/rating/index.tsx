import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import stars from '../../../media/home/stars (1).png';
import './index.css';

const RatingIndex = () => {
    return (
        <Container fluid className="light-background text-center py-5">
            <Row className="mx-auto pb-4 standard-width-rating mobile-width-rating">
                <Col>
                    <h3 className="m-0" style={{fontWeight: 100, fontSize: "2.375rem", color: "#366cf8"}}>
                        4.9  /  5
                    </h3>
                </Col>
                <Col className="m-auto">
                    <img src={stars} alt="Solid blue 5 stars" loading="lazy" style={{width: "16.8125rem"}} />
                </Col>
            </Row>
            <h3 style={{fontWeight: 600, fontSize: "1.0625rem"}}>APPLE APP STORE RATING</h3>
        </Container>
    );
}

export default RatingIndex;