import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Headshot from './headshot';
import dave from '../../../media/about/dave-hs (1).png';
import gabe from '../../../media/about/gabe-hs (1).png';
import jim from '../../../media/about/jim-s-hs (1).png';
import johnG from '../../../media/about/john_gray_headshot.png';
import john from '../../../media/about/john_headshot_2.png';
import matt from '../../../media/about/matt-hs (1).png';
import mattR from '../../../media/about/matt-r-hs (1).png';
import nate from '../../../media/about/nate (1).png';
import susannah from '../../../media/about/susannah (1).png';
import tom from '../../../media/about/tom_headshot.png'; 
import gabeO from '../../../media/about/gabe_ong.png'
import cody from '../../../media/about/cody_leach_headshot_2.png'
import kris from '../../../media/about/kris_headshot.png'
import sean from '../../../media/about/sean_headshot.png'
import santana from '../../../media/about/santana_headshot.png'
import kade from '../../../media/about/kade_headshot.png'
import pranav from '../../../media/about/pranav_headshot.png'
import dylan from '../../../media/about/dylan_headshot.png'
import grace from '../../../media/about/grace_headshot.png'
import ty from '../../../media/about/ty_headshot.png'
import nicole from '../../../media/about/nicole_headshot.png'
import drive from '../../../media/about/drive (1).png';
import incite from '../../../media/about/incite (1).png';
import pbv from '../../../media/about/pbv (1).png';
import './index.css';

const LeadershipIndex = () => {
    return (
        <div className="standard-width mx-auto">
            <div className="py-5">
                <h3 className="text-center leadership-header">Our Team</h3>
                <div className="border-0 headshots-container">
                    <Headshot src={matt} name="Matt Spettel" linkedIn="https://www.linkedin.com/in/matt-spettel/" desc="Co-Founder & Product" />
                    <Headshot src={gabe} name="Gabriel Madonna" linkedIn="https://www.linkedin.com/in/gabriel-madonna/" desc="Co-Founder & Tech" />
                    <Headshot src={john} name="John LaGue" linkedIn="https://www.linkedin.com/in/john-lague/" desc="Operations & Growth" />
                    <Headshot src={sean} name="Sean Mageau" linkedIn="https://www.linkedin.com/in/sean-mageau-ms-cscs-nasm-master-trainer-286a9117/" desc="Trainer Development" />
                    <Headshot src={cody} name="Cody Leach" linkedIn="https://codycpt.com/" desc="Trainer Operations" />
                    <Headshot src={nate} name="Nathanuel Frezzell" linkedIn="https://www.linkedin.com/in/nathanuel-frezzell-25939021/" desc="Training" />
                    <Headshot src={tom} name="Tom Kolos" linkedIn="https://www.instagram.com/tom_kolos_trainer/?hl=en" desc="Training" />
                    <Headshot src={kris} name="Kris Sullivan" linkedIn="/about" desc="Training" />
                    <Headshot src={santana} name="Santana Yturralde" linkedIn="/about" desc="Training" /> 
                    <Headshot src={dylan} name="Dylan Larimore" linkedIn="https://www.linkedin.com/in/dylan-larimore-9ab198127/" desc="Training" />
                    <Headshot src={grace} name="Grace Ellis" linkedIn="https://www.instagram.com/graceellis17/" desc="Training" />
                    <Headshot src={nicole} name="Nicole Robert" linkedIn="/about" desc="Training" />
                    <Headshot src={gabeO} name="Gabriel Ong" linkedIn="https://www.linkedin.com/in/leonard-gabriel-ong-2674aa192/" desc="Tech" />
                    <Headshot src={ty} name="Ty Kay" linkedIn="/about" desc="Tech" />
                    <Headshot src={kade} name="Kade Stewart" linkedIn="https://www.linkedin.com/in/kade-stewart/" desc="Design" />
                    <Headshot src={susannah} name="Susannah Hainley" linkedIn="https://www.linkedin.com/in/shainley/" desc="Design" />
                    <Headshot src={pranav} name="Pranav Viswanathan" linkedIn="https://www.linkedin.com/in/pranav-viswanathan-159985170/" desc="Growth" />
                </div>
            </div>
            <hr className="my-0 standard-width leadership-line" style={{height: "0.3125rem"}}></hr>
            <div className="py-5">
                <h3 className="text-center mb-5 leadership-header">Investors & Advisors</h3>
                <Row className="text-center">
                    <Col className="investor-col">
                        <img src={incite} alt="Incite Ventures Logo" className="incite" />
                        <div className="investor-text-container">
                            <p className="text-center investor-text">Incite Ventures</p>
                        </div>
                    </Col>
                    <Col className="investor-col">
                        <img src={drive} alt="Drive Capital Logo" className="drive" />
                        <div className="investor-text-container">
                            <p className="text-center investor-text" >Drive Capital</p>
                        </div>
                    </Col>
                    <Col className="investor-col"> 
                        <img src={pbv} alt="Purpose Built Ventures Logo" className="pbv"/>
                        <div className="investor-text-container">
                            <p className="text-center investor-text">Purpose Built Ventures</p>
                        </div>
                    </Col>
                </Row>
                <div className="border-0 headshots-container">
                    <Headshot src={mattR} name="Matt Rogers" linkedIn="https://www.linkedin.com/in/mattrogers2/" desc="Incite Ventures" />
                    <Headshot src={jim} name="Jim Swartz" linkedIn="https://www.linkedin.com/in/jim-swartz-63b47a4a/" desc="Accel Partners" />
                    <Headshot src={dave} name="Dave Mawhinney" linkedIn="https://www.linkedin.com/in/davemawhinney/"  desc="Carnegie Mellon" />
                </div>
            </div>
            <hr className="my-0 standard-width" style={{height: "0.3125rem"}}></hr>
            <div className="text-center py-5 mb-3">
                <h3 style={{fontSize: "1.5rem", fontWeight: 200}}>Interested in joining the team?</h3>
                <h3 style={{fontSize: "1.125rem", fontWeight: 300}}>Email <a className="underlined-link" href="mailto:sean@deltatrainer.fit">sean@deltatrainer.fit</a></h3>
            </div>
        </div>
    )
}

export default LeadershipIndex;