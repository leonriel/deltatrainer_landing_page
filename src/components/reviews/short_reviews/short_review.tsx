import React from 'react';
import { Card, Col } from 'react-bootstrap';

interface ShortReviewProps {
    quote: string,
    name: string
}

const ShortReview = ({quote, name}: ShortReviewProps) => {
    return (
        <Col>
            <Card className="p-2 drop-shadow mx-auto short-review-card">
                <Card.Body>
                    <div className="d-flex short-review-text-container">
                        <Card.Text className="text-center short-review-text">
                            "{quote}"
                        </Card.Text>
                    </div>
                    <hr className="review-line" style={{width: "30%"}}></hr>
                    <Card.Text className="text-center short-review-text">
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}   

export default ShortReview;