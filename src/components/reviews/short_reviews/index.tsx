import React from 'react';
import { Container, Carousel, Row } from 'react-bootstrap';
import ShortReview from './short_review';
import './index.css';

const ShortReviewsIndex = () => {
    return (
        <Container fluid className="light-background pt-5 pb-3">
            <h3 className="text-center short-reviews-header mx-auto" style={{fontWeight: 700}}>What Our Clients Have to Say</h3>
            <Carousel interval={null} className="my-3 short-reviews-carousel sm-none md-block">
                <Carousel.Item>
                    <Row className="mx-auto short-reviews-row">
                        <ShortReview 
                            quote="To not have to think about planning my own workouts reduces the stress associated with gym time for me. I can always add on an exercise or take it away if need be and my trainer and I plan around my physical therapy."
                            name="Anastasia B."
                        />
                        <ShortReview
                            quote="This app has become the route to a turning point in my life that I never saw attainable beforehand; having the access to trainers in a non-gym environment allowed me to stretch my confidence levels that I wouldn’t see at a brick and mortar location."
                            name="Jamie J."
                        />
                        <ShortReview
                            quote="This app is incredible. My personal trainer is active with me, works with my hectic life, and designs workouts for me. Weekly. That’s insane."
                            name="Marc R."
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="mx-auto short-reviews-row">
                        <ShortReview
                            quote="DeltaTrainer is innovative, easy to use, and personalized. If you’re like me and you hate talking to people, but would still benefit from a personal trainer, this is absolutely the way to go."
                            name="Sara O."
                        />
                        <ShortReview
                            quote="This app is amazing. It’s the fitness app that actually works! Look no further you have found it."
                            name="Ben K."
                        />
                        <ShortReview
                            quote="Real trainers, inexpensive compared to in-person trainers, real results. You get a free Apple Watch. The trainers work you hard, but it’s worth it."
                            name="Clay O."
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="mx-auto short-reviews-row">
                        <ShortReview
                            quote="My trainer is awesome! Always quick to respond to my workout submissions with feedback and to any questions! Love this app!!"
                            name="Debbie M."
                        />
                        <ShortReview
                            quote="LOVE the workouts and my trainer. Helped me step out of my comfort zone and take working out to the next level."
                            name="Erica J."
                        />
                        <ShortReview
                            quote="Amazing app with a good purpose. Developer and trainer are extremely responsive and helpful with any issues occurred along the way!"
                            name="Yomeo N."
                        />
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="mx-auto short-reviews-row">
                        <ShortReview 
                            quote="I am satisfied with Delta Trainer. The app works great, and my trainer is fantastic, friendly and I trust him."
                            name="Genaro S."
                        />
                        <ShortReview
                            quote="But since Delta Trainer I’ve worked out for 3 weeks consistently, my boyfriend and I have already noticed my legs and arms becoming stronger, and I have a ton of energy."
                            name="Kail F."
                        />
                        <ShortReview
                            quote="I feel that I’m getting the benefits of a personal trainer without the hassle while working out from the comforts of my home."
                            name="Buddy L."
                        />
                    </Row>
                </Carousel.Item>
            </Carousel>
            <Carousel interval={null} className="my-3 short-reviews-carousel md-none">
                <Carousel.Item>
                    <ShortReview
                        quote="To not have to think about planning my own workouts reduces the stress associated with gym time for me. I can always add on an exercise or take it away if need be and my trainer and I plan around my physical therapy."
                        name="Anastasia B."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="This app has become the route to a turning point in my life that I never saw attainable beforehand; having the access to trainers in a non-gym environment allowed me to stretch my confidence levels that I wouldn’t see at a brick and mortar location."
                        name="Jamie J."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="This app is incredible. My personal trainer is active with me, works with my hectic life, and designs workouts for me. Weekly. That’s insane."
                        name="Marc R."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                            quote="DeltaTrainer is innovative, easy to use, and personalized. If you’re like me and you hate talking to people, but would still benefit from a personal trainer, this is absolutely the way to go."
                            name="Sara O."
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="This app is amazing. It’s the fitness app that actually works! Look no further you have found it."
                        name="Ben K."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="Real trainers, inexpensive compared to in-person trainers, real results. You get a free Apple Watch. The trainers work you hard, but it’s worth it."
                        name="Clay O."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="My trainer is awesome! Always quick to respond to my workout submissions with feedback and to any questions! Love this app!!"
                        name="Debbie M."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="LOVE the workouts and my trainer. Helped me step out of my comfort zone and take working out to the next level."
                        name="Erica J."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="Amazing app with a good purpose. Developer and trainer are extremely responsive and helpful with any issues occurred along the way!"
                        name="Yomeo N."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="I am satisfied with Delta Trainer. The app works great, and my trainer is fantastic, friendly and I trust him."
                        name="Genaro S."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="But since Delta Trainer I’ve worked out for 3 weeks consistently, my boyfriend and I have already noticed my legs and arms becoming stronger, and I have a ton of energy."
                        name="Kail F."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ShortReview
                        quote="I feel that I’m getting the benefits of a personal trainer without the hassle while working out from the comforts of my home."
                        name="Buddy L."
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default ShortReviewsIndex;