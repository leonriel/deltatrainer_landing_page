import React from 'react';
import { Row, Col } from 'react-bootstrap';
import kaeos from '../../../media/about/kaleos-light (1).png';
import shape from '../../../media/about/SHAPE_logo-light (1).png';
import shadyside from '../../../media/about/xshadyside-light (1).png';
import './index.css';

const PartnersIndex = () => {
    return (
        <div className="dark-background py-5">
            <h3 className="text-center mb-5 partners-header">SELECT CORPORATE PARTNERS</h3>
            <Row className="mx-auto partners-row">
                <Col className="dark-background my-auto kaleos-col border-0 col-xs-6">
                    <img src={kaeos} alt="Kaeos On Demand logo" loading="lazy" className="ml-3" style={{width: "7.6875rem", height: "2.6875rem"}} />
                </Col>
                <Col className="dark-background my-auto shape-col border-0 col-xs-6 md-none">
                    <Row>
                        <Col className="pr-0">
                            <img src={shape} alt="SHAPE logo" loading="lazy" className="shape-img ml-3" />
                        </Col>
                        <Col className="my-auto">
                            <h4 className="m-0 shape-text">SHAPE</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="dark-background my-auto px-5 border-0">
                    <img src={shadyside} alt="X Shadyside logo" loading="lazy" style={{width: "14.4375rem", height: "3rem"}}  />
                </Col>
                <Col className="dark-background my-auto shape-col border-0 sm-none md-block">
                    <Row>
                        <Col className="pr-0">
                            <img src={shape} alt="SHAPE logo" loading="lazy" className="shape-img" />
                        </Col>
                        <Col className="my-auto">
                            <h4 className="m-0 shape-text">SHAPE</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PartnersIndex;