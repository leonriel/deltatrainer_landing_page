import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import nate from '../../../media/home/standing_nate.png';
import './index.css';

const PricingIndex = () => {
    return (
        <Container fluid className="text-center light-background pt-4 pb-4 pricing-component">
            <h1 className="mb-4 mt-3 pricing-header" style={{fontWeight: 200}}>Get started with a 14-day free trial</h1>
            <Row className="m-auto standard-width-pricing"> 
                <Col className="pricing-col">
                    <h3 className="pricing-col-header">THEN PAY ONLY</h3>
                    <h3 className="pricing-col-big-text">$2/day</h3>
                    <h3 className="pricing-col-text">Unlimited workouts.</h3>
                    <h3 className="pricing-col-text">Unlimited trainer interaction.</h3>
                    <h3 className="pricing-col-text">No equipment needed.</h3>
                </Col>
            </Row>
            <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="standard-btn-text" size="lg" style={{marginBottom: "3rem"}}>
                <span>Start Free Trial</span>
            </Button>
        </Container>
    );
}

export default PricingIndex;