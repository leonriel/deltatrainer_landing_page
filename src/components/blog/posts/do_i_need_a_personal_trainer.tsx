import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/blog/do_i_need_a_personal_trainer.png';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const DoINeedAPersonalTrainer = () => {
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
                <meta property="og:url" content="https://www.deltatrainer.fit/blog/do-i-need-a-personal-trainer" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Do I Need a Personal Trainer?" />
                <meta property="og:description" content="The Pros and Cons of Hiring a Trainer" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mt-3 mb-2 blog-post-title">Do I Need a Personal Trainer?</h3>
            <h3 className="blog-post-subtitle" style={{color: "#757575"}}>The Pros and Cons of Hiring a Trainer</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">David S.</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Feb 15, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                You’ve seen it before; the words of motivation, the cheering, and the eventual high-five between personal trainer and client. After seeing this, how many times have you asked yourself, “Should I get a personal trainer?”
            </p>
            <p className="blog-post-text">
                A personal trainer isn’t just some fitness know-it-all who learned everything from sketchy websites. To become a certified personal trainer AND be hired by a gym, fitness professionals must get accredited by one of several big-name
                fitness organizations. The National Academy of Sports Medicine (NASM) and the American College of Sports Medicine (ACSM) are two examples.
            </p>
            <p className="blog-post-text">
                The fitness industry has been consistently exploding in popularity for the last few decades for both trainers and clients alike. People want to get healthy, look amazing, and feel better, and personal trainers are there to help.
            </p>
            <p className="blog-post-text">
                Even with the coronavirus pandemic, fitness is still staying strong on a global scale with online personal training. If you’ve ever considered hiring a trainer, the time couldn’t be better. Let’s review the pros and cons of hiring a
                personal trainer to see if a fitness coach is right for you.
            </p>
            <h2 className="blog-post-section-heading">Benefits of Hiring a Personal Trainer</h2>
            <p className="blog-post-text">Here are some of the reasons you should hire a personal trainer – whether in-person or online.</p>
            <h3 className="blog-post-subsection-heading">Get Started on the Right Foot</h3>
            <p className="blog-post-text">Personal trainers can help you start with a strong fitness foundation. You’ll learn proper posture, form, and execution with instant feedback and correction.</p>
            <p className="blog-post-text">
                This is easily the most important reason you want to hire a fitness coach. The habits you learn when you first start exercising can follow you for the rest of your life. If you learn bad form in the beginning, it’ll be tougher to break
                that habit down the road.
            </p>
            <p className="blog-post-text">A personal trainer can help you build a strong foundation on solid concrete, not sinking sand.</p>
            <h3 className="blog-post-subsection-heading">Specific Issues Can Be Addressed</h3>
            <p className="blog-post-text">
                Physical activity and exercise are essential for recovery; however, if you have a prior injury, surgery, or illness, your workouts will not look the same as a healthy and athletic individual. You will need a specially designed workout,
                maybe even one where your trainer works with your doctor or physical therapist.
            </p>
            <p className="blog-post-text">
                You would never want to pluck a workout off the web and try it for yourself during recovery. Instead, hire a personal trainer because they can develop an exercise program around your medical history to ensure optimal progress without
                interference.
            </p>
            <h3 className="blog-post-subsection-heading">Motivation, Support, and Accountability</h3>
            <p className="blog-post-text">
                One of the most common reasons that people hire a personal trainer is because they know they won’t exercise otherwise. Studies show that when someone is counting on you and holding you accountable, you’re more likely to show up to get the
                work done.<a href="https://pubmed.ncbi.nlm.nih.gov/8775648/" style={{textDecoration: "none"}}> [1]</a>
            </p>
            <p className="blog-post-text">Trainers provide an important level of accountability, ensuring you show up not just for yourself but for them as well.</p>
            <p className="blog-post-text">
                They are also trained to provide proper support and motivation based on what you need. There is no one size fits all in fitness motivation and trainers understand this. So, whether you need that Full Metal Jacket approach or something
                softer like a daily morning text message, trainers offer support while motivating you to achieve your health and life goals.
            </p>
            <h3 className="blog-post-subsection-heading">Break Through a Plateau</h3>
            <p className="blog-post-text">Have you been exercising on your own? Maybe you saw dramatic results during the first month or two, but things have stayed the same ever since.</p>
            <p className="blog-post-text">You, my friend, have hit a plateau. Few things are more frustrating than jumping on the scale and watching it stay in the same spot (or even worse, it goes up) after putting in a week of hard work.</p>
            <p className="blog-post-text">
                A personal trainer knows exactly what to do to help you break out of your plateau and continue seeing results. Your trainer will curtail your program based on your personal consultation, fitness experience, and physical ability. The
                result? More fat burning, muscle building, or performance enhancement based on what you want.
            </p>
            <h3 className="blog-post-subsection-heading">Lifelong Knowledge</h3>
            <p className="blog-post-text">
                You know that old expression about teaching a man to fish? It’s the same idea with personal training. You aren’t just improving your health and fitness; you are actively learning how to exercise and be directly responsible for your body.
            </p>
            <p className="blog-post-text">
                An expert personal trainer is going to treat each session as both a workout and a learning opportunity. They might quiz you, or only give certain clues, forcing you to use the knowledge you’ve learned along the way. Either way, if you
                ever stop going to your trainer, you’ll have a library of information that you can use to maintain your results.
            </p>
            <p className="blog-post-text">Best of all, you can pass this knowledge down to family and friends.</p>
            <h2 className="blog-post-section-heading">Things to Consider About Hiring a Trainer</h2>
            <p className="blog-post-text">A personal trainer can be a valuable investment in your health and fitness but here are some things to consider before taking the plunge.</p>
            <h3 className="blog-post-subsection-heading">The Price Tag of a Personal Trainer</h3>
            <p className="blog-post-text">If you’ve never hired a trainer before and you’re currently a member of a chain gym that only charges $10 per month, you might have sticker shock when you see the cost of one session with a trainer.</p>
            <p className="blog-post-text">
                It’s tough to pinpoint an “average” price for a trainer. Newbie trainers might only charge $20 per hour where a veteran trainer can easily charge $100 per hour. If the trainer is specialized – for example, he only works with competitive
                athletes – he can charge $150 to $200 per hour. Then there are celebrity-focused trainers. Remember Tony Horton, the P90X guy? He used to charge $500 per session with his clients, and that was 20 years ago!
            </p>
            <p className="blog-post-text">
                Here’s how to look at this situation: You are paying for condensed knowledge and an expert’s time. What could take you YEARS to figure out on your own is being boiled down and delivered to you in just a few hours. It’s worth every penny.
            </p>
            <h3 className="blog-post-subsection-heading">You Might Have to Shop Around</h3>
            <p className="blog-post-text">It’s not the norm but sometimes, you won’t click with your trainer. Maybe she has an aggressive approach and attitude where you prefer calm and supportive.</p>
            <p className="blog-post-text">There’s nothing wrong with trainer shopping, especially if you want to find someone you can interact with on a weekly basis for the next few years.</p>
            <p className="blog-post-text">
                Keep in mind that you can hire a trainer for a month, see if you two get along well, and discontinue if you don’t. But once you have a trainer who is extremely knowledgeable, supportive, friendly, and goes above and beyond, latch on to
                that one because if they aren’t busy, they will be soon. The best trainers always book up fast.
            </p>
            <h3 className="blog-post-subsection-heading">You Might Be on Their Schedule</h3>
            <p className="blog-post-text">Depending on the trainer, you might have to work around their schedule, not the other way around. Even if you are doing online personal training, not every time slot will be available.</p>
            <p className="blog-post-text">Keep this in mind as you create a timetable for yourself. Find several optimal times that work for you in order of most preferred. Have at least three time slots that you’d like to request from the trainer.</p>
            <h2 className="blog-post-section-heading">Do You Need a Personal Trainer?</h2>
            <p className="blog-post-text">Review this quick checklist to see if a personal trainer is right for you:</p>
            <ul className="blog-post-text">
                <li >
                    <p>Are you new to fitness?</p>
                </li>
                <li>
                    <p>Have you been struggling to start an exercise program?</p>
                </li>
                <li>
                    <p>Do you feel stuck in your current fitness program?</p>
                </li>
                <li>
                    <p>When you exercise, do you often feel like you’re doing it wrong?</p>
                </li>
                <li>
                    <p>Are you getting hurt when you exercise?</p>
                </li>
                <li>
                    <p>Do you want to learn how to take care of yourself and exercise on your terms?</p>
                </li>
                <li>
                    <p>Do you need motivation, support, and accountability?</p>
                </li>
                <li>
                    <p>Are you tired of starting a new program in January only to give up on it by March?</p>
                </li>
            </ul>
            <p className="blog-post-text">If you said “yes” to most of these questions, then hiring a personal trainer could be the right choice for you.</p>
            <p className="blog-post-text">Even if you only hire a trainer for a month, learning the fundamentals of fitness will provide lasting change.</p>
            <h3 className="blog-post-subsection-heading">Want to Try a Personal Trainer Before Committing to One?</h3>
            <p className="blog-post-text">Are you on the fence about committing to personal training? Totally understandable! That’s why DeltaTrainer has a completely free 14-day trial that gives you access to a world-class personal trainer remotely.</p>
            <p className="blog-post-text">DeltaTrainer provides all the benefits of an in-person fitness coach with the flexibility and affordability of an online personal trainer.</p>
            <p className="blog-post-text">
            You get unlimited personalized workouts, live feedback on pacing and range of motion, and a detailed post workout analysis from your trainer. Best of all, you get to choose when and where you work out. If you want inexpensive personal
            training, this is it!
            </p>
            <p className="blog-post-text">
            It’s the best of both worlds. You get the full training experience for a fraction of the cost. DeltaTrainer only costs $2 per day for unlimited workouts! Compare that to the $600+ per month you might pay if you had three sessions in
            person every week at $50/session.
            </p>
            <p className="blog-post-text">So, what do you have to lose (other than that extra weight)? Try DeltaTrainer for free for 14 days!</p>
            <h2 className="blog-post-section-heading">References</h2>
            <ol className="blog-post-text">
                <li>
                    <p>
                    Wallace JP, Raglin JS, Jastremski CA. Twelve month adherence of adults who joined a fitness program with a spouse vs without a spouse. J Sports Med Phys Fitness. 1995 Sep;35(3):206-13. PMID: 8775648.
                    </p>
                </li>
            </ol>

        </Container>
    )
}

export default DoINeedAPersonalTrainer;