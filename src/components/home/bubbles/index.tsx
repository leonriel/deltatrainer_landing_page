import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import Bubble from './bubble';
import videoCalls from '../../../media/home/video_call_circle.png';
import chat from  '../../../media/home/nate_texting.jpg';
import feedback from '../../../media/home/jenna_lifting.jpg';
import './index.css';

const BubblesIndex = () => {
    return (
        <Container className="py-5">
            {/* Normal */}
            <h1 className="text-center bubbles-header">Unlimited Access to Your Own Expert Trainer</h1>
            {/* Holiday */}
            {/* <h1 className="text-center bubbles-header">Unlimited training, just $2 per day.</h1> */}
            <CardDeck>
                <Bubble src={videoCalls} alt="Muscular man in gray tank top video calls his trainer" title={"VIDEO CALLS"} text={"Schedule a 1-on-1 call with your trainer whenever you want"} />
                <Bubble src={chat} alt="Person chats with their trainer on the DeltaTrainer app" title={"CHAT"} text={"Your trainer is always there to motivate you and answer questions"} />
                <Bubble src={feedback} alt="Woman with black shirt lifting a dumbbell" title={"FEEDBACK"} text={"Your trainer uses our tech to guide your form, pacing, and range of motion"} />
            </CardDeck>
        </Container>
    );
}

export default BubblesIndex;