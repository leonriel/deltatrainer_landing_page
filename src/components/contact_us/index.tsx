import React, { useEffect } from 'react';
import HeaderIndex from './header/index';
import QuestionsOrCommentsIndex from './questions-or-comments/index';

const ContactUsIndex = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <div data-nosnippet="data-nosnippet">
            <HeaderIndex />
            <QuestionsOrCommentsIndex />
        </div>
    )
}

export default ContactUsIndex;