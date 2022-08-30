import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/home/woman_lifting.jpg';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const WhyWomenNeedToStartStrengthTrainingNow = () => {
    const history = useHistory();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById("blog")!.addEventListener('click', () => {
            history.push("/");
        });
        document.getElementById("mobile-blog")!.addEventListener('touchend', () => {
            history.push("/");
        });
    }, [])

    return (
        <Container className="mt-4 mb-5 blog-post-container">
            <Helmet>
                <meta property="og:url" content="https://www.deltatrainer.fit/blog/why-women-need-to-start-strength-training-now" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Why Women Need to Start Strength Training Now!" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mt-3 mb-2 blog-post-title">Why Women Need to Start Strength Training Now!</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">S.T.</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Feb 9, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                For decades women have been focusing on cardio exercise to transform their bodies. Strength training, they were led to believe, was the domain of bulky, testosterone fueled men. If you wanted to get an athletic, lean, and healthy body
                you needed to stick to the treadmill.&nbsp;
            </p>
            <p className="blog-post-text">
                Fortunately, times are changing and more and more women are discovering the myriad benefits of strength training. In this article, we reveal why women should lift weights as a foundational part of their fitness routine.&nbsp;
            </p>
            <h2 className="blog-post-section-heading">Women Need Muscle, Too!</h2>
            <p className="blog-post-text">
                Most women understand why they need to be doing some form of cardiovascular exercise - it burns fat and makes their heart stronger. Getting to grips with why they should be lifting weights is a little trickier. The first and most
                fundamental reason is that weight training increases and preserves muscles.
            </p>
            <p className="blog-post-text">
                You might be saying ‘but I don’t want to add any muscle to my body!’ What you probably mean is that you don’t want to add bulky muscle that will have you looking like an Eastern European weightlifter. Don’t worry - unless you are taking
                a whole lot of illegal substances you won’t do that by adding strength training to your routine.&nbsp;
            </p>
            <p className="blog-post-text">What you will do is develop strong muscles that are tight and athletic. It’s the muscles that cover your frame that give your body its shape!</p>
            <p className="blog-post-text">
                Every decade from her 20’s onward, a woman will naturally lose, on average, five percent of her muscle mass as part of the aging process. That progressive loss of muscle over time affects posture and eventually bone density gets
                weaker.&nbsp; This affects daily life in mobility and flexibility as well as strength.
            </p>
            <p className="blog-post-text">Taking up a regular strength training program is the most effective way to counter age related muscle loss.</p>
            <h2 className="blog-post-section-heading">Lift Weight to Lose Weight</h2>
            <p className="blog-post-text">
                Contrary to what many people think, weight lifting for weight loss is more effective than cardio exercise. The reason is that strength training attacks stubborn body fat on two fronts. In addition to the actual calorie burn that you get
                while working out, there is the additional fat burning benefit of adding muscle to your body.
            </p>
            <p className="blog-post-text">
                Every ounce of muscle that you add to your body will make you a more efficient fat burner. That’s because muscle is five times more dense than body fat. It takes a lot more energy for the body to maintain it. This increases the body’s
                metabolic rate. So, a woman who adds 3 pounds of muscle to her body in a year will be burning hundreds more calories than her friend who sticks to the treadmill, even though they are eating the exact same foods!
            </p>
            <p className="blog-post-text">
                Keep in mind, too, that those extra 3 pounds of muscle will not turn our strength training lady into a female version of the Hulk. On the contrary, it will provide the lean shape that most individuals seek!&nbsp;
            </p>
            <h2 className="blog-post-section-heading">The EPOC Effect</h2>
            <p className="blog-post-text">
                Another factor that makes strength training a superior tool for fat loss is known as the EPOC effect. EPOC stands for excess post exercise oxygen consumption. Also known as the after burn effect, it refers to extra calorie burning that
                takes place after the workout is over.&nbsp;
            </p>
            <p className="blog-post-text">
                All exercise causes us to increase our caloric consumption post workout to a certain degree. Yet, there is increasing evidence to suggest that strength training does so more than most other options. The reason appears to be that intense
                resistance training floods the body with hormones that increase fat burning.&nbsp;
            </p>
            <p className="blog-post-text">
                The two key hormones that are released when you work out with weights are human growth hormone and testosterone. They boost energy levels, help to burn body fat and promote the protein synthesis which leads to muscle growth.&nbsp;
            </p>
            <p className="blog-post-text">Strength training also increases the demand for oxygen after the workout in order to facilitate the recovery of the worked muscles.&nbsp;</p>
            <p className="blog-post-text">
                I mentioned that the key to getting the most from EPOC effect is intensity. So what is intensity? In terms of strength training it means working with a resistance that is at least 75 percent of your one rep maximum (that’s the most
                amount of weight you can lift one time with proper exercise form). At 75 percent of your one rep max, you should be able to do about 8 repetitions of the exercise.&nbsp;
            </p>
            <p className="blog-post-text">It is interesting to note that the type of slow steady cardio that you see most women doing in gyms does not noticeably bring on the EPOC effect.&nbsp;</p>
            <h2 className="blog-post-section-heading">Strength Training Improves Bone Health</h2>
            <p className="blog-post-text">
                As we age, our bones get weaker and thinner. This age related bone deterioration is more pronounced in women than it is in men. As a result, women are more likely to suffer from fractures and other conditions related to osteoporosis.
                Strength training is the single best tool that we have to offset age related bone degeneration. Not only does it slow down bone wasting, it actually causes the bones to become thicker and stronger.&nbsp;
            </p>
            <p className="blog-post-text">
                In a 2014<a href="https://journals.lww.com/nsca-jscr/Fulltext/2014/10000/Maximal_Strength_Training_Improves_Bone_Mineral.30.aspx" style={{textDecoration: "none"}}> study</a>, published in the Journal of Strength and Conditioning
                Research, adult young women who followed a 12 week program doing the squat exercise showed significant improvement in their hip bone and lumbar spine mineral density.
            </p>
            <p className="blog-post-text">
                Another study focused on post <a href="https://pubmed.ncbi.nlm.nih.gov/23287836/" style={{textDecoration: "none"}}>menopausal women</a>. Results with this group were even more impressive. After 12 weeks of performing the squat
                exercise three times per week, the women increased their bone density in the lower spine by 2.9 percent.&nbsp;
            </p>
            <h2 className="blog-post-section-heading">Strength Training Protects Your Joints</h2>
            <p className="blog-post-text">Your joints are the spaces where two bones meet. The ends of the two bones are covered in cartilage which connects them. Surrounding the cartilage is a capsule which contains synovial fluid.&nbsp;</p>
            <p className="blog-post-text">
                As many people age they develop a condition called
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2920533/#:~:text=Osteoarthritis%20(OA)%20is%20the%20most,population%20and%20the%20obesity%20epidemic." style={{textDecoration: "none"}}>osteoarthritis</a>. This causes the joint
                system to break down by thinning out the cartilage and forming bone spurs. Increasing the strength of the muscles that the bones are attached to will take a lot of the pressure off the degenerating joints. A number of
                <a href="https://journals.sagepub.com/doi/abs/10.1177/1559827609334979" style={{textDecoration: "none"}}>studies</a> have shown that progressive weight training, where the resistance increases as you get stronger, significantly
                improves joint function and decreases pain in people with osteoarthritis.&nbsp;
            </p>
            <h2 className="blog-post-section-heading">Health Improvement</h2>
            <p className="blog-post-text">
                Up until recently, researchers have not really appreciated the cardiovascular health benefits of strength training. The emphasis has been on cardio exercise for overall health benefits. While there is no denying that cardio provides
                many health benefits, strength training is fast catching up and, in some respects, surpassing it.&nbsp;
            </p>
            <p className="blog-post-text">Strength training lowers blood pressure, reduces the resting heart rate, increases glucose tolerance and improves cholesterol profiles.&nbsp;</p>
            <h2 className="blog-post-section-heading">Brain Benefits</h2>
            <p className="blog-post-text">
                As you are no doubt aware, all forms of exercise are good for your mental outlook. Exercise leads to the release of feel good hormones that promote feelings of well-being and positivity. However, strength training has been shown to be
                especially beneficial when it comes to providing brain benefits.
            </p>
            <p className="blog-post-text">
                Strength training can help to improve a woman’s self confidence. It can provide her with a sense of accomplishment, fulfillment and empowerment. Seeing her physical strength levels increasing can improve her mental strength. Strength
                training also builds resilience as the trainer learns to persevere despite the muscle discomfort and challenge of an intense workout. At the same time she builds self discipline.
            </p>
            <p className="blog-post-text">
                Regular strength training is especially beneficial for the cognitive well being of the elderly.&nbsp; A study in <a href="https://www.sydney.edu.au/news/84.html?newsstoryid=14605" style={{textDecoration: "none"}}>2015</a> compared
                two groups of elldery people with slight cognitive impairment. One group undertook a six month weight training program, while the other did not. The weight training group had significant improvement in a number of cognitive markers,
                including memory, organizational and planning abilities. Interestingly these improvements were still in evidence 12 months after they had stopped weight training. In contrast, the control group showed no improvement in their cognitive
                ability.&nbsp;
            </p>
            <h2 className="blog-post-section-heading">Common Misconceptions</h2>
            <p className="blog-post-text">
                Having laid out the case for strength training, it’s pretty clear that adding it to your life makes a lot of sense. However, you may still have some lingering doubts based on common myths regarding strength training or women. Let’s
                address them head on!
            </p>
            <h3 className="blog-post-subsection-heading">Strength training will make me muscle bound</h3>
            <p className="blog-post-text">
                Building muscle is incredibly hard work. Even men, who have significantly more testosterone (one of the main muscle building hormones) floating around their system than women, have to fight for every ounce of it. Women simply do not
                possess the hormonal makeup to build a lot of muscle naturally. Of course there are exceptions, but it still takes a LOT of concentrated effort to build huge amounts of muscle. As I indicated earlier, you will be doing very well to add
                3 pounds of muscle to their body in a year. That 3 lbs of muscle will be plenty to improve your health and make your arms, shoulders, thighs and butts appear rounder and leaner.&nbsp;
            </p>
            <p className="blog-post-text">Rather than making you muscle bound, strength training allows you to be your own sculptor, adding and shaping lean muscle tissue in the places that you want it to go.&nbsp;</p>
            <h3 className="blog-post-subsection-heading">To get toned, I need to use light weights and high reps.</h3>
            <p className="blog-post-text">
                The idea of getting toned was a myth that was designed to soft sell weight training to women. The reality is that there is no such thing as getting toned - there is only putting on muscle and losing fat. You will do neither by using
                light weights and high repetitions only.&nbsp;
            </p>
            <p className="blog-post-text">
                In order to get a response from your body, whether it is in the form of fat loss, muscle or strength increase, you need to provide it with a sufficient amount of intensity. When you do a lot of reps with a light weight, you are
                targeting the slow twitch muscle fibers in your muscle cells. This does not burn as many calories as does activating fast twitch fibers, which comes from performing fewer reps with a heavier weight.&nbsp;
            </p>
            <p className="blog-post-text">
                In order to make progress, your training must be progressive. That means that as you get stronger you should increase the weight that you are lifting. Performing a rep range that varies between very high (30) and very low (6) will
                ensure that you are working all of the muscle fibers and, therefore, maximally stimulating your muscles.&nbsp;
            </p>
            <h3 className="blog-post-subsection-heading">Doing lots of squats will get rid of my flabby thighs.</h3>
            <p className="blog-post-text">
                The idea that you can do exercise for a part of the body to get rid of fat from that area is false. Yet this idea of spot reducing continues to be pedaled by sellers of exercise equipment, confusing a lot of people. So, let’s get it
                straight; the only way to get rid of fat from your thighs is to consistently burn off more calories than your body takes in. The extra caloric need will be met by stored body fat. That fat will be taken from all parts of your body - you
                have no control over the area that it comes from.&nbsp;
            </p>
            <p className="blog-post-text">Exercises for a specific part of your body will strengthen, shape and build the muscle that is lying beneath the fat.</p>
            <h2 className="blog-post-section-heading">Strength Training FAQ</h2>
            <h3 className="blog-post-subsection-heading">What’s a good deadlift weight for female trainers?</h3>
            <p className="blog-post-text">
                Deadlifting is a compound strength movement that women can quickly improve their strength in. Women should start with just an olympic bar as they learn proper form. One they’ve perfected their form on the deadlift, women should be able
                to add a 45 pound plate on each side over a few weeks. After a year’s training, most women should be able to deadlift between 150 and 175 pounds.&nbsp;
            </p>
            <h3 className="blog-post-subsection-heading">How do I get started on a female weight lifting program?</h3>
            <p className="blog-post-text">
                I suggest having at least a couple of sessions with a personal trainer. A certified trainer will be able to provide you with a properly structured workout program with the right reps, set and weekly training structure for you. She will
                also be able to train you in the correct exercise form as well as providing you with motivation to make a success of your new weight training program. DeltaTrainer provides affordable 1-on-1 remote training, see more
                <a href="http://www.deltatrainer.fit" style={{textDecoration: "none"}}>here</a>.
            </p>
            <h3 className="blog-post-subsection-heading">Should a strength workout for women differ from weight training for fat loss in women?</h3>
            <p className="blog-post-text">
                Whether you're training for strength and muscle gain or fat loss, the exercises will essentially be the same, though there will be a few more multi-joint compound exercises in the fat loss program. The difference will be in the speed
                with which you go through the workout. Those who are focused primarily on fat loss, will have a faster training tempo with less rest between sets.&nbsp;
            </p>
            <h2 className="blog-post-section-heading">Wrap Up</h2>
            <p className="blog-post-text">
                Strength training is the missing ingredient that can transform a woman’s exercise program. It will speed up her fat loss while also shaping, building and strengthening her muscles, not to mention a whole host of other benefits for her
                body and brain. If you haven’t added strength training to your routine yet, why not book in a consultation to get started? You’ve got nothing to lose but that stubborn body fat!
            </p>
        </Container>
    )
}

export default WhyWomenNeedToStartStrengthTrainingNow;