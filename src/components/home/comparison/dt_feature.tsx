import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import check from '../../../media/home/blue-check-icon (1).png';

interface FeatureProps {
    text: string
}

const DtFeature = ({text}: FeatureProps) => {
    return (
        <ListGroup.Item className="comparison-item border-right-0 border-left-0 border-top-0 pr-0" style={{border: `2px solid rgba(${94}, ${100}, ${115}, ${0.48}`}}>
            <Row className="py-1">
                <Col md={2} className="m-auto sm-none md-block">
                    <img src={check} alt="Solid blue check mark" loading="lazy" style={{height: "1.75rem"}} />
                </Col>
                <Col md={10} className="my-auto">
                   <h3 className="m-0" style={{fontSize: "1.0625rem", fontWeight: 700}}>{text}</h3>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default DtFeature;