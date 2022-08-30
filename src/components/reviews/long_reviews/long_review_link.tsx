import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface LongReviewLinkProps {
    path: string,
    src: string,
    name: string,
    width: number
}

const LongReviewLink = ({path, src, name, width}: LongReviewLinkProps) => {
    return (
        <Col md={width} className="p-0 long-review-link">
            <NavLink to={path}>
                <div className="long-review-link-img-container" style={{width: "100%", objectFit: "cover", overflow: "hidden"}}>
                    <img src={src} alt={name} style={{minHeight: "100%", width: "100%", filter: "brightness(70%)"}} />
                </div>
                <div className="position-absolute" style={{color: "white", bottom: "5%", left: "5%", right: "5%"}}>
                    <h3 className="long-review-link-title">{name}</h3>
                </div>
            </NavLink>
        </Col>
    )
}

export default LongReviewLink;