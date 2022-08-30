import React from 'react';
import { Container } from 'react-bootstrap';
import LongReviewLink from './long_review_link';
import ashley from '../../../media/reviews/Ashley (2).jpeg';
import erin from '../../../media/reviews/erin_block.jpg';
import kristen from '../../../media/reviews/Kristen.png';
import './index.css';

const LongReviewsIndex = () => {
    return (
        <Container fluid className="mb-5 d-flex long-reviews-container" style={{flexFlow: "row wrap", justifyContent: "space-between"}}>
            <LongReviewLink path="/ashley-r" src={ashley} name="Ashley R." width={4} />
            <LongReviewLink path="/erin-b" src={erin} name="Erin B." width={4} />
            <LongReviewLink path="/kristen-h" src={kristen} name="Kristen H." width={4} />
        </Container>
    )
}

export default LongReviewsIndex;