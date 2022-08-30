import React, { useEffect } from 'react';
import HeaderIndex from './header/index';
import BackgroundIndex from './background/index';
import LeadershipIndex from './leadership/index';
import PartnersIndex from './partners/index';
import PartnershipIndex from './partnership/index';

const AboutIndex = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    
    return (
        <div data-nosnippet="data-nosnippet">
            <HeaderIndex />
            <BackgroundIndex />
            {/* <LeadershipIndex /> */}
            <PartnersIndex />
            <PartnershipIndex />
        </div>
    )
}

export default AboutIndex;