import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/blog/how-fast-will-you-lose-muscle (1).jpg';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const HowQuicklyDoYouLoseMuscle = () => {
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
                <meta property="og:url" content="https://www.deltatrainer.fit/blog/how-quickly-do-you-lose-muscle" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="How Quickly Do You Lose Muscle?" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mb-2 blog-post-title">How Quickly Do You Lose Muscle?</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">Patrick D.</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Feb 9, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                Your body is amazing! It’s made up of about three trillion cells, 79 separate organs, eleven systems, 206 bones, and over 600 named muscles. It’s capable of many impressive feats, from mountain climbing to walking a tight rope to fighting off diseases.
            </p>   
            <p className="blog-post-text">
                And yet, despite this apparent complexity, your body is also relatively easy to maintain. Provide it with the correct fuel, stay hydrated, get enough sleep, and exercise regularly, and it should provide you with a lifetime of faithful service. 
            </p>
            <p className="blog-post-text">
                But, if you abuse your body, it may start to go wrong sooner, potentially taking years off your life. When it comes to fitness, cardio is often described as the most important and beneficial type of exercise. That makes a certain amount of sense because, of all the muscles in the human body, the heart is arguably the most critical. After all, it’s the one that pumps oxygenated blood around your body, keeping you alive. 
            </p>
            <p className="blog-post-text">
                However, there is more to health and fitness than cardio; muscles matter too! In this article, we’re going to discuss why muscle is so important and answer the question, “how quickly do you lose muscle?” 
            </p>
            <h3 className="blog-post-section-heading">
                The Functions of Muscles
            </h3>
            <p className="blog-post-text">
                Muscles play a critical role in every aspect of life. There are three types of muscle tissue – cardiac, smooth, and skeletal – but our main focus today is the latter. 
            </p>
            <p className="blog-post-text">
                Skeletal muscle is voluntary, and that means we have conscious control over it. However, muscles can act involuntarily too. Try not to blink when something comes close to your eyes or move your hand away from something hot. We have no control over reflexive muscle actions.  
            </p>
            <p className="blog-post-text">
                The main functions of skeletal muscle are:
            </p>
            <p className="blog-post-text">
                <strong>Movement</strong> – muscles are attached to bones via tendons and act as biomechanical pulleys to move your body. Every movement you make is the result of muscles contracting, relaxing, and affecting your skeleton. In fact, the interaction of muscles and bones is so closely connected that they are collectively referred to as the musculoskeletal system. 
            </p>
            <p className="blog-post-text">
                <strong>Posture</strong> – posture is the alignment of your joints, and it can be good or bad. Good posture requires very little muscular activity, while poor posture puts a lot more strain on your muscles and joints. Whether you’ve got good or bad posture, it’s your muscles that are responsible for keeping your head up, your spine erect, and your knees from collapsing under you when you are standing still. 
            </p>
            <p className="blog-post-text">
                <strong>Stability</strong> – you can’t fire a cannon out of a canoe, or so the saying goes. That’s because the force of the cannon would tip your boat over. The same is true of your body; seemingly unrelated muscles contract to provide other muscle groups with a stable platform from which to work. For example, when you use your arms to lift something heavy, your legs and midsection brace so that you don’t simply collapse under the load. 
            </p>
            <p className="blog-post-text">
                <strong>Temperature regulation</strong> – if you are cold, your muscles generate heat by shivering. This is called involuntary thermogenesis. The colder you are,the more intensely you tend to shiver. This might not be the most crucial function of muscles, but it IS kinda interesting! Shivering increases your caloric expenditure, so if you want to lose weight, turn down your thermostat. 
            </p>
            <p className="blog-post-text">
                <strong>Shape</strong> – muscle has a massive impact on your shape. You can sculpt your body by training with weights and building bigger muscles. This doesn’t mean that everyone who lifts weights is a bodybuilder. Bodybuilding generally involves trying to make muscles as big as possible. However, even marginally larger muscles will affect the shape of your body. Given how vital muscle is, it makes sense that it’s something that needs preserving. However, losing muscle is a real and common problem. The good news is that there are plenty of things you can do plenty delay and minimize muscle loss. 
            </p>
            <h3 className="blog-post-section-heading">
                How Fast Do You Lose Muscle?
            </h3>
            <p className="blog-post-text">
                Several factors affect determine how quickly you lose muscle. Some are unmodifiable, and at least some muscle loss is inevitable. Other factors are within your control, and you can take action to reduce muscle loss.
            </p>
            <h5 className="blog-post-subsection-heading">
                Age
            </h5>
            <p className="blog-post-text">
                Muscle mass tends to peak between the ages of 20 to 30. At this time, anabolic or muscle building hormone levels are at their highest. As anabolic hormones begin to fall, muscle breakdown starts to outpace muscle building, leading to smaller, weaker muscles and a  process called sarcopenia. 
            </p>
            <p className="blog-post-text">
                A loss of functional strength usually accompanies the loss of muscle mass. Studies reveal that muscle mass decreases approximately 3–8% per decade after the age of 30. This rate of decline is <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2804956/" target="_blank" rel="noopner noreferrer">even higher after the age of 60</a>.
            </p>
            <h5 className="blog-post-subsection-heading">
                Activity levels
            </h5>
            <p className="blog-post-text">
                Your body adapts to the stresses it’s exposed to. If you don’t use your muscles, your body responds by getting rid of “unwanted” muscle mass. It’s a case of use it or lose it. The more sedentary you are, the faster you’ll lose muscle. 
            </p>
            <p className="blog-post-text">
                For example, if you are unlucky enough to break a leg, it may have to be immobilized in a cast to allow the fracture to heal. When that cast comes off, the affected limb will have shrunk considerably, and you’ll have lost a lot of muscle mass in a short time. 
            </p>
            <p className="blog-post-text"> 
                How much muscle depends on the length of time you were immobile, but it’s quite normal <a className="blog-post-reference-link" href="https://www.sciencedirect.com/science/article/pii/S1568163713000639?via%3Dihub" target="_blank" rel="noopener noreferrer">to lose as much as 30% in just two weeks</a>. 
            </p>
            <p className="blog-post-text">
                Even moderate physical activity can help reduce sarcopenia. Weight-bearing activities such as walking can be enough to reduce muscle loss. It’s not just exercise that helps maintain muscle mass, but any activity that puts stress through your muscles.
            </p>
            <h5 className="blog-post-subsection-heading">
                Extended breaks from exercise
            </h5>
            <p className="blog-post-text">
                Exercise is vital for building and preserving muscle mass, and strength training is especially useful. Ideally, once you have begun exercising, you should stick with it, taking only occasional breaks from your workout routine. When it comes to maintaining fitness and your muscle mass, consistency is the key! 
            </p>
            <p className="blog-post-text"> 
                But, how quickly do you lose muscle mass after stopping weightlifting? 
            </p>
            <p className="blog-post-text">
                While it’s impossible to say precisely how much and how fast you’ll lose muscle, as factors like age and nutrition are contributing factors, studies suggest that a break of 2-3 weeks is enough to <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/26980367/" target="_blank" rel="noopener noreferrer">cause a measurable decrease in muscle mass and strength</a>. 
            </p>
            <p className="blog-post-text"> 
                The good news is that even one workout per week can help preserve existing muscle mass or at least reduce any loss to almost insignificant levels. So, while it will probably take 2-4 workouts per week for several months to increase muscle mass, just a single training session per week will help maintain your hard-won gains.
            </p>
            <h5 className="blog-post-subsection-heading">
                Nutrition
            </h5>
            <p className="blog-post-text">
                You are what you eat, and your diet can have a significant impact on how fast you can lose muscle. Very low-calorie diets, especially when maintained for months at a time, can <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/26566405/" target="_blank" rel="noopener noreferrer">accelerate sarcopenia</a>. 
            </p>
            <p className="blog-post-text">
                With fewer calories available, your body looks for ways to reduce its energy expenditure. One sure-fire way to do this is to decrease muscle size. Muscle tissue requires calories to maintain it. Less muscle mass means the reduced calorie intake will go further. 
            </p>
            <p className="blog-post-text">
                That’s why crash diets are such a bad idea; they cause fat loss but result in significant muscle loss too. 
            </p>
            <p className="blog-post-text">
                Your body also needs an abundance of protein to maintain your muscle mass. Muscles contain a lot of protein, and things like exercise and the stresses and strains of daily life cause muscle breakdown. 
            </p>
            <p className="blog-post-text">
                Your body uses dietary proteins to repair this damage and consuming too little means that it won’t have the materials it needs for rebuilding. With breakdown outpacing repair, muscle loss is inevitable.
            </p>
            <h5 className="blog-post-subsection-heading">
                Stress
            </h5>
            <p className="blog-post-text">
                Stress is part and parcel of modern life. Whether you are at work, at home, or just driving your car, stress levels can soar. Stress is often viewed as a psychological issue, but it also affects you physically and <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6724061/" target="_blank" rel="noopener noreferrer">can contribute to muscle loss</a>. 
            </p>
            <p className="blog-post-text">
                When you are stressed, your body enters "fight or flight" mode, leading to increased heart rate, breathing rate, blood pressure, and blood glucose levels. 
            </p>
            <p className="blog-post-text">
                Another aspect of your stress response is an increase in the production of cortisol. Cortisol is a catabolic hormone, meaning it causes tissue breakdown. 
            </p>
            <p className="blog-post-text">
                If you turn back the clock to when humans were hunter-gatherers, stress was actually a good thing. It was also very short-lived. Confronted with a source of danger, stress gave you the instant energy you needed to run or fight for your life. Once the threat passed, your body returned to its pre-stress state. 
            </p>
            <p className="blog-post-text">
                However, modern life can be a constant source of stress; there is no respite. This means instead of occasional bursts of cortisol, levels of this hormone are elevated for weeks or even months at a time. 
            </p>
            <p className="blog-post-text">
                The result? Accelerated muscle loss. 
            </p>
            <p className="blog-post-text">
                So, how quickly do you lose muscle mass? The answer depends on several factors, including your stress and activity levels, diet, and age. And while there isn’t much you can do about Old Father Time, other things like exercise and what you eat are all within your control. 
            </p>
            <h3 className="blog-post-section-heading">
                The Effects of Losing Muscle 
            </h3>
            <p className="blog-post-text">
                Losing muscle won’t just affect how you look; it can have an impact on several other aspects of your life too. Think of the following as reasons to try and maintain or even increase your muscle mass.
            </p>
            <h5 className="blog-post-subsection-heading">
                1. Reduced functional strength
            </h5>
            <p className="blog-post-text">
                Less muscle usually means less strength, which can have an adverse effect on many aspects of your life. Even simple tasks like walking, carrying groceries, and climbing stairs are more demanding after losing muscle. The harder these activities are, the more energy you’ll have to use to do them, and the more tired you’re likely to feel. Increased muscle mass makes life easier and less tiring. 
            </p>
            <h5 className="blog-post-subsection-heading">
                2. Decreased metabolic rate and weight gain
            </h5>
            <p className="blog-post-text">
                Muscle is metabolically active tissue, and it needs calories to sustain it. The more muscle mass you have, the <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC296885/" target="_blank" rel="noopener noreferrer">more calories you’ll burn each day</a>. If you lose muscle and do not eat less, you may find yourself gaining weight. Conversely, adding even a small amount of muscle will increase your metabolism, making maintaining or even losing weight considerably easier.
            </p>
            <h5 className="blog-post-subsection-heading">
                3. Increased insulin resistance
            </h5>
            <p className="blog-post-text">
                Your muscles use glucose for fuel. More muscle mass means more glucose is utilized, and less is left circulating in your blood. Loss of muscle mass can increase insulin resistance, leading to a <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/27324808/" target="_blank" rel="noopener noreferrer">chronic increase in blood glucose levels</a>. Increased blood glucose can lead to weight gain and increase your risk of developing type II diabetes. 
            </p>
            <h5 className="blog-post-subsection-heading">
                4. Increased risk of injury and falls
            </h5>
            <p className="blog-post-text">
                Weak muscles increase your risk of injury. When you are strong, picking up a heavy grocery bag or mowing your lawn should present no real problem. But, if you’ve lost muscle, these tasks are much harder and could even lead to injury. A lot of acute back pain is the result of muscle weakness.  
            </p>
            <p className="blog-post-text">
                You also need muscle to stabilize your joints. Unstable joints are more likely to experience wear and tear, leading to joint injury and osteoarthritis, damaging the cartilage inside the joints. 
            </p>
            <p className="blog-post-text">
                A lack of muscle and strength can increase your risk of suffering a fall. Falls in younger people are rarely serious but could still result in a sprain or fracture. However, falls in the elderly are the leading cause of hip fractures and other life-changing injuries.
            </p>
            <p className="blog-post-text">
                The more muscle mass you’ve got, the less impactful sarcopenia will be as you age. That’s why it’s so important to increase your muscle mass in your 20s to 30s and work hard to maintain it after that.
            </p>
            <h5 className="blog-post-subsection-heading">
                5. Reduced quality of life
            </h5>
            <p className="blog-post-text">
                Medical science is amazing; it can help prolong your life by controlling symptoms and treating diseases that would otherwise end your life. However, if you have lost so much muscle mass that you are no longer able to walk unaided, get out of bed, or even sit up, life probably won’t be a whole lot of fun. If you want to live a rewarding, independent life, minimizing muscle loss is a must.
            </p>
            <h5 className="blog-post-subsection-heading">
                6. Increased longevity
            </h5>
            <p className="blog-post-text">
                Relative to your body fat percentage, the more muscle you have as you age, <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/24561114/" target="_blank" rel="noopener noreferrer">the longer you’ll probably live</a>. While some age-related sarcopenia is unavoidable, muscle loss can be significantly reduced so that it has less of an effect. Muscle appears to be the armor that can help you live longer. 
            </p>
            <p className="blog-post-text">
                Grip strength, a common test used to estimate muscle mass, is considered a reliable indicator of increased live span. The theory is that if you’ve got strong hands, the rest of your body is probably strong too.
            </p>
            <h3 className="blog-post-section-heading">
                How To Minimize Muscle Loss
            </h3>
            <p className="blog-post-text">
                It’s beyond the scope of this article to provide you with a detailed blueprint for minimizing muscle loss. However, we CAN give you an idea of the types of things you need to do to keep sarcopenia to a minimum.
            </p>
            <p className="blog-post-text">
                <strong>1. Strength training</strong> – lifting weights is the best form of exercise for building and maintaining muscle mass. Bodyweight exercises can be similarly beneficial. 
            </p>
            <p className="blog-post-text">
                <strong>2. Be consistent</strong> – the occasional 1 to 2-week break from exercise won’t do you any significant harm, and the extra recovery may even be beneficial.  However, you cannot store fitness indefinitely, and your workouts must be consistent to maintain your muscle mass. 
            </p>
            <p className="blog-post-text">
                <strong>3. Consume adequate protein</strong> – the RDA for protein is 0.8 grams per kilo of bodyweight. However, if you exercise regularly and want to prevent sarcopenia, an intake of closer to 1.2 grams per kilo should probably be your new minimum. 
            </p>
            <p className="blog-post-text">
                <strong>4. Quit smoking</strong> – chronic smoking <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/31965191/" target="_blank" rel="noopener noreferrer">increases muscle atrophy</a>. Quitting smoking will help maintain existing muscle mass and make strength training workouts more effective.
            </p>
            <p className="blog-post-text">
                <strong>5. Reduce your alcohol intake</strong> – drinking too much booze can lead to weaker, smaller muscles and a condition called <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5513686/" target="_blank" rel="noopener noreferrer">alcoholic myopathy</a>, the symptoms of which include muscle stiffness, spasms, atrophy, and cramps. While the occasional alcoholic drink probably won’t do you any harm, binge and chronic drinking invariably will.
            </p>
            <h3 className="blog-post-section-heading">
                Conclusion
            </h3>
            <p className="blog-post-text">
                There are several factors that dictate how fast you lose muscle mass but, as you age, at least some muscle loss is inevitable. That’s why little old people are the way they are!
            </p>
            <p className="blog-post-text">
                However, while you probably won’t be able to avoid muscle loss altogether, there are plenty of things you can do to preserve your muscle mass and make any loss less impactful.  
            </p>
            <p className="blog-post-text">
                Regular strength training will invariably help, as will eating healthily and consuming plenty of protein. Reducing your stress levels, not smoking, and drinking alcohol in moderation, if at all, will also be beneficial. If you’re not sure where to start with strength training, <a className="blog-post-reference-link" href="/" target="_blank" rel="noopener noreferrer">DeltaTrainer</a> is a great affordable option that provides you with an expert 1-on-1 remote trainer.
            </p>
            <p className="blog-post-text">
                Muscle mass naturally peaks during your 20-30s, but that doesn’t mean it has to be all downhill from there. You can’t stop the passage of time, and aging is inevitable, but you can take steps to ensure that you lose the least amount of muscle possible.
            </p>
            <h3 className="blog-post-section-heading">
                References:
            </h3>
            <p className="blog-post-text">
                <strong>1. PubMed:</strong> Muscle Tissue Changes with Aging
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2804956/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2804956/</a>
            </p>
            <p className="blog-post-text">
                <strong>2. Science Direct:</strong> Skeletal Muscle Atrophy During Short-Term Disuse: Implications for Age-Related Sarcopenia
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://www.sciencedirect.com/science/article/pii/S1568163713000639?via%3Dihub" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S1568163713000639?via%3Dihub</a> 
            </p>
            <p className="blog-post-text">
                <strong>3. PubMed:</strong> Muscle Disuse as a Pivotal Problem in Sarcopenia-related Muscle Loss and Dysfunction
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/26980367/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/26980367/</a>
            </p>
            <p className="blog-post-text">
                <strong>4. PubMed:</strong> Nutrition for Sarcopenia
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/26566405/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/26566405/</a>
            </p>
            <p className="blog-post-text">
                <strong>5. PubMed:</strong> Mitigation of Muscle Loss in Stressed Physiology: Military Relevance
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6724061/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6724061/</a>
            </p>
            <p className="blog-post-text">
                <strong>6. PubMed:</strong> Skeletal Muscle Metabolism Is A Major Determinant of Resting Energy Expenditure
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC296885/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC296885/</a>
            </p>
            <p className="blog-post-text">
                <strong>7. PubMed:</strong> Skeletal Muscle Regulates Metabolism via Interorgan Crosstalk: Roles in Health and Disease
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/27324808/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/27324808/</a>
            </p>
            <p className="blog-post-text">
                <strong>8. PubMed:</strong> Muscle mass index as a predictor of longevity in older adults
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/24561114/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/24561114/</a>
            </p>
            <p className="blog-post-text">
                <strong>9. PubMed:</strong> Two Weeks of Smoking Cessation Reverse Cigarette Smoke-Induced Skeletal Muscle Atrophy and Mitochondrial Dysfunction in Mice
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://pubmed.ncbi.nlm.nih.gov/31965191/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/31965191/</a>
            </p>
            <p className="blog-post-text">
                <strong>10. PubMed:</strong> Alcoholic Myopathy: Pathophysiologic Mechanisms and Clinical Implications
            </p>
            <p className="blog-post-text">
                <a className="blog-post-reference-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5513686/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5513686/</a>
            </p>
        </Container>
    )
}

export default HowQuicklyDoYouLoseMuscle;