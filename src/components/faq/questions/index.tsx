import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Question from './question';
import './index.css';

const QuestionsIndex = () => {
    return (
        <ListGroup className="mx-auto questions-container">
            <Question 
                question="What is remote training?"
                answer="Remote training is access to a world-class trainer 
                at a fraction of the price of traditional training. Biweekly 
                video chats, continuous chat conversion, and extremely personalized 
                workouts. With our motion analysis engine, your trainer can see 
                your every rep and train you as if he or she was right there next 
                to you."
            />
            <Question 
                question="What if I already have an Apple Watch?"
                answer="Great! If you have an S3 watch or newer then your setup fee is $0."
            />
            <Question 
                question="Why do I need an Apple Watch? What if I don't have one?"
                answer={`We use the inertial sensors of the Apple Watch to analyze your motion 
                and help your trainer "see" what's going on. If you don't have a watch, we'll 
                include one in your welcome box for a one time fee. After your first month 
                of training, the watch is yours to keep.`}
            />
            <Question 
                question="Which Apple Watch do you send?"
                answer="We send out new 38mm S3 Apple Watches for a one time fee 
                of $199. You may also upgrade to an 44mm S5 Apple Watch for a setup fee 
                of $299, a 40mm S6 Apple Watch for a setup fee 
                of $399 or a 44mm S6 Apple Watch for a setup fee 
                of $429."
            />
            <Question 
                question="Do I need cell service for this to work?"
                answer="No! All you need is a WiFi signal. Many of our members purchase inexpensive, 
                refurbished iPhones (generation 6s or newer) to use as their dedicated workout device. 
                No cell plan is needed for the tracking to work."
            />
            <Question 
                question="How does the motion technology work?"
                answer="During your workout, we use your Apple Watch to collect hundreds of data points 
                per second. We collect information about your arm position, acceleration, rotation, and 
                much more. We then use our patented motion analysis engine to automatically detect reps, 
                difficulty, pacing, range of motion, and form. This is so much more than heart rate."
            />
            <Question 
                question="Do I choose a trainer?"
                answer="We will take your goals and experience and automatically pair you with the trainer 
                that best fits you. If you feel like it's not the right fit, let us know and we can always 
                change things up!"
            />
            <Question 
                question="Does this work on Android?"
                answer="Currently we only work with iPhones and Apple Watches. Expect an update for 
                Android users within a year!​"
            />
            <Question 
                question="What am I committing to?"
                answer="You can workout as little or as much as you want—your trainer will work with you 
                to keep you motivated and moving towards your goals. Your first two weeks of training 
                are free! If you cancel within 14 days then you will not be charged. After the first 14 days, 
                your subscription is month-to-month and you can cancel it anytime."
            />
            <Question 
                question="Is DeltaTrainer available outside the United States?"
                answer="Yes! DeltaTrainer is currently available worldwide for those who already have an 
                Apple Watch or those who are able to get an Apple Watch separately. DeltaTrainer cannot ship Apple 
                Watches or welcome boxes internationally though. Note: All weights in the app are in pounds, not 
                    kilograms (update coming soon)."
            />
            <Question 
                question="What if I got a watch from you and I want to cancel my free trial?"
                answer="If you receive an Apple Watch from DeltaTrainer and cancel your free trial before 
                your subscription begins, then you have the option of receiving a free return label and sending 
                the Apple Watch back to DeltaTrainer or you can pay the remainder of the retail watch cost ($25) to keep the Apple Watch.
                If you do not make a decision within 7 days after cancellation, then we will charge your card 
                on file for the remaining amount and the watch will be yours to keep."
            />
        </ListGroup>
    )
}

export default QuestionsIndex;
