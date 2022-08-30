import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/blog/benefits.jpeg';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const CorporateHealthAndWellnessBenefits = () => {
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
    }, []);

    return (
        <Container className="mt-4 mb-5 blog-post-container">
            <Helmet>
                <meta property="og:url" content="https://www.deltatrainer.fit/blog/10-corporate-health-and-wellness-benefits-pandemic-era-&-beyond" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="10 Corporate Health & Wellness Benefits—Pandemic Era & Beyond" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mt-3 mb-2 blog-post-title">10 Corporate Health & Wellness Benefits—Pandemic Era & Beyond</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">Daniel G.</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Mar 9, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="Woman in exercise attire using a yoga ball" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                Fitness is essential to our health—and to 
                your company’s health, too. 
            </p>
            <p className="blog-post-text">
                Research shows that corporate fitness and wellness programs&nbsp;<a href="https://hbr.org/2010/12/whats-the-hard-return-on-employee-wellness-programs" target="_blank" rel="noreferrer noopener">reduce absenteeism</a>,  boost productivity and even <a href="https://www.healthaffairs.org/doi/pdf/10.1377/hlthaff.2009.0626" target="_blank" rel="noreferrer noopener">reduce healthcare costs</a>. But what was once simply a consideration for employers has become essential in the age of COVID-19, as businesses have had to play a much larger role in the health and safety of their employees. While that centers on following public health guidelines, it also means prioritizing corporate wellness and finding new ways to keep employees engaged in their own health and wellbeing.  
                
            </p>
            <p className="blog-post-text">
                If you’ve fallen behind on building your workplace wellness regime, it’s no sweat. As any great athlete can attest, getting started is the hardest part. Here are 10 ideas to help your team hit the ground running on your corporate health and wellness. 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                1. In-Office Facilities & Equipment 
            </p>
            <p className="blog-post-text">
                Whether you’ve reopened your office, are working from home for the foreseeable future or somewhere in between, the reality is that many of us will eventually return to the office in some capacity. In the meantime, as hitting the public gym may not be an option (or at least, not an appealing one), it could be an opportune time to invest in your own space. Not only might employees be motivated to kickstart their workout regimen or move their <a href="https://www.deltatrainer.fit/blog/home-gym-essentials" target="_blank" rel="noreferrer noopener">at-home routine</a> to a private, in-office facility, but they may also be more inclined to stick with it when things return to the (new) normal. Of course, depending on the scale of your build-out, this could be a fairly intensive investment, and you’ll want to consult <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/gym-employers.html" target="_blank" rel="noreferrer noopener">CDC guidelines for gyms</a> to ensure you’re following all sanitation and social distancing protocols through the pandemic (and beyond, really).  
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                2. Gym or Fitness 
            </p>
            <p className="blog-post-text">
                All that being said, most commercial gyms are up and running in line with public health guidelines, and many a quarantine-fatigued worker may be itching to get out of the bedroom-turned-office and back into the weight room. In the current economic climate, however, the notoriously heavy expense that is an annual gym membership could be even further out of reach than usual. 
            </p>
            <p className="blog-post-text">
                Employer-subsidized membership reimbursement programs can help employees overcome 
                the  cost barrier 
                to keeping up with their fitness goals, particularly if the program is structured in a way that keeps them accountable—e.g., requiring a certain number of check-ins per month. Some gyms will even match employer contributions to further incentivize employee health and wellness, so it’s worth looking into different corporate options. If you do decide to go this route, just make sure employees are clear on all the details—the amount the company will contribute, eligible facilities and programs, reimbursement instructions, etc. 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                3. Remote Fitness 
            </p>
            <p className="blog-post-text">
                Before COVID-19 upended life as we knew it, we were already trending toward a more virtual world; it just so happens that a highly contagious pandemic virus accelerated the shift. While it is impossible to know exactly what life will be like in the coming months and years, it is clear that certain things are forever changed—from the way we work to the way we work out. Remote fitness apps and programs have gained rapid ground during the pandemic as a way to keep people connected to their health while slowing the spread of the virus. But more than that, they’ve given people the autonomy to reach their fitness goals on their own terms, often from the comfort and judgement-free zone of their own home, with the help of a personal trainer. As with any fitness regimen, however, personalization and accountability are the keys to success. 
            </p>
            <p className="blog-post-text">
                One-on-one virtual training programs like <a href="https://www.deltatrainer.fit/" target="_blank" rel="noreferrer noopener">DeltaTrainer</a> encompass all of the above, with customized workouts delivered from personal trainers who monitor members’ progress via Apple Watch. (No watch? No problem—DeltaTrainer hooks  members up with a brand-new one for a modest one-time fee and provides cost-effective options for employers.) 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                4. Office Yoga / Meditation 
            </p>
            <p className="blog-post-text">
                For so many, balancing the demands of work and life has never been more difficult, which explains why feelings of stress, anxiety and burnout are at all-time highs. According to <a href="https://www.kff.org/coronavirus-covid-19/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/" target="_blank" rel="noreferrer noopener">Kaiser Family Foundation data</a>, approximately four in 10 U.S. adults reported symptoms of anxiety or depressive disorder during the pandemic—up from one in 10 the period prior. 
            </p>
            <p className="blog-post-text">
                Though addressing the escalating mental health crisis is a far more complex issue than hitting the yoga mat can solve, practicing mindfulness—especially amid the stress of the workday—can go a long way. Offering employees a safe space to reflect, restore and rejuvenate for even just 30 to 45 minutes a day can pay dividends in wellbeing and productivity. And if you’re still doing the virtual thing, <a href="https://www.verywellmind.com/best-meditation-apps-4767322" target="_blank" rel="noreferrer noopener">there are apps for that</a>—the costs of which you might consider subsidizing as a benefit.  
            </p>
            <p  className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                5. Fitness Challenges 
            </p>
            <p className="blog-post-text">
                In the age of Zoom, employers are having to find new, creative ways to foster collaboration and team building while working from a distance. A fitness or wellness challenge could be a great way to encourage a little friendly competition in the spirit of boosting physical and mental health. 
            </p>
            <p className="blog-post-text">
                Just be cautious with this one, though. The goal of the challenge should be to reduce the stress of the workday, rather than add to it with unrealistic goals or arduous reporting requirements. Think more habit-building than one-time metric—e.g., clocking 30 minutes of exercise a day, rather than logging 30,000 steps. 
            </p>
            <p  className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                6. Group Fitness Outings 
            </p>
            <p className="blog-post-text">
                <span className="blog-post-text"> </span>
                As outdoor events make their way onto the okay-with-proper-precautions list, organizing an outdoor fitness challenge or other group activity can help reunite a remote team in a safe and socially distanced environment. Or, as the ability to work remotely has created a more geographically diverse workforce, event registration sites like <a href="https://www.active.com/" target="_blank" rel="noreferrer noopener">Active.com</a> have a whole list of virtual runs and races in which people can participate from afar. (What better way to rally the team than training together for a virtual 5K?) 
            </p>
            <p className="blog-post-text">
                Of course, fitness outings don’t necessarily need to involve pounding pavement. Whether your team is game for a down-and-dirty mud run, a day of beach of volleyball or a cornhole tournament at the local brewery, wellness can take all different forms—getting up and out is key. 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                7. Wellness Retreat 
            </p>
            <p className="blog-post-text">
                In addition to escaping the demands of day-to-day life, a corporate wellness retreat makes for invaluable team building opportunities. 
            </p>
            <p className="blog-post-text">
                These retreats, facilitated by experts in mindfulness and other contemplative practices, are designed to enhance the health and wellness of both the individual and the group. From thrill-seeking adventures like zip lining and whitewater rafting, to restorative yoga and meditation, to collaborative, in-depth mindfulness training, wellness retreats serve as a much-needed reset button on mind, body and team spirit. Consistent with the times, <a href="https://destinationdeluxe.com/online-wellness-retreats-digital/" target="_blank" rel="noreferrer noopener">virtual wellness programs and retreats</a> are available as an alternative to the traditional, destination-based format. 
            </p>
            <p  className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                8. Providing Free or Discounted Therapy  
            </p>
            <p className="blog-post-text">
                Physical and mental health go hand in hand. With alarms sounding on the <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6932a1.htm" target="_blank" rel="noreferrer noopener">worsening mental health crisis</a> due to the added stress and isolation of the pandemic, facilitating access to mental health services has become an  increasingly urgent priority for healthcare stakeholders—employers included. 
            </p>
            <p className="blog-post-text">
                Bolstering your mental health benefits, including following the likes of <a href="https://www.businessinsider.com/companies-offering-more-mental-health-benefits-amid-coronavirus-2020-4" target="_blank" rel="noreferrer noopener">Starbucks, PwC</a> and <a href="https://www.lyft.com/careers/life-at-lyft" target="_blank" rel="noreferrer noopener">Lyft</a> in offering free therapy sessions, can make it easier for employees to access mental healthcare—a process that can be prohibitively expensive and difficult to navigate. New <a href="https://www.apa.org/monitor/2017/02/online-therapy" target="_blank" rel="noreferrer noopener">online therapy platforms</a> are further streamlining the process; offering a free or discounted membership to one of these sites is another way to make therapy more convenient and affordable to those who need it. 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                9. Sitting-to-Standing Desks 
            </p>
            <p className="blog-post-text">
                A few years back, there was no escaping the infamous “<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4838429/" target="_blank" rel="noreferrer noopener">Sitting Is the New Smoking</a>” and “<a href="https://time.com/sitting/" target="_blank" rel="noreferrer noopener">Sitting Kills</a>” headlines that had corporate employees quite literally jumping out of their seats—and with good reason. Research has shown that too much sitting can <a href="https://www.cancer.org/latest-news/sitting-time-linked-to-higher-risk-of-death-from-all-causes.html" target="_blank" rel="noreferrer noopener">significantly increase a person’s risk</a> of chronic disease, including certain cancers, and even lead to <a href="https://www.health.harvard.edu/blog/too-much-sitting-linked-to-an-early-death-201401297004" target="_blank" rel="noreferrer noopener">premature death</a>. According to a 2015–2016 CDC study <a href="https://jamanetwork.com/journals/jama/fullarticle/2715582" target="_blank" rel="noreferrer noopener">published in JAMA</a>, approximately one in four American adults sits for more than eight hours a day. These startling revelations helped to ignite the standing desk craze. But as it turns out, standing all day isn’t so great, either. Today, we know that movement is the key—and that a <a href="https://www.nbcnews.com/better/lifestyle/best-way-use-standing-desk-what-buy-maximize-benefits-ncna995046" target="_blank" rel="noreferrer noopener">combination between sitting and standing</a> can have a positive impact on both employee health and <a href="https://www.washingtonpost.com/lifestyle/wellness/standing-desks-boost-productivity-not-just-health-study-finds/2016/05/31/b7948390-2358-11e6-8690-f14ca9de2972_story.html" target="_blank" rel="noreferrer noopener">productivity</a>. As you’re reconfiguring your workplace to enable social distancing, consider bringing in desks that switch from sitting to standing. Or, if the majority of your workforce is remote, you might think about a partial reimbursement. It may be a significant up-front investment, but it’s a relatively small one in the context of your employees’ long-term health. 
            </p>
            <p className="blog-post-section-heading" style={{fontWeight: "bold"}}>
                10. Subsidizing Wearables; Fitness Trackers
            </p>
            <p className="blog-post-text">
                Today’s wearable tech does much more than count steps—although it serves an important purpose there, too. From tracking workouts, heart health and sleep patterns to sharing valuable insights with doctors and other professionals involved in your health, these devices play an increasingly significant role in our health and wellness. 
            </p>
            <p className="blog-post-text">
                That being said, smartwatches, fitness trackers and other wearable technology can carry a hefty price tag depending on the brand, features and functionality. Some employers have opted to subsidize the cost of wearables on the condition that <a href="https://www.wsj.com/articles/employees-get-apple-watch-for-25-but-theres-a-catch-1457039127" target="_blank" rel="noreferrer noopener">employees must meet certain fitness goals</a>. Not only is this a way to incentivize healthy habits, but if you do decide to run a group fitness challenge, it’ll make tracking and reporting easier for you and your team. 
            </p>
            <p className="blog-post-section-heading">
                A New, More Virtual Fitness Future 
            </p>
            <p className="blog-post-text">
                As fitness centers and workplaces reopen, it’s hard to say how employee habits and preferences will change. If we had to guess—<a href="https://youtu.be/rzkvhl3gD_E" target="_blank" rel="noreferrer noopener">and as this guy may be able to attest</a>—we’re betting on technology-enabled remote personal training as the way of the future. <a href="https://www.deltatrainer.fit/" target="_blank" rel="noreferrer noopener">Learn how DeltaTrainer is changing the corporate wellness game</a>.
            </p>
        </Container>
    )
}

export default CorporateHealthAndWellnessBenefits;