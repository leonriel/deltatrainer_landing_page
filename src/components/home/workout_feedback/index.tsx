import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import ipad from '../../../media/home/trainer-ipad (1).png';
import lines from '../../../media/home/lines (1).png';
import waves from '../../../media/home/waves (1).png';
import './index.css';

const WorkoutFeedbackIndex = () => {
    return (
        <Container fluid className="overflow-hidden workout-feedback-container">
            <Row className="my-5 mx-auto py-3 standard-width workout-feedback-row">
                <Col md={4}>
                    <Container fluid className="d-inline-block text-right">
                        <Container fluid className="d-inline-block p-0 text-left workout-feedback-header-container">
                            <h1 className="mb-3 workout-feedback-header">Data-Based Workout Feedback</h1>
                        </Container>
                        <Container fluid className="d-inline-block p-0 text-left long-text-container">
                            <p className="workout-feedback-text">
                                Your trainer can see and analyze every rep with our motion analysis technology via the Apple Watch. 
                                From just the movement of your wrist, we can detect sets, count reps, estimate difficulty, and grade form.
                            </p>
                        </Container>
                        <Container fluid className="d-inline-block p-0 text-left short-text-container">
                            <p className="workout-feedback-text">
                                Your entire workout is in your ears and completely hands-free. No more checking your phone or watch between every set.
                            </p>
                        </Container>
                        <Container fluid className="d-inline-block p-0 mt-4 watch-video-btn-container">
                            <Button onClick={() => window.open('https://www.youtube.com/watch?v=aKcyPqWc_zk','_blank')} className="standard-btn-text" size="lg">
                                <span><FontAwesomeIcon className="mr-2" icon={faPlay} style={{fontSize: "0.875rem"}} />Watch Video</span>
                            </Button>
                        </Container>
                    </Container>
                </Col>
                <Col md={8}>
                    <img src={waves} alt="Data displayed with waves indicating back bending in reps three through five" loading="lazy" className="position-absolute wave-data-img" />
                    <img src={lines} alt="Data dispayed with bars indicating reps six through nine were too hard" loading="lazy" className="position-absolute line-data-img" />
                    <img src={ipad} alt="Nathanuel Frezzell examines workout feedback on iPad" loading="lazy" className="position-absolute trainer-ipad-img" />
                </Col>
            </Row>
        </Container>
    );
}

export default WorkoutFeedbackIndex;