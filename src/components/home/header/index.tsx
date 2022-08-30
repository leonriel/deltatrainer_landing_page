import React from 'react';
import './index.scss';
import { Button, Carousel } from 'react-bootstrap';
import splash from '../../../media/home/action_promo.mp4';

const HeaderIndex = () => {
    return (
        <div>
        <Carousel controls={false} indicators={false}>
            <Carousel.Item className="overflow-hidden home-header-container">
                <video className="home-header-img" loop autoPlay muted playsInline>
                    <source src={splash} type="video/mp4" />
                </video>
                <Carousel.Caption className="home-header-text-container">
                    <h1 className="m-0 lg-caption" style={{fontWeight: 700}}>
                        A trainer for you
                    </h1>
                    <h3 className="sm-caption" style={{fontWeight: 300}}>1-on-1 coaching to reach your goals</h3>
                    <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="free-trial-btn"><div>Start Free Trial</div></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default HeaderIndex;