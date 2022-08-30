import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import headerImg from '../../../media/about/about-header-comp (1).jpg';
import './index.css';

const HeaderIndex = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "/drift.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    });


    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item  className="overflow-hidden about-header-container">
                <div>
                    <img src={headerImg} alt="Woman holding a barbell with two green 10 kilogram plates on her shoulders" loading="lazy" className="about-header-img" style={{width: "100%"}} />
                </div>
                <Carousel.Caption className="about-header-text-container">
                    <h3 className="about-header-text">About</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderIndex;