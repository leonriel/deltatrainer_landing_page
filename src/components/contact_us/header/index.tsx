import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import headerImg from '../../../media/contact_us/contact-header-comp (1).jpg';
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
            <Carousel.Item className="overflow-hidden contact-us-header-container">
                <div>
                    <img src={headerImg} alt="Woman with red hair and blue-green apparel using a lat pulldown machine" loading="lazy" className="contact-us-header-img" style={{width: "100%"}} />
                </div>
                <Carousel.Caption className="contact-us-header-text-container">
                    <h3 className="contact-us-header-text">Contact Us</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderIndex;