import React, { useEffect } from 'react';
import HeaderIndex from './header/index';
import LongReviewsIndex from './long_reviews/index';
import ShortReviewsIndex from './short_reviews/index';

const ReviewsIndex = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    
    return (
        <div>
            <HeaderIndex />
            <LongReviewsIndex />
            <ShortReviewsIndex />
        </div>
    )
}

export default ReviewsIndex;