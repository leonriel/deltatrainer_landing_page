import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import img from '../../../media/reviews/Kristen (2).png';
import './index.css';

const KristenH = () => {
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
            <h3 className="mt-3 mb-2 long-review-title">Kristen H.</h3>
            <div className="long-review-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={img} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="long-review-text">
                For Kristen H. joining DeltaTrainer’s training program was a chance to work with a physical trainer for the first time. Before starting the program in March of 2020, she had never worked with a trainer or been a member of a gym —- and hadn’t been planning on doing either. With DeltaTrainer, she has found a great way to maintain a healthy lifestyle that fits her goals.<br></br><br></br>
                
                “I think the cool part about this product is the opportunity to connect with a trainer when I would never have,” Kristen says. “I have someone who is creating workouts that are specific to me, adjusting them, and going back and forth with feedback.”<br></br><br></br>
                
                Kristen’s trainer Nate Frezzell designs four or five 30-minutes minutes a week that aim to improve flexibility and strength, as well as maintain overall fitness. With the app, Frezzell tracks her movements and monitors her heart rate to determine if she should make any adjustments. Previously, Kristen mainly did cardio exercises and used dumbbells from time to time, but with her DeltaTrainer workouts, she has been able to learn new exercises that she would not have sought out herself.<br></br><br></br>
                
                She has seen results. Though the number on the scale hasn’t changed much, her clothes fit differently, her body is more toned, and her flexibility has improved. She had also experienced a lot of lower back pain and she believes her workouts with DeltaTrainer, among other lifestyle changes, have helped reduce her pain.<br></br><br></br> 
                
                “I don’t have any aspirations to be any kind of bodybuilder or anything like that, but I want strength in my own body,” she says. “I’ve seen such a difference in my shape, in my ability to get up and down off the floor when I want to play with the kids. That kind of stuff has really been something I’ve noticed.<br></br><br></br>
                
                ”Over the last several months, she has watched the app develop and grow. One feature she was excited for was syncing with the Apple Watch, which let Nate see her other workouts outside DeltaTrainer, giving him a better picture of her general fitness. “It’s been fun to see the evolution of the product, to see the app continue to change and add new features.”<br></br><br></br>
                
                As a mother of two young children who works full-time, Kristen appreciates DeltaTrainer’s approachability and how it fits into her lifestyle. She does not need to buy extensive workout equipment, block out a fixed time in her day, or even physically drive to and from a gym. She can exercise in the comfort and convenience of her own home, around her own schedule.<br></br><br></br>
                
                “Just having the trainer here, on my arm, allows me to plan my workout at a time that makes sense, and having a workout that’s prepped for me is really helpful for staying on track,” she says. “I’ve had such a good experience. It’s been really great.”
            </p>
        </Container>
    )
}

export default KristenH;