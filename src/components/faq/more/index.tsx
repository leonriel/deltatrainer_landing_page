import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import frontPhone from '../../../media/faq/iphone-app-3 (1).png';
import backPhone from '../../../media/faq/iphone-app-2 (1).png';
import './index.css';

const MoreIndex = () => {
    return (
        <React.Fragment>
            <div className="gray-background overflow-hidden more-questions-container">
                <Row className="standard-width mx-auto" style={{height: "100%"}}>
                    <Col className="more-questions-text-col col-xs-12">
                        <div className="text-center"> 
                            <h3 className="mb-4 more-header">More Questions?</h3> 
                            <Button href="https://app.deltatrainer.fit/survey_goal?b=deltatrainer" className="contact-us-button" style={{fontWeight: 500, fontSize: "1.125rem"}}>Contact Us</Button>
                        </div>
                    </Col>
                    <Col>
                        <img src={frontPhone} alt="iPhone displaying the front page of the DeltaTrainer app" loading="lazy" className="position-absolute iphone-img front-iphone-img" style={{zIndex: 100}} />
                        <img src={backPhone} alt={`iPhone displaying a ${"Push Day"} workout plan on the DeltaTrainer app`} loading="lazy" className="position-absolute iphone-img back-iphone-img" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default MoreIndex;