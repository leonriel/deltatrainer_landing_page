import React, { useState } from 'react';
import './index.css';
import { Row, Col, Navbar, Nav, Container, ListGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bigLogo from '../../media/navbar/dt-logo-white (1).png';
import smallLogo from '../../media/navbar/DT Logo (1).png';

const NavBarIndex = () => {
    const useSetState = (initialState:any) => {
        const [state, setState] = useState(initialState);
      
        const getState = async () => {
          let state;
      
          await setState((currentState:any) => {
            state = currentState;
      
            return currentState;
          });
      
          return state;
        };
      
        return [state, setState, getState];
    };

    const [open, setOpen] = useState("");
    const [isToggle, setToggle, getToggle] = useSetState(false);
    
    const toggleNav = async (e:any) => {
        e.preventDefault();
        
        setToggle(!isToggle);

        let toggle = await getToggle();

        if (toggle === true) {
            setOpen("open");
            document.getElementById("sidenav")!.style.opacity = "1";
            document.getElementById("sidenav")!.style.width = "14rem";
            document.getElementsByTagName("body")[0]!.style.overflow = "hidden";
            document.getElementById("overlay")!.style.display = "block";
        } else if (toggle === false) {
            setOpen("");
            document.getElementById("sidenav")!.style.opacity = "0";
            document.getElementById("sidenav")!.style.width = "0rem";
            document.getElementsByTagName("body")[0]!.style.overflow = "scroll";
            document.getElementById("overlay")!.style.display = "none";
        }
    }

    const delayToggleNav = async (e:any) => {
        setTimeout(function() {
            toggleNav(e);
        });
    }

    return (
        <React.Fragment>
            <div id="overlay" onClick={toggleNav}></div>
            <Navbar className="dark-background d-flex justify-content-center px-0 " style={{width: "100%", zIndex: 1000}} expand="lg">
                <Row className="navbar-row">
                    <Col>
                        <div className="navbar-brand-container">
                            <Navbar.Brand href="/" className="m-0 p-0"><img src={bigLogo} alt="DeltaTrainer logo"  loading="lazy" className="dt-brand sm-none md-block" /></Navbar.Brand>
                            <Navbar.Brand href="/" className="m-0"><img src={smallLogo} alt="DeltaTrainer logo"  loading="lazy" className="dt-brand md-none" /></Navbar.Brand>
                        </div>
                    </Col>
                    <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="my-auto p-0 nav-free-trial-btn md-none my-auto"><div style={{fontSize: ".75rem"}}>Start Free Trial</div></Button>
                    <button className="navbar-toggler col-xs-2" type="button" onClick={toggleNav}>
                        <div className={`animated-icon2 ${open}`}><span></span><span></span><span></span><span></span></div>
                    </button>
                    <div className="sm-none md-block my-auto nav-container" style={{paddingRight: "0.9375rem", paddingLeft: "0.9375rem"}}>
                        <Nav>
                            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink id="reviews" className="nav-link" to="/reviews" activeClassName="active">Reviews</NavLink>
                            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                            <NavLink className="nav-link" to="/faq" activeClassName="active">FAQ</NavLink>
                            <NavLink id="blog" className="nav-link" to="/blog" activeClassName="active">Blog</NavLink>
                            <NavLink className="nav-link text-nowrap" to="/contact-us" activeClassName="active">Contact Us</NavLink>
                            <Button onClick={() => window.open('https://app.deltatrainer.fit/signup' + window.location.search,'_blank')} className="my-auto p-0 nav-free-trial-btn"><div className="standard-btn-text">Start Free Trial</div></Button>
                        </Nav>
                    </div>
                    <Container id="sidenav" className="p-0 sidenav">
                        <ListGroup className="ml-4 mr-5 position-absolute" style={{width: "60%", top: "6rem"}}>
                            <ListGroup.Item className="border-right-0 border-left-0 border-top-0 border-dark px-0">
                                <NavLink className="p-0 mobile-nav-link" exact to="/" activeClassName="active" onClick={delayToggleNav}>Home</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-right-0 border-left-0 border-top-0 border-dark px-0">
                                <NavLink id="mobile-reviews" className="p-0 mobile-nav-link" to="/reviews" activeClassName="active" onClick={delayToggleNav}>Reviews</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-right-0 border-left-0 border-top-0 border-dark px-0">
                                <NavLink className="p-0 mobile-nav-link" to="/about" activeClassName="active" onClick={delayToggleNav}>About</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-right-0 border-left-0 border-dark px-0">
                                <NavLink className="p-0 mobile-nav-link" to="/faq" activeClassName="active" onClick={delayToggleNav}>FAQ</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-right-0 border-left-0 border-dark px-0">
                                <NavLink id="mobile-blog" className="p-0 mobile-nav-link" to="/blog" activeClassName="active" onClick={delayToggleNav}>Blog</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0">
                                <NavLink className="p-0 text-nowrap mobile-nav-link" to="/contact-us" activeClassName="active" onClick={delayToggleNav}>Contact Us</NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Container>
                </Row>
            </Navbar>
        </React.Fragment>
    );
} 

export default NavBarIndex;