import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './index.css';
import ProgramItem from './program_item';
import blueHolidaySale from '../../../media/home/holiday_pricing.png';

const HolidayPricingIndex = () => {
    return (
        <Container fluid className="text-center light-background pt-4 pb-4">
            <h1 className="mb-4 mt-3 holiday-pricing-header">Start with a 14-day free trial.</h1>
            <div className="position-relative mx-auto sale-info-container">
                <img src={blueHolidaySale} alt="Blue Holiday Sale Sign" className="position-absolute" style={{height: "4rem", width: "7.875rem", right: "-2rem"}} />
                <h3 style={{fontWeight: 600, fontSize: "1.0625rem"}}>THEN ONLY</h3>
                <h3 className="holiday-pricing-big-text">$2 / day</h3>
                <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search ,'_blank')} className="standard-btn-text sm-none md-block mx-auto" size="lg">
                    <span>Start Free Trial</span>
                </Button>
                <h3 className="mt-4 program-items-header">Your monthly program:</h3>
                <div className="mx-auto mb-5 pl-5">
                    <ProgramItem desc="Unlimited workouts." />
                    <ProgramItem desc="2 30 minute trainer calls." />
                    <ProgramItem desc="Unlimited trainer chat." />
                    <ProgramItem desc="Live motion feedback." />
                    <ProgramItem desc="Advanced workout analytics." />
                </div>
                <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="standard-btn-text d-md-none" size="lg">
                    <span>Start Free Trial</span>
                </Button>
            </div>
            <h3 className="my-4 billed-monthly-text mx-auto">Billed monthly. Apple Watches are available for an additional set up fee.</h3>
        </Container>
    )
}

export default HolidayPricingIndex;