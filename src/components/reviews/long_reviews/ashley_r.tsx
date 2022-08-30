import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../media/reviews/Ashley (1).jpeg';
import { useHistory } from 'react-router-dom';
import './index.css';

const AshleyR = () => {
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
            <h3 className="mt-3 mb-2 long-review-title">Ashley R.</h3>
            <div className="long-review-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={img} style={{width: "100%", height: "auto"}} alt="hello" />
            </div>
            <p className="long-review-text">
                Ashley R. is on a self-described “road to 40” — he turns 40 in less than a year — and has two young children. With this on his mind, he has oriented his goals to get into shape and maintain an active lifestyle in the years to come. Five months ago, Ashley decided to take the plunge and began remote training with DeltaTrainer, motivated to work out, eat healthy, and figure out a lifestyle that is right for him.<br></br><br></br>
                    
                Ashley had some experience with running and lifting, so trainer Nate Frezzell designed workouts focused on cyclical cutting and bulking phases. Beyond specific workouts, they also discuss nutrition, long-term goals, and any questions that may arise.<br></br><br></br>

                “It’s great,” says Ashley. “Nate and I talk often about workout and diet for the set of goals we’re trying to reach.”<br></br><br></br>
                
                Amid the ongoing COVID-19 pandemic, the remote nature of DeltaTrainer has been a good fit for Ashley, who trains at various hours each day to fit his busy schedule as the owner and CEO of a small business that specializes in consulting, investment, and community engagement. He finds that the most valuable resource the app offers is the accessibility to the trainer.<br></br><br></br>
                
                “It’s like I have a trainer here, but just not sitting right beside me in the gym,” he says. “It’s also the knowledge — it’s not always about lifting weights. There is a theory and a science behind it, and Nate has an understanding of that theory and science.”<br></br><br></br>
                
                As an early member of DeltaTrainer, Ashley has also seen the evolution of the app as it continues to advance and improve with the helpful input from users. Since he started training, the app has added a section to enter in measurements and pictures, and has allowed users to bring in other workouts outside the app that they do on the Apple Watch.<br></br><br></br>
                
                “As the business owner of a small business, it has been a pleasure to use another small business’s services. The flexibility of DeltaTrainer makes it easy for me to fit workouts into my hectic work-life schedule of being a business owner, and a father.”
            </p>
        </Container>
    )
}

export default AshleyR;