import React, { useEffect } from 'react';
import HeaderIndex from './header/index';
import BubblesIndex from './bubbles/index';
import GetStartedIndex from './get_started/index';
import WorkoutFeedbackIndex from './workout_feedback/index';
import ComparisonIndex from './comparison/index';
import PricingIndex from './pricing/index';
// import HolidayPricingIndex from './holiday_pricing/index';
import QuoteIndex from './quote/index';
import RatingIndex from './rating/index';
import PressIndex from './press/index';

const HomeIndex = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <div data-nosnippet="data-nosnippet">
            <HeaderIndex />
            <BubblesIndex />
            <GetStartedIndex />
            <WorkoutFeedbackIndex />
            <ComparisonIndex />
            <PricingIndex />
            <QuoteIndex />
            <RatingIndex />
            <PressIndex />
        </div>
    );
}

export default HomeIndex;