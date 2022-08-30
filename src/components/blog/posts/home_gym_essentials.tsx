import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/blog/home-gym-essentials.jpeg';
import dumbbell1 from '../../../media/blog/dumbbell 1.png';
import dumbbell2 from '../../../media/blog/dumbbell 2.png';
import dumbbell3 from '../../../media/blog/dumbbell 3.png';
import dumbbell4 from '../../../media/blog/dumbbell 4.png';
import dumbbell5 from '../../../media/blog/dumbbell 5.png';
import dumbbell6 from '../../../media/blog/dumbbell 6.png';
import dumbbell7 from '../../../media/blog/dumbbell 7.png';
import pullup1 from '../../../media/blog/pullup 1.png';
import pullup2 from '../../../media/blog/pullup 2.png';
import pullup3 from '../../../media/blog/pullup 3.png';
import kettlebell1 from '../../../media/blog/kettlebell 1.png';
import kettlebell2 from '../../../media/blog/kettlebell 2.png';
import barbell1 from '../../../media/blog/barbell 1.png';
import barbell2 from '../../../media/blog/barbell 2.png';
import barbell3 from '../../../media/blog/barbell 3.png';
import press1 from '../../../media/blog/press 1.png';
import press2 from '../../../media/blog/press 2.png';
import weights1 from '../../../media/blog/weights 1.png';
import weights2 from '../../../media/blog/weights 2.png';
import extra1 from '../../../media/blog/extra 1.png';
import extra2 from '../../../media/blog/extra 2.png';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const HomeGymEssentials = () => {
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
                <meta property="og:url" content="https://www.deltatrainer.fit/blog/home-gym-essentials" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Home Gym Essentials" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mt-3 mb-2 blog-post-title">Home Gym Essentials</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">John L.</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Feb 16, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                Whether you want a compact home gym or a fully decked out home gym this guide will layout all the options. We attempted to collect the most affordable options that maintain quality so investing in your fitness won't break the bank.
            </p>
            <ul className="blog-post-text">
                <li><a href="#dumbbells" className="blog-post-text" style={{textDecoration: "none"}}>Dumbbells</a></li>
                <li><a href="#pull-up-bar" className="blog-post-text" style={{textDecoration: "none"}}>Pull Up Bar</a></li>
                <li><a href="#kettlebells" className="blog-post-text" style={{textDecoration: "none"}}>Kettlebells</a></li>
                <li><a href="#barbell-bench" className="blog-post-text" style={{textDecoration: "none"}}>Barbell / Bench</a></li>
                <li><a href="#machines-cardio" className="blog-post-text" style={{textDecoration: "none"}}>Machines / Cardio</a></li>
                <li><a href="#resistance-bands-yoga-ball" className="blog-post-text" style={{textDecoration: "none"}}>Resistance Bands / Yoga Ball</a></li>
                <li><a href="#extras" className="blog-post-text" style={{textDecoration: "none"}}>Extras</a></li>
            </ul>
            <p className="blog-post-text">
                Many people are avoiding the gym right now. Even without a pandemic, life has been getting busy for most. Squeezing in time at the gym to an already hectic schedule is difficult. In the increasingly busy world home workouts have become
                increasingly popular. This article will help you plan out exactly what you need to begin or expand your fitness journey at home.
            </p>
            <p className="blog-post-text">
                First, you'll want to solidify your fitness goal. For those just looking to stay active and get a bit healthier, a lot can be accomplished at home with absolutely no equipment. There are plenty of bodyweight exercises that can be done
                at home that will prove quite effective.
            </p>
            <p className="blog-post-text">
                However, while bodyweight exercise alone can do a lot, if you are looking to make significant progress, you'll need more than bodyweight. Particularly, for strength and muscle gains, equipment becomes crucial. Your bodyweight is a great
                start, but it doesn't have the same potential for progressive overload to activate optimal hypertrophy. In other words, you can't breakdown your muscles as efficiently so your muscles can't regrow bigger and stronger.
            </p>
            <p className="blog-post-text">
                This article will provide a list of some essential equipment (with links to buy) that will allow you to open new potentials for growth. We've broken it down by equipment and provided options depending on your budget. This will give you
                the tools to begin getting jacked at home.
            </p>
            <p className="blog-post-text">
                If you're not sure what to get, consult your trainer as he/she will be the best resource to help determine what is best. If you don't have a DeltaTrainer yet, you can sign up for a 14 day free trial (it's only $2/day after that for your
                own 1-on-1 trainer)<a target="_blank" rel="noopener noreferrer" href="https://www.deltatrainer.fit" style={{textDecoration: "none"}}> here</a>.
            </p>
            <p className="blog-post-text">Note: These recommendations are primarily for those living in the U.S.</p>
            <div id="dumbbells" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Dumbbells</h2>
            <p className="blog-post-text">NOTE: Used/Pre-owned adjustable dumbbells can have worn down mechanisms that can fail during use. Be careful when purchasing adjustable dumbbells and always look at reviews from previous buyers.</p>
            <p className="blog-post-text">
                There are tons of options for buying dumbbells, but the ideal option for you will vary significantly depending on your budget, how quickly you want to receive them, and your goal/experience. However, to get the best possible training
                experience, you will likely want a variety of weights. For most people, this means getting an adjustable dumbbell set that has 15lb - 40lb weights. People who are more experienced or are looking to build large amounts of muscle the
                weight range might be higher and for people completely new to fitness the weight range might be closer to 2lb - 30lb. Dumbbells will benefit people of any experience level.
            </p>
            <p className="blog-post-text">NOTE: Due to high demand there are many "dumbbell scams" operating so always be careful when making a purchase.</p>
            <h3 className="blog-post-subsection-heading">Budget Conscious And/Or Need Something Fast</h3>
            <p className="blog-post-text">
                At the time of this writing, a global pandemic is forcing most gyms to close their doors bringing the demand for at home fitness equipment to an all time high. Dumbbells are a piece of equipment that have been particularly impacted. Not
                only have prices sky-rocketed due to the new demand, but shipping times can also be 8-16 weeks! That's why we have collection of "quick and dirty" options to get some sort of weights, fast.
            </p>
            <ul className="blog-post-text">
                <li>
                    <p>
                        Craigslist, Ebay, Facebook Market Place - In terms of price and speed, you might find the best deal using these marketplace sites. There are downsides though. First, you'll be getting used equipment that may not be in great
                        condition (luckily weights are hard to truly damage), you'll also have to deal with fluctuating availability, and finally there are many "dumbbell scams" going on right now so you will need to be extra careful when purchasing
                        from individuals on these sites. For those reasons these options can be pretty time consuming so we won't go into too much detail about them, but we wanted to include these options incase you happen to get lucky with them.
                    </p>
                </li>
                <li>
                    <p>
                        In Person Stores -
                        <a
                            target="_blank" rel="noopener noreferrer" href="https://www.dickssportinggoods.com/p/ethos-rubber-hex-dumbbell-19au6uthsrbbrhxdmdmb/19au6uthsrbbrhxdmdmb?sku=20080460&amp;camp=CSE:DSG_92700048849702971_lia_aud-563275157923:pla-826114201363&amp;segment=&amp;gclid=Cj0KCQiA5bz-BRD-ARIsABjT4njTAbnRBjZX8cTRHTdHwdMKC6IsN7Lder9PXPQyMkifyKCWtIZ6dpIaAt2hEALw_wcB&amp;gclsrc=aw.ds"
                            style={{textDecoration: "none"}}
                        >
                            &nbsp;Dick's Sporting Goods&nbsp;
                        </a>
                        and Walmart. Both Dick's Sporting Goods and Walmart both carry a variety of weights in their physical locations for reasonable prices. However, due to the current high demand always call your local store to see if they have any
                        dumbbells in stock (make sure to ask what weights they have too, some only have 2.5lb and 5lb weights).
                    </p>
                </li>
                <li><p>The Sand/Cement weights</p></li>
            </ul>
            <img src={dumbbell1} alt="Sand/cement weights"  className="blog-post-img" />
            <p className="blog-post-text">Currently**, the most reliable option for getting an adjustable dumbbell set quickly** is to get one of the sand/cement adjustable weight sets (seen above).</p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Fastest Delivery (still takes 10-15 days)</p></li>
                <li><p>Inexpensive (~$100-$130 for a variety of weights)</p></li>
                <li><p>Adjustable</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Metric Weights (kgs only)</p></li>
                <li><p>Screw On Ends (can take a while to adjust these)</p></li>
                <li><p>Sand/Cement/Plastic (not as compact as metal weights and less durable over long periods).</p></li>
            </ul>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.walmart.com/ip/66LB-Adjustable-Dumbbell-Weight-Sets-Solid-Fitness-Dumbbell-Set-for-Home-Gym-Exercise-Training-16pcs-weight-plates-2-extension-bars-and-4-nuts/790143829" style={{textDecoration: "none"}}>
                    Walmart&nbsp;
                </a>
                - If you're unfamiliar with Aliexpress and would feel more comfortable using a U.S company you can find a comparable weight set
                <a target="_blank" rel="noopener noreferrer" href="https://www.walmart.com/ip/66LB-Adjustable-Dumbbell-Weight-Sets-Solid-Fitness-Dumbbell-Set-for-Home-Gym-Exercise-Training-16pcs-weight-plates-2-extension-bars-and-4-nuts/790143829" style={{textDecoration: "none"}}> here </a>
                on their sit for only about $20 more.
            </p>
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Kitclan-Dumbbells-Adjustable-Equipment-Exercise/dp/B08C771XQR/ref=sxin_9_pa_sp_search_thematic_sspa?cv_ct_cx=dumbbell&amp;dchild=1&amp;keywords=dumbbell&amp;pd_rd_i=B08C771XQR&amp;pd_rd_r=2d34659b-8074-416f-a200-bcd81968531b&amp;pd_rd_w=91RLP&amp;pd_rd_wg=mxnST&amp;pf_rd_p=4b3ae3bc-a81d-4118-8d1e-318bd2f6c8aa&amp;pf_rd_r=N7P60JWVZD5W61F2VHM4&amp;qid=1607894277&amp;sr=1-4-a8004193-6951-43f6-852a-aff7dbba9115-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTkUwMU0yOEhQODdWJmVuY3J5cHRlZElkPUEwMjkzMTUzMzJIRkdSSFcxRzdRQyZlbmNyeXB0ZWRBZElkPUEwMjAyNjc2MjdKWjFQTFAwQ0UwRCZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    style={{textDecoration: "none"}}
                >
                    Amazon&nbsp;
                </a>
                options (slightly more expensive/slower)- Amazon also has some similar options with different color schemes.
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Kitclan-Dumbbells-Adjustable-Equipment-Exercise/dp/B08C771XQR/ref=sxin_9_pa_sp_search_thematic_sspa?cv_ct_cx=dumbbell&amp;dchild=1&amp;keywords=dumbbell&amp;pd_rd_i=B08C771XQR&amp;pd_rd_r=2d34659b-8074-416f-a200-bcd81968531b&amp;pd_rd_w=91RLP&amp;pd_rd_wg=mxnST&amp;pf_rd_p=4b3ae3bc-a81d-4118-8d1e-318bd2f6c8aa&amp;pf_rd_r=N7P60JWVZD5W61F2VHM4&amp;qid=1607894277&amp;sr=1-4-a8004193-6951-43f6-852a-aff7dbba9115-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTkUwMU0yOEhQODdWJmVuY3J5cHRlZElkPUEwMjkzMTUzMzJIRkdSSFcxRzdRQyZlbmNyeXB0ZWRBZElkPUEwMjAyNjc2MjdKWjFQTFAwQ0UwRCZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    style={{textDecoration: "none"}}
                >
                    &nbsp;Here&nbsp;
                </a>
                is one Amazon option and
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Nice-Adjustable-Dumbbell-Non-Slip-All-Purpose/dp/B088KVGVKB/ref=sxin_9_pa_sp_search_thematic_sspa?cv_ct_cx=dumbbell&amp;dchild=1&amp;keywords=dumbbell&amp;pd_rd_i=B088KVGVKB&amp;pd_rd_r=2d34659b-8074-416f-a200-bcd81968531b&amp;pd_rd_w=91RLP&amp;pd_rd_wg=mxnST&amp;pf_rd_p=4b3ae3bc-a81d-4118-8d1e-318bd2f6c8aa&amp;pf_rd_r=N7P60JWVZD5W61F2VHM4&amp;qid=1607894277&amp;sr=1-2-a8004193-6951-43f6-852a-aff7dbba9115-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTkUwMU0yOEhQODdWJmVuY3J5cHRlZElkPUEwMjkzMTUzMzJIRkdSSFcxRzdRQyZlbmNyeXB0ZWRBZElkPUEwNjQ1NzEyVFNNTEpNTU44NE1EJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
                    style={{textDecoration: "none"}}
                >
                    &nbsp;click here&nbsp;
                </a>
                for a second Amazon option.
            </p>
            <h3 className="blog-post-subsection-heading">Ready to Invest</h3>
            <p className="blog-post-text">If you have the budget to go for some higher quality dumbbells there are other options out there.</p>
            <p className="blog-post-text" style={{fontWeight: "bold"}}>Best speed</p>
            <img src={dumbbell2} alt="ATIVAFIT Adjustable Set Dumbells"  className="blog-post-img" />
            <p className="blog-post-text">
                ~$600
                <a target="_blank" rel="noopener noreferrer" href="https://www.walmart.com/ip/ATIVAFIT-Adjustable-Dumbbell-55-71-5-Pounds-Fitness-Dial-Dumbbell-with-Handle-and-Weight-Plate-for-Home-Gym-1-PCS/332639571?selected=true" style={{textDecoration: "none"}}>
                    &nbsp;ATIVAFIT Adjustable Set
                </a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Fast Delivery (delivered within 5 days, as of this writing)</p></li>
                <li><p>Adjustable / Plenty of Weight Variations (2.5kg - 25kg / 5.5lb - 55lb)</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Expensive</p></li>
                <li><p>Do NOT come as a pair, need to buy two</p></li>
                <li><p>Weight in Metric (kg not in lbs)</p></li>
            </ul>
            <p className="blog-post-text">
                Overall, this is the fastest dumbbell set (over 50lbs) we could find that has many weight variations and is easy to adjust.
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/ATIVAFIT-Dumbbell-71-5/dp/B07PXS7QD3/ref=sr_1_7?dchild=1&amp;keywords=adjustable&amp;qid=1607970849&amp;s=sporting-goods&amp;sr=1-7&amp;th=1" style={{textDecoration: "none"}}>
                    &nbsp;Here are the same weights on Amazon&nbsp;
                </a>
                if you'd rather use that than Walmart. If you don't mind waiting a couple extra weeks
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/YPC-Adjustable-Dumbbells-Strength-Exercise/dp/B08LDVPYLV/ref=pd_di_sccai_4/141-8646084-4255729?_encoding=UTF8&amp;pd_rd_i=B08LDXSB6L&amp;pd_rd_r=6ab11833-bee6-494b-9f33-e75bafa3b5c7&amp;pd_rd_w=NC20s&amp;pd_rd_wg=N22DY&amp;pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&amp;pf_rd_r=TQP9VMZ00DGWBNQ4547Q&amp;refRID=TQP9VMZ00DGWBNQ4547Q&amp;th=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;here is a good Amazon option&nbsp;
                </a>
                as well that is about $100 less expensive.
            </p>
            <p className="blog-post-text">OR</p>
            <p className="blog-post-text">
                If you're willing to wait a couple more weeks and want something that isn't in kilograms then it would be worth getting
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08MWS3X4Z/ref=sspa_dk_detail_0?pd_rd_i=B08MWS3X4Zp13NParams&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNkhYWUhYUUc2WVZJJmVuY3J5cHRlZElkPUEwNDA2ODY2M0xKU1EyUEFVOUY0NCZlbmNyeXB0ZWRBZElkPUEwMDE1NzIwMUtTUEZEWjQyMDZSSiZ3aWRnZXROYW1lPXNwX2RldGFpbDImYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&amp;th=1&amp;psc=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;these Gorilla gadget weights&nbsp;
                </a>
                as they come together in a pair and are in pounds. The price will come out to about the same with sales tax for either option.
            </p>
            <p className="blog-post-text" style={{fontWeight: "bold"}}>Need heavier weights fast and have cash to spend?</p>
            <img src={dumbbell3} alt="YPC Adjustable Dumbbells"  className="blog-post-img" />
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08LDVFTCR/ref=sspa_dk_detail_1?pd_rd_i=B08LDVFTCR&amp;pd_rd_w=RrwZa&amp;pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&amp;pd_rd_wg=KajWZ&amp;pf_rd_r=52HJD9SER8SDWA2P2T15&amp;pd_rd_r=c675b536-1e90-41e6-aef6-e9e6a6559540&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyV1NMMVpEM05EOSZlbmNyeXB0ZWRJZD1BMDYyNTc0MTNPMU1CS01SMEw3NUQmZW5jcnlwdGVkQWRJZD1BMDg2ODI1ODFaTjY1TlhMS1lHUTQmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&amp;th=1"
                    style={{textDecoration: "none"}}
                >
                    ~$785 Amazon YPC Adjustable Weights
                </a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Plenty of Weight Variations (10-90lb)</p></li>
                <li><p>Fast Delivery (7-10 days)</p></li>
                <li><p>Goes Up to 90lbs</p></li>
                <li><p>In Imperial Weight (uses pounds not kilograms)</p></li>
                <li><p>Comes as a pair</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Expensive</p></li>
            </ul>
            <p className="blog-post-text">
                If you're willing to spend a bit more and want something a bit heavier these weights are another great option to get something fast. They should arrive within a week and for 90lb weights the price is not too expensive in reality.
                However, most people will not need 90lb dumbbells for their first few years of training (or anything over 50lb for that matter) so getting these weights will be a bit excessive. If your trainer thinks you need these and have the money
                to pay for them they will be a quick solution to your lack of dumbbells. Find the dumbbells
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08LDVFTCR/ref=sspa_dk_detail_1?pd_rd_i=B08LDVFTCR&amp;pd_rd_w=RrwZa&amp;pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&amp;pd_rd_wg=KajWZ&amp;pf_rd_r=52HJD9SER8SDWA2P2T15&amp;pd_rd_r=c675b536-1e90-41e6-aef6-e9e6a6559540&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyV1NMMVpEM05EOSZlbmNyeXB0ZWRJZD1BMDYyNTc0MTNPMU1CS01SMEw3NUQmZW5jcnlwdGVkQWRJZD1BMDg2ODI1ODFaTjY1TlhMS1lHUTQmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&amp;th=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;on Amazon here.
                </a>
            </p>
            <h3 className="blog-post-subsection-heading">Don't Need as Much Weight But Still Looking to Get Something Fast?</h3>
            <img src={dumbbell4} alt="ATIVAFIT 44lb Dumbbell"  className="blog-post-img" />
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/ATIVAFIT-Adjustable-Dumbbell-Weight-Single/dp/B088K776B2/ref=sr_1_5?dchild=1&amp;keywords=adjustable&amp;qid=1607970849&amp;s=sporting-goods&amp;sr=1-5&amp;th=1" style={{textDecoration: "none"}}>
                    ~$485 ATIVAFIT 44lb&nbsp;
                </a>
                (NOTE: there are two single dumbbells in the link, you would need to buy 2 @ $280 to get the full pair).
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Easily Adjustable (from 5.5lbs-44lbs)</p></li>
                <li><p>Fast Delivery (5 days)</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Expensive</p></li>
                <li><p>Does Not Come As Pair</p></li>
                <li><p>Weight IN Metric (uses kilograms, not pounds)</p></li>
            </ul>
            <p className="blog-post-text">The ATIVAFIT weights are another great option if you know you won't need any weight over 40lb for a long time and want to get started ASAP.</p>
            <img src={dumbbell5} alt="FLYBIRD Adjustable"  className="blog-post-img" />
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B088WS6QRD/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&amp;psc=1" style={{textDecoration: "none"}}>~280 FLYBIRD Adjustable 5 - 25 lbs</a> ( NOTE: there are two single dumbbells in the link,
                you would need to buy 2 @ $140/each to get the full pair).
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Easily Adjustable (from 5lbs-25lbs)</p></li>
                <li><p>Fast Delivery (5 days)</p></li>
                <li><p>Weight In Imperial (pounds)</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Only goes up to 25lbs</p></li>
                <li><p>Does Not Come As Pair</p></li>
            </ul>
            <p className="blog-post-text">
                Ask your trainer what weight they think is best for you. You may not need anything more than 25lbs. These are an excellent option if you know you won't need any weight over 25lb for a long time and want to get started ASAP.
            </p>
            <h3 className="blog-post-subsection-heading">Best Quality Overall/Price</h3>
            <p className="blog-post-text">If you have the budget and are willing to be patient these dumbbells will give you the best overall variation, ease of use and quality.</p>
            <p className="blog-post-text"><a target="_blank" rel="noopener noreferrer" href="https://www.bowflex.com/selecttech/552/100131.html?cgidmaster=selecttech-compare" style={{textDecoration: "none"}}>Bowflex 552 Dumbbells</a></p>
            <img src={dumbbell6} alt="Bowflex dumbbells"  className="blog-post-img" />
            <p className="blog-post-text"><a target="_blank" rel="noopener noreferrer" href="https://www.bowflex.com/selecttech/552/100131.html?cgidmaster=selecttech-compare" style={{textDecoration: "none"}}>~$350 (free shipping)</a> Bowflex Weights</p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Inexpensive (compared to similar options)</p></li>
                <li><p>Optimal Number of Weight Variations</p></li>
                <li><p>In Imperial Weight (uses pounds not kilograms)</p></li>
                <li><p>Comes as a pair</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Extremely Slow Delivery (up to 4 months)</p></li>
            </ul>
            <p className="blog-post-text">
                The Bowflex weights are by far the best quality weights for the price. However, they are currently taking an unbearably long time to ship. If you have the money we recommend buying one of the sand/cement options above that arrive
                quickly while you wait for your Bowflex. You can also get some
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B001ARYU58?aaxitk=C6GsSoiQQo.KV2R.2ccdXg&amp;pd_rd_plhdr=t&amp;ref=dacx_dp_2802338720501_8518318410801" style={{textDecoration: "none"}}> used options from Amazon</a> as well that ship within about
                a month.
            </p>
            <h3 className="blog-post-subsection-heading">Reading this after the demand has gone down or only need one weight to complete your set?</h3>
            <img src={dumbbell7} alt="Rubber dumbbells"  className="blog-post-img" />
            <p className="blog-post-text">
                $20-$60
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08GSGG4L1/ref=sspa_dk_detail_1?pd_rd_i=B08GR66FYN&amp;pd_rd_w=YsJzM&amp;pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&amp;pd_rd_wg=PzZgJ&amp;pf_rd_r=FWZGQTZV9SZSRTNK3862&amp;pd_rd_r=46f0685d-e10d-406e-a072-83cd4e020b4e&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaUjhMREw5WUcxVEomZW5jcnlwdGVkSWQ9QTA3Nzk4MTIyQjhZVVZWNkJHVEIwJmVuY3J5cHRlZEFkSWQ9QTA2NTU5MTEzUFFQNERYSFcyWlhDJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&amp;th=1&amp;psc=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;Amazon Rubber Dumbbells
                </a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Inexpensive</p></li>
                <li><p>Fast Delivery</p></li>
                <li><p>Weight in Imperial (in pounds not kilograms)</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Not Adjustable/ Only Constant Weight</p></li>
                <li><p>Availability Fluctuates Often</p></li>
            </ul>
            <p className="blog-post-text">
                If you only need one specific pair of dumbbells or if you only have the budget for one set then these are great options to get something fast. Note that the availability of these types of dumbbells fluctuates often so we've included two
                separate links.
            </p>
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08GSGG4L1/ref=sspa_dk_detail_1?pd_rd_i=B08GR66FYN&amp;pd_rd_w=YsJzM&amp;pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&amp;pd_rd_wg=PzZgJ&amp;pf_rd_r=FWZGQTZV9SZSRTNK3862&amp;pd_rd_r=46f0685d-e10d-406e-a072-83cd4e020b4e&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaUjhMREw5WUcxVEomZW5jcnlwdGVkSWQ9QTA3Nzk4MTIyQjhZVVZWNkJHVEIwJmVuY3J5cHRlZEFkSWQ9QTA2NTU5MTEzUFFQNERYSFcyWlhDJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&amp;th=1&amp;psc=1"
                    style={{textDecoration: "none"}}
                >
                    Option 1
                </a>
            </p>
            <p className="blog-post-text"><a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/AmazonBasics-Rubber-Encased-Hex-Dumbbell/dp/B074DZ6NJB?th=1" style={{textDecoration: "none"}}>Option 2</a></p>
            <p className="blog-post-text">As always, ask your trainer what's best for you!</p>
            <div id="pull-up-bar" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Pull Up Bar</h2>
            <p className="blog-post-text">
                A pull up bar is one of the "most bang for your buck" pieces of home workout equipment. If you want to know how to get ripped without weights, you'll need a pull up bar. Pull up bars are relatively cheap (~$25) and are easy to install.
                Pull ups are a great exercise because they engage multiple muscle groups with your full bodyweight. For reference, pull ups engage your Lats, Biceps, Forearms, Pecs, Obliques, Rhomboids, Serratus Anterior, Traps, and others to a lesser
                extent (<a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/311091421_Electromyographic_analysis_of_muscle_activation_during_pull-up_variations" style={{textDecoration: "none"}}>source</a>). Many of those muscles are often neglected by
                other bodyweight exercises. Ultimately, major aesthetic changes can occur with a pull up bar alone.
            </p>
            <p className="blog-post-text">
                Overall, the pull up bar is one of the most cost effective training tools. However, if you're a complete beginner to fitness a pull up bar may seem a bit intimidating and unattainable. If you are new to training and you have more to
                invest in your equipment, you may want to start with some dumbbells or kettlebells rather than going straight to a pull up bar.
            </p>
            <p className="blog-post-text">
                If you have a limited budget, I would suggest a pull up bar and one or two 25lb dumbbells (consult with your<a target="_blank" rel="noopener noreferrer" href="http://app.deltatrainer.fit" style={{textDecoration: "none"}}> trainer</a> as you could go higher or lower on the
                weight depending on your experience).
            </p>
            <p className="blog-post-text">
                NOTE: Pull up bars hung in doorways can end up leaving marks or scraping the paint around the door frame. If this is a concern consider padding the points of contact with old t-shirts/clothes or go for stand alone pull bar frame.
            </p>
            <h3 className="blog-post-subsection-heading">Doorway Options</h3>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Iron-Gym-Total-Upper-Workout/dp/B001EJMS6K/ref=sr_1_5?dchild=1&amp;keywords=iron+gym&amp;qid=1607548030&amp;sr=8-5" style={{textDecoration: "none"}}>Classic Door Mount Pull Up Bar</a> (~$25)
            </p>
            <img src={pullup1} alt="Classic door mount pull up bar"  className="blog-post-img" />
            <p className="blog-post-text">This is the classic at home pull up bar. With the easy mount system it's easy to put up and down in case you want to store it somewhere else in between uses or to use it on the floor for push ups.</p>
            <p className="blog-post-text">
                For taller people
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/AmazeFan-Pull-Doorway-Ergonomic-Grip/dp/B07KCS7G8G/ref=sr_1_8?dchild=1&amp;keywords=iron+gym&amp;qid=1607548297&amp;sr=8-8" style={{textDecoration: "none"}}> here is a higher up bar</a> as well.
            </p>
            <p className="blog-post-text">Advanced Door Mount Pull Up Bar (~$50)</p>
            <img src={pullup2} alt="Advanced door mount pull up bar"  className="blog-post-img" />
            <h3 className="blog-post-subsection-heading">Don't have a lip on your door frame?</h3>
            <p className="blog-post-text">
                There are<a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/HANDSONIC-Doorway-Required-Adjustable-Exercise/dp/B088KKZ15G/ref=cm_cr_arp_d_product_top?ie=UTF8" style={{textDecoration: "none"}}> inexpensive pull up bars that require no lip</a>. However,
                BE EXTRA CAREFUL during set up. These are have a high potential to fail if not installed correctly and you could hurt yourself or the frame of the door so please be careful if you go this route.
            </p>
            <h3 className="blog-post-subsection-heading">Have a bit more space and don't want to risk damaging a door frame?</h3>
            <p className="blog-post-text">Stand Alone Pull Up Bar and Dip (~$100 - $175)</p>
            <img src={pullup3} alt="Stand alone pull up bar and dip"  className="blog-post-img" />
            <p className="blog-post-text">
                If you are interested in getting this type of pull up bar, but are really looking to save money this is the 
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/SogesGame-Adjustable-Multi-Function-Equipment-PSBB005-S8-US/dp/B08KDX627N/ref=asc_df_B08KDX627N/?tag=hyprod-20&amp;linkCode=df0&amp;hvadid=475826290556&amp;hvpos=&amp;hvnetw=g&amp;hvrand=16971567024188784756&amp;hvpone=&amp;hvptwo=&amp;hvqmt=&amp;hvdev=c&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=9005924&amp;hvtargid=pla-1082511150167&amp;psc=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;least expensive one we could find
                </a>
                , but its quality is unclear.
            </p>
            <div id="kettlebells" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Kettlebells</h2>
            <p className="blog-post-text">
                Kettlebells are a great training tool for at home workouts. They don't take up much space and can be used in a variety of different ways. Plus, using kettlebells allows your body to be challenged by a constantly changing center of
                gravity and you'll build forearm/grip strength holding onto the thicker handle. Fortunately, kettlebells are also a bit easier to find right now compared to dumbbells.
            </p>
            <h3 className="blog-post-subsection-heading">Best Overall Option</h3>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.roguefitness.com/rogue-kettlebells?prod_id=7155&amp;gclid=Cj0KCQiA5bz-BRD-ARIsABjT4ngUS03Z9MLZqJ_TnyCHOKUQ0OoLfIQzF0UY_nw71S-czk5FC3WRsGcaAshdEALw_wcB" style={{textDecoration: "none"}}>
                    ~$50-$450 Rogue Kettlebells
                </a>
            </p>
            <img src={kettlebell1} alt="Rogue kettlebells"  className="blog-post-img" />
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Fast Delivery</p></li>
                <li><p>Weight in LBs and KBs</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Expensive Shipping</p></li>
            </ul>
            <p className="blog-post-text">
                If you don't want to spend too much time looking around for kettlebells we suggest asking your trainer which weights they think you should have and then going over to
                <a target="_blank" rel="noopener noreferrer" href="http://roguefitness.com" style={{textDecoration: "none"}}> roguefitness.com</a> and getting those weights. Rogue provides any weight option you could need, are solid quality, and are reasonably priced. The shipping can get
                expensive, but you'll get the kettlebells within a few days.
            </p>
            <h3 className="blog-post-subsection-heading">On a Budget?</h3>
            <p className="blog-post-text">If you aren't keen on paying the high shipping prices from Rogue and have an Amazon Prime account you'll be able to get some great deals there.</p>
            <p className="blog-post-text">
                Depending on what weight(s) you trainer recommends
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/s?k=kettlebell&amp;crid=1KMZVYYJOJ74V&amp;sprefix=kettlebells%2Csporting%2C-1&amp;ref=nb_sb_ss_ts-a-p_1_6" style={{textDecoration: "none"}}> Amazon has lots of options</a>. The options frequently
                change, but are all relatively comparable.
            </p>
            <p className="blog-post-text">
                Want a full set for cheap? 
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/bintiva-Kettlebells-Professional-Weights-Protective/dp/B073PKHH2R/ref=sxin_9_pa_sp_search_thematic_sspa?crid=1KMZVYYJOJ74V&amp;cv_ct_cx=kettlebell&amp;dchild=1&amp;keywords=kettlebell&amp;pd_rd_i=B07D948896&amp;pd_rd_r=23606dc6-a8b5-4a63-9a75-469eecb3de37&amp;pd_rd_w=ZazQM&amp;pd_rd_wg=OnQYA&amp;pf_rd_p=4b3ae3bc-a81d-4118-8d1e-318bd2f6c8aa&amp;pf_rd_r=0BJ63V59VW5AFH6NMTS8&amp;qid=1607975390&amp;sprefix=kettlebells%2Csporting%2C-1&amp;sr=1-4-a8004193-6951-43f6-852a-aff7dbba9115-spons&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQjdKUVk3SlA0QURXJmVuY3J5cHRlZElkPUEwODc5MTQ5MjZRRjVWVDAyNExLRCZlbmNyeXB0ZWRBZElkPUExMDIzNzMyMklJMlpXVEk3VUQ3VSZ3aWRnZXROYW1lPXNwX3NlYXJjaF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&amp;th=1"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;Bintiva Kettlebells from Amazon&nbsp;
                </a>
                are solid option. You can get a variety of different sets depending on what your trainer recommends and they will be of lasting quality.
            </p>
            <img src={kettlebell2} alt="Bintiva weights"  className="blog-post-img" />
            <p className="blog-post-text">Set of Binitiva weights. Sets come in many different sizes and amounts.</p>
            <div id="barbell-bench" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Barbell / Bench</h2>
            <p className="blog-post-text">
                The barbell is fundamental to most strength and body building programs. However, if you have limited space and/or a limited budget we recommend sticking with a pair of adjustable dumbbells. But, if you do have the space for a barbell
                and/or a bench, they will make great additions to your home gym!
            </p>
            <p className="blog-post-text">The below sections recommend options for Olympic 2in barbells. These are some of the most common barbells and are usually the best quality.</p>
            <h3 className="blog-post-subsection-heading">Barbell</h3>
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B08QVY6813/ref=sspa_dk_detail_6?psc=1&amp;pd_rd_i=B08QVY6813&amp;pd_rd_w=knRox&amp;pf_rd_p=4269e1a0-a218-4fbd-9748-1cd337d2f2a5&amp;pd_rd_wg=5DTkk&amp;pf_rd_r=E943ZPNNJ7QB8ABSSMMT&amp;pd_rd_r=91280023-5fe7-428b-b2e1-2d0705b6aa49&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTUtPMU80V0NUSEVTJmVuY3J5cHRlZElkPUEwNDkxNDEyMzVMV0hVRURPN1NNRyZlbmNyeXB0ZWRBZElkPUEwNDE2MTY3MjNHWU9GT1VTRkwzMiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    style={{textDecoration: "none"}}
                >
                    ~$100 DOYCE Olympic Barbell 7ft
                </a>
            </p>
            <img src={barbell1} alt="DOYCE Olympic Barbell"  className="blog-post-img" />
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Inexpensive</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Slightly slower shipping</p></li>
            </ul>
            <p className="blog-post-text">This is bar is by far one of the best deals available. It is rare to find one of this quality that is less than $100.</p>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Sporzon-Olympic-Weightlifting-Barbell-Capacity/dp/B088CXV8ZY/ref=sr_1_1?dchild=1&amp;keywords=barbell&amp;qid=1607988137&amp;sr=8-1&amp;th=1" style={{textDecoration: "none"}}>
                    ~$60-$140 Sporzon Olympic barbell
                </a>
            </p>
            <img src={barbell2} alt="Sporzon Olympic barbell"  className="blog-post-img" />
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Inexpensive</p></li>
                <li><p>Multiple variations</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Slightly slower shipping</p></li>
            </ul>
            <p className="blog-post-text">If you want / need a specific sized bar this is a great Amazon option for selecting exactly what size you need.</p>
            <p className="blog-post-text">Other Options:</p>
            <img src={barbell3} alt="Rogue Fitness Weights"  className="blog-post-img" />
            <p className="blog-post-text"><a target="_blank" rel="noopener noreferrer" href="https://www.roguefitness.com/weightlifting-bars-plates/barbells" style={{textDecoration: "none"}}>$300-$500 Rogue Fitness Weights</a></p>
            <p className="blog-post-text">If you want "top of the line" or very specific sized bars Rogue has all options you could want. However, they will be quite pricey, have inconsistent availability, and can take a while to ship.</p>
            <h3 className="blog-post-subsection-heading">Bench</h3>
            <img src={press1} alt="Body Champ 2 Piece Olympic Set"  className="blog-post-img" />
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Body-Champ-Olympic-BCB3835-PRO3900/dp/B0771T3J54/ref=sr_1_26?dchild=1&amp;keywords=bench&amp;qid=1613065140&amp;s=sporting-goods&amp;sr=1-26" style={{textDecoration: "none"}}>
                    ~$175 Body Champ 2 Piece Olympic Set
                </a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Adjustable- from incline all the way to decline</p></li>
                <li><p>Can be used as a squat rack</p></li>
                <li><p>Relatively inexpensive</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Sturdy, but can not hold max weights</p></li>
            </ul>
            <p className="blog-post-text">Recommended option:</p>
            <img src={press2} alt="Power Zone Squat Stand with Adjustable Bench"  className="blog-post-img" />
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Sunny-Health-Fitness-Adjustable-Weight/dp/B085K8NKSC/ref=sr_1_105?dchild=1&amp;keywords=bench&amp;qid=1613065238&amp;s=sporting-goods&amp;sr=1-105&amp;th=1" style={{textDecoration: "none"}}>
                    ~$465 Power Zone Squat Stand with Adjustable Bench
                </a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Fast Delivery</p></li>
                <li><p>Includes: Bench, Squat Rack, Leg Press machine, and pull up bar</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>More expensive</p></li>
            </ul>
            <p className="blog-post-text">
                The "Power Zone" is an excellent option if you have the money and space. Not only is it a fully adjustable bench, but it also works as a full squat rack, a pull up bar, and a leg press. It's a sturdy option that provides a lot of
                exercises in one set.
            </p>
            <h3 className="blog-post-subsection-heading">Weight Plates</h3>
            <p className="blog-post-text">
                Similar to dumbbells, weight plates can be somewhat unreliable to find online. We recommend quickly checking Facebook Marketplace and Craigslist for any deals near you (see dumbbell section for more tips on buying from individuals
                online). Also, discuss with your trainer about exactly which weight amounts would be best for you. Most people will not need a full weight set to start out.
            </p>
            <img src={weights1} alt="Titan weights"  className="blog-post-img" />
            <p className="blog-post-text"><a target="_blank" rel="noopener noreferrer" href="https://www.titan.fitness/strength/weight-plates/cast-iron-plates/cast-iron-olympic-plates/CPLATE_GROUP.html" style={{textDecoration: "none"}}>~$120-$430 Titan Weights</a></p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Lots of options</p></li>
                <li><p>Relatively inexpensive for a full set</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Rarely in stock</p></li>
            </ul>
            <p className="blog-post-text">Titan weights are a great option. They are quality weights and relatively inexpensive. However, due to popularity it can be difficult to catch them while they are in stock.</p>
            <img src={weights2} alt="CAP weights"  className="blog-post-img" />
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/CAP-Barbell-2-Inch-Olympic-10-Pound/dp/B07P6X8GBB/ref=sr_1_15?dchild=1&amp;keywords=barbells&amp;qid=1607986688&amp;sr=8-15&amp;th=1" style={{textDecoration: "none"}}>~$150-$260 Cap Weights Amazon</a>
            </p>
            <p className="blog-post-text">Pros:</p>
            <ul className="blog-post-text">
                <li><p>Good Quality</p></li>
                <li><p>Fast Delivery</p></li>
            </ul>
            <p className="blog-post-text">Cons:</p>
            <ul className="blog-post-text">
                <li><p>Slightly more expensive</p></li>
                <li><p>Shipping depends on availability</p></li>
            </ul>
            <p className="blog-post-text">If Titan weights aren't available, CAP weights are a great alternative. They are not as expensive as other options and are typically delivered quickly.</p>
            <p className="blog-post-text">
                If the above CAP option is not available, here is another
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/CAP-Barbell-2-Inch-Olympic-25-Pounds/dp/B07VPR7X8T/ref=sr_1_55?dchild=1&amp;keywords=barbells&amp;qid=1607986688&amp;sr=8-55&amp;th=1" style={{textDecoration: "none"}}> similar option on Amazon</a>.
            </p>
            <p className="blog-post-text">
                In addition to some large weights, here is a
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/CAP-Barbell-Olympic-Weight-Weights/dp/B07CTDPCZK/ref=pd_bxgy_img_3/141-5678751-1065467?_encoding=UTF8&amp;pd_rd_i=B07CTDPCZK&amp;pd_rd_r=50e13341-f9bc-490b-aab8-c91a80e8edd9&amp;pd_rd_w=4FKtN&amp;pd_rd_wg=d2Ic5&amp;pf_rd_p=f325d01c-4658-4593-be83-3e12ca663f0e&amp;pf_rd_r=SN3BVTH3Q6KZG7GEM54A&amp;psc=1&amp;refRID=SN3BVTH3Q6KZG7GEM54A"
                    style={{textDecoration: "none"}}
                >
                    &nbsp;~$130 Cap Weight 50lb bundle&nbsp;
                </a>
                that would go well with the above weights.
            </p>
            <div id="machines-cardio" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Machines / Cardio</h2>
            <p className="blog-post-text">There are dozens of cardio and full body machines out there. There are too many options to go over in this post, so we'll discuss machines in a future article.</p>
            <p className="blog-post-text">
                However, if you are looking for a full body/ cardio machine we recommend simple rowing machines. They are a great source of at-home full body cardio. For more suggestions and ideas please discuss options with your trainer directly.
            </p>
            <div id="resistance-bands-yoga-ball" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Resistance Bands / Yoga Ball</h2>
            <p className="blog-post-text">
                Two simple yet amazingly useful pieces of home workout equipment are resistance bands and yoga balls! They are incredibly compact and relatively cheap, while offering a variety of potential exercises. Of course, if you are trying it
                gain a lot of muscle, resistance bands are not as optimal as free weights (dumbbells, barbell weights, kettlebells), but they can still provide muscle engagement you would not get with bodyweight alone - all for a relatively
                inexpensive price. If you're interested in going in depth about the potential pros and cons of using bands for muscle development check out this
                <a target="_blank" rel="noopener noreferrer" href="https://bonytobeastly.com/resistance-bands-for-muscle-hypertrophy/#3-the-problem-of-variable-resistance" style={{textDecoration: "none"}}> article here</a>. Yoga balls are great for improving mobility and core strength.
                Plus, yoga balls are relatively inexpensive as well.
            </p>
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/UPOWEX-Resistance-Whatafit-Exercise-Training/dp/B07DWSPQQY/ref=sr_1_1_sspa?dchild=1&amp;keywords=resistance+bands&amp;qid=1607976535&amp;sr=8-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUTJGRjlBQ0IxUThQJmVuY3J5cHRlZElkPUEwMDY2MzkwMkpLMFE0SFhEMVBZJmVuY3J5cHRlZEFkSWQ9QTAzMTQ0NzUzMjg5UFNPODNaNzNNJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
                    style={{textDecoration: "none"}}
                >
                    ~$30 Amazon Whatafit Resistance Bands Set
                </a>
            </p>
            <img src={extra1} alt="Resistance bands set"  className="blog-post-img" />
            <p className="blog-post-text">
                <a
                    target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/URBNFit-Exercise-Ball-Stability-Yoga/dp/B010MVAJZ2/ref=sr_1_3_sspa?dchild=1&amp;keywords=yoga+ball&amp;qid=1607986961&amp;sr=8-3-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyODhBTlc0N05TMzE2JmVuY3J5cHRlZElkPUEwODA3OTU5MVRXR1VTU002VkVNTiZlbmNyeXB0ZWRBZElkPUEwNzU4NDA2MUhGSDkwR0dJNjRUNiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    style={{textDecoration: "none"}}
                >
                    ~$12 Amazon URBANFit Yoga ball
                </a>
            </p>
            <p className="blog-post-text">NOTE: Almost any brand of yoga ball will deflate over time and can vary in quality from person to person.</p>
            <img src={extra2} alt="Yoga ball"  className="blog-post-img" />
            <p className="blog-post-text">
                There's lots of comparable options online for resistance bands and yoga balls. All of them will come relatively quickly and are all about the same price. Try to get a full set rather than one single band though.
            </p>
            <p className="blog-post-text">If you have questions just shoot your trainer a message on the DeltaTrainer app.</p>
            <div id="extras" style={{height: "90px"}}></div>
            <h2 className="blog-post-section-heading">Extras</h2>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B015EUKKIM?linkCode=ogi&amp;tag=menshealth-auto-20&amp;ascsubtag=" style={{textDecoration: "none"}}>Weight Vest ($40-$140)</a> - Weight vests are a great addition to a pull up or dip bar to load
                additional weight and increase the hypertrophy potential of bodyweight exercises.
            </p>
            <p className="blog-post-text">
                <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/TOMSHOO-Wheel-Roller-Push-UP-Griper/dp/B07HMQNDQB/ref=sr_1_13?dchild=1&amp;keywords=ab+wheel+jump+rope&amp;qid=1607976142&amp;sr=8-13" style={{textDecoration: "none"}}>
                    Ab Wheel, Push Up Bars, And Jump Rope Bundle ($18)&nbsp;
                </a>
                - For $18 you get all of these items to kick start your fitness journey. Ab Wheels are a phenomenal abdominal accessory. Push up bars can help people who have wrist pain during push ups, and jump rope is a great way to get in some high
                intensity cardiovascular work without needing to go anywhere or buy any expensive equipment.
            </p>
            <h2 className="blog-post-section-heading">No Equipment?</h2>
            <p className="blog-post-text">
                If you want to know how to get ripped at home without equipment or how to get ripped fast at home the best way is to get a trainer. Even if you aren't looking to get "jacked" at home and just want to be a bit healthier, a dedicated
                coach is the way to go. While you will be limited in what you can accomplish without equipment, you'll be even more limited if you're doing it by yourself. A trainer is the best way to hit your goals with or without equipment!
            </p>
        </Container>
    )
}

export default HomeGymEssentials;