import React, { useEffect } from 'react';
import HeaderIndex from './header/index';
import QuestionIndex from './questions/index';
import MoreIndex from './more/index';

const FAQIndex = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <div data-nosnippet="data-nosnippet">
            <HeaderIndex />
            <QuestionIndex />
            <MoreIndex />
        </div>
    )
}

export default FAQIndex;