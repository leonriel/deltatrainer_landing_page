import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import pairing from '../../../media/home/watch-iphone-pairing (1).png';
import GetStartedItem from './get_started_item';
import './index.css';

const GetStartedIndex = () => {
    return (
        <Container fluid>
            <Row className="dark-background">
                <Col className="m-auto text-center py-4" md={7}>
                    <Container className="px-4">
                        <ListGroup className="text-left d-inline-block">
                            <ListGroup.Item className="p-0 mb-3 get-started-list-group-item">
                                <h1 className="get-started-header"style={{color: "#ffffff"}}>How to Get Started</h1>
                            </ListGroup.Item>
                            <GetStartedItem header="1. MATCH WITH A TRAINER" text="based on your personal needs and workout goals." />
                            <GetStartedItem header="2. SCHEDULE A WORKOUT" text="during the initial video call with your trainer." />
                            <GetStartedItem header="3. STAY CONSISTENT & REACH YOUR GOALS" text="via our Apple Watch AI tracking and live trainer feedback." />
                        </ListGroup>
                    </Container>
                </Col>
                <Col md={5} className="p-0 sm-none md-block">
                    <div className="light-background" style={{height: "33.0625rem"}}>
                        <img src={pairing} alt="Apple Watch and iPhone pair with each other on DeltaTrainer app" loading="lazy" className="pairing-img" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default GetStartedIndex;