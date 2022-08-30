import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import DtFeature from './dt_feature';
import OtherFeature from './others_feature';
import './index.css';

const ComparisonIndex = () => {
    return (
        <Container fluid className="dark-background justify-content-center" style={{color: "#ffffff"}}>
            <Row className="mx-auto pt-3 standard-width comparison-row">
                <Col>
                    <ListGroup className="d-inline-block">
                        <ListGroup.Item className="border-left-0 border-right-0 border-top-0 comparison-header-container" style={{border: `2px solid rgba(${94}, ${100}, ${115}, ${0.48}`}}>
                            <span className="comparison-header" style={{fontWeight: 200, wordSpacing: "-8px"}}>Delta Trainer</span>
                        </ListGroup.Item>
                        <DtFeature text="Meaningful chat interaction with your trainer every day and a video call every week." />
                        <DtFeature text="Your trainer gives you actionable advice based on the motion of each and every rep." />
                        <DtFeature text="Data-driven workouts are new every week and designed to push you to specific goals." />
                        <DtFeature text="Only $2/day. Less than a cup of coffee." />
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup className="d-inline-block">
                        <ListGroup.Item className="border-left-0 border-right-0 border-top-0 comparison-header-container others-header-container" style={{border: `2px solid rgba(${94}, ${100}, ${115}, ${0.48}`}}>
                            <span className="comparison-header" style={{fontWeight: 200}}>Others</span>
                        </ListGroup.Item>
                        <OtherFeature text="A chat bot annoys you to work out and you never see your trainer again after day one." />
                        <OtherFeature text="Your trainer responds to your workout with a bicep emoji. Nothing more." />
                        <OtherFeature text="Workouts are the same for months at a time and copy-pasted from a generic template." />
                        <OtherFeature text="$100 per session. More than $820/month on average." />
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default ComparisonIndex;