import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import weight from '../../../media/about/workout-icon (1).png';
import building from '../../../media/about/city-2 (1).png';
import './index.css';

const BackgroundIndex = () => {
    return (
        <div className="light-background py-5">
            <ListGroup className="standard-width mx-auto background-container">
                <ListGroup.Item className="border-0 light-background background-card-container">
                    <Card className="border-0 mx-auto light-background background-card">
                        <Card.Img className="mx-auto blue-icon" variant="top" src={weight} alt="Blue image of a hand holding a dumbbell" />
                        <Card.Body>
                            <Card.Text className="text-center background-text">
                                As athletes and engineers from MIT and Carnegie Mellon, we set out to fix personal training. 
                                First we built a completely automated workout app, but quickly learned that human trainers cannot be 
                                replaced by chatbots and neural networks. That’s why we stopped trying to replace trainers and instead 
                                made them superheroes. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                <div className="vl my-auto sm-none md-block"></div>
                <ListGroup.Item className="border-0 light-background background-card-container">
                    <Card className="border-0 mx-auto light-background background-card">
                        <Card.Img className="mx-auto blue-icon" variant="top" src={building} alt="Blue image of a city with buildings" />
                        <Card.Body>
                            <Card.Text className="text-center background-text">
                                Founded in the Carnegie Mellon Swartz Center for Entrepreneurship, DeltaTrainer has maintained its 
                                Pennsylvania roots with a headquarters in Pittsburgh, PA. <br></br><br></br>
                                Our trainers, business people, and developers come from all over the world.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default BackgroundIndex;