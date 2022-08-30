import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import headerImg from '../../../media/reviews/reviews (1).jpg';
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
            <Carousel.Item  className="overflow-hidden reviews-header-container">
                <div style={{marginRight: "-5%"}}>
                    <img src={headerImg} alt="Group of five DeltaTrainer affiliates" loading="lazy" className="reviews-header-img" style={{width: "100%"}} />
                </div>
                <Carousel.Caption className="reviews-header-text-container">
                    <h3 className="reviews-header-text">Reviews</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderIndex;