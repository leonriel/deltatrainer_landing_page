import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import woman from '../../../media/home/woman-mat (1).png';
import './index.css';

const QuoteIndex = () => {
    return (
        <Container fluid className="py-0 medium-background" style={{color: "#ffffff", height: "22.375rem"}}>
            <Row className="mx-auto position-relative standard-width" style={{height: "22.375rem"}}>
                <Col md={7} className="quote-container">  
                    <p className="text-justify" style={{fontSize: "1.0625rem", fontWeight: 300}}>
                        “I started DeltaTrainer as a way to support my husband’s recovery 
                        from cancer—I wasn’t expecting to like it because I’ve always 
                        hated working out. But I was so wrong! My trainer, Nate, has been 
                        an amazing source of support and knows just how to push me to 
                        my edge without sending me over. This is the first time in my life 
                        that I feel like working out is truly sustainable for me.”
                    </p>
                    <h3 style={{fontSize: "0.9375rem", fontWeight: 400}}><strong>JENNIFER</strong>, Customer since May 2020</h3>
                </Col>
                <Col md={5}>
                    <Container fluid className="position-absolute woman-mat-container text-center">
                        <img src={woman} alt="Woman in blue shirt doing upward facing dog on yoga mat with Apple Watch" loading="lazy" className="woman-mat-img" />
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default QuoteIndex;