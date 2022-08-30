import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import x from '../../../media/home/x-icon (1).png';

interface FeatureProps {
    text: string
}

const OtherFeature = ({text}: FeatureProps) => {
    return (
        <ListGroup.Item className="comparison-item border-right-0 border-left-0 border-top-0 pr-0" style={{border: `2px solid rgba(${94}, ${100}, ${115}, ${0.48})`}}>
            <Row>
                <Col md={2} className="sm-none md-block">
                    <img src={x} alt="White X" loading="lazy" style={{height: "3rem"}} />
                </Col>
                <Col md={10} className="my-auto">
                    <h3 className="m-0" style={{fontSize: "1.0625rem", fontWeight: 400}}>{text}</h3>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default OtherFeature;