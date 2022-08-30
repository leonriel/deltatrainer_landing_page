import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../media/reviews/erin_block.jpg';
import { useHistory } from 'react-router-dom';
import './index.css';

const ErinB = () => {
    const history = useHistory();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById("reviews")!.addEventListener('click', () => {
            history.push("/");
        });
        document.getElementById("mobile-reviews")!.addEventListener('touchend', () => {
            history.push("/");
        });
    }, [])

    return (
        <Container className="mt-4 mb-5 long-review-container">
            <h3 className="mt-3 mb-2 long-review-title">Erin B.</h3>
            <div className="long-review-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={img} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="long-review-text">
                At the start of the COVID-19 pandemic, Erin B. decided to take up running, partly as a reason to get out of her house. She grew more committed to getting fit, and over time, lost around 20 pounds. Last September, as she continued her fitness journey, she wanted to seek more focused, professional help, so she reached out to her longtime friend, Tom Kolos, a trainer at DeltaTrainer. Kolos told her about the app and its training program, “and the rest is history,” she says.<br></br><br></br>
                
                For Erin’s workouts, Kolos programs an eclectic range of exercises—plyometrics to increase strength and heart rate, resistance training that work her full body, and weight training. “It’s a really nice mix, I feel like it’s hitting every single spot on my body,” she says. “I’m noticing results in all kinds of different places.”<br></br><br></br>
                
                One of her favorite things about using DeltaTrainer is its versatility. She does not have to adhere to a strict training schedule—she can get her workout in at any time of the day. And because the training program is remote, she can’t use a standard excuse—like the gym being closed—because her gym is her home.<br></br><br></br>
                
                “It motivates me to continue on and be consistent, but also allows me some flexibility so I can live my life and fit it in when I can,” says Erin. “It’s really getting me to do things the right way. Tom puts tips in there about things to focus on to make sure I’m not doing anything incorrectly.”<br></br><br></br>
                
                Erin completed a Master of Fine Arts degree in musical theater in 2019 and has been navigating how to work in the entertainment industry, as many theaters remain closed during the pandemic. She believes her commitment to physical health and being more fit has helped her grow much more confident, which translates to her auditions.<br></br><br></br>
                
                “My goals when I started working with Tom are still my goals now,” she says. “Strength is important to me, it’s less about the number on the scale now. I’m continuing on the journey of feeling more fit and healthy, looking and feeling good, and having some of the physical metrics to support that.”
            </p>
        </Container>
    )
}

export default ErinB;