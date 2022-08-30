import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReviewsIndex from './index';
import AshleyR from './long_reviews/ashley_r';
import ErinB from './long_reviews/erin_b';
import KristenH from './long_reviews/kristen_h';

const ReviewsRouter = () => {
    return (
        <Router basename="/reviews">
            <Switch>
                <Route exact path="/">
                    <ReviewsIndex />
                </Route>
                <Route exact path="/ashley-r">
                    <AshleyR />
                </Route>
                <Route exact path="/erin-b">
                    <ErinB />
                </Route>
                <Route exact path="/kristen-h">
                    <KristenH />
                </Route>
                <Route path="/*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReviewsRouter;