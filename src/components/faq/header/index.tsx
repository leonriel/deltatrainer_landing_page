import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import headerImg from '../../../media/faq/faq-header-comp (1).jpg';
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
            <Carousel.Item  className="overflow-hidden faq-header-container">
                <div>
                    <img src={headerImg} alt="Man with white earbuds and a blue tank top checking Apple Watch" loading="lazy" className="faq-header-img" style={{width: "100%"}} />
                </div>
                <Carousel.Caption className="faq-header-text-container">
                    <h3 className="faq-header-text">FAQ</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderIndex;