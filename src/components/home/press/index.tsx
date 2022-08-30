import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import PressCard from './press_card';
import npr from '../../../media/home/npr-logo (1).png';
import pittsburgh from '../../../media/home/pittsburgh-business-times-logo (1).png';
import gadgeteer from '../../../media/home/gadgeteer-logo copy (1).png';
import './index.css';

const PressIndex = () => {
    return (
        <Container fluid className="text-center gray-background press-container">
            <h1 className="press-header" style={{color: "#ffffff"}}>Press</h1>
            <Row className="m-auto pb-4 standard-width">
                <PressCard 
                    logo={npr} 
                    alt="NPR logo"
                    text="Local startup Delta Trainer is using artificial intelligence to make personal training more accessible." 
                    link="https://www.wesa.fm/post/can-t-afford-personal-trainer-artificial-intelligence-could-help#stream/0"
                    linkText="Listen"
                />
                <PressCard 
                    logo={pittsburgh} 
                    alt="Pittsburgh Business Times logo"
                    text="If I'm doing dumbbell curls, the app can tell if I had improper form or swung the weights too hard."
                    link="https://www.bizjournals.com/pittsburgh/news/2020/03/02/pittsburgh-startup-launches-remote-personal.html"
                    linkText="Read More"
                />
                <PressCard 
                    logo={gadgeteer} 
                    alt="The Gadgeteer logo"
                    text="DeltaTrainer is a great way to improve your fitness while seeing what a personal trainer can do for you." 
                    link="https://the-gadgeteer.com/2020/03/26/deltatrainer-review-a-real-personal-trainer-in-your-iphone-and-apple-watch/"
                    linkText="Read More"
                />
                <Col className="p-0 wheezy-waiter-col">
                    <Card className="rounded-0 m-auto press-card">
                        <Container className="text-center pt-4">
                            <p className="m-0" style={{letterSpacing: "0.0625rem", fontWeight: 500, height: "2.0625rem"}}>WHEEZY WAITER</p>
                        </Container>
                        <Card.Body>
                            <Card.Text className="m-auto press-card-text">
                                "Thank you, DeltaTrainer, for helping me achieve something I couldn't have done on my own."
                            </Card.Text>
                            <hr className="text-center mt-3 mb-2 press-line"></hr>
                            <a className="underlined-link press-card-link" href="https://www.youtube.com/watch?v=2IiO1bNHazk" target="_blank" rel="noopener noreferrer">Watch</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PressIndex