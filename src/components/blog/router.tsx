import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BlogIndex from './index';
import HowQuicklyDoYouLoseMuscle from './posts/how_quickly_do_you_lose_muscle';
import WhyWomenNeedToStartStrengthTrainingNow from './posts/why_women_need_to_start_strength_training_now';
import DoINeedAPersonalTrainer from './posts/do_i_need_a_personal_trainer';
import HomeGymEssentials from './posts/home_gym_essentials';
import CorporateHealthAndWellnessBenefits from './posts/10_corporate_health_and_wellness_benefits';


const BlogRouter = () => {
    return (
        <Router basename="/blog">
            <Switch>
                <Route exact path="/">
                    <BlogIndex />
                </Route>
                <Route exact path="/why-women-need-to-start-strength-training-now">
                    <WhyWomenNeedToStartStrengthTrainingNow />
                </Route>
                <Route exact path="/how-quickly-do-you-lose-muscle">
                    <HowQuicklyDoYouLoseMuscle />
                </Route>
                <Route exact path="/do-i-need-a-personal-trainer">
                    <DoINeedAPersonalTrainer />
                </Route>
                <Route exact path="/home-gym-essentials">
                    <HomeGymEssentials />
                </Route>
                <Route exact path="/10-corporate-health-and-wellness-benefits-pandemic-era-&-beyond">
                    <CorporateHealthAndWellnessBenefits />
                </Route>
                <Route path="/*">
                    <Redirect exact to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default BlogRouter;