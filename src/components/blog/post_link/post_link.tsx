import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

interface PostLinkProps {
    path: string,
    src: string,
    alt: string,
    title: string,
    author: string,
    date: string,
    width: number
}

const PostLink = ({path, src, alt, title, author, date, width}: PostLinkProps) => {
    return (
        <Col md={width} className="p-0 blog-post-link" style={{display: "none"}}>
            <Link to={path}>
                <div className="blog-post-link-img-container" style={{width: "100%", objectFit: "cover", overflow: "hidden"}}>
                    <img src={src} alt={alt} style={{minHeight: "100%", width: "100%", filter: "brightness(55%)"}} />
                </div>
                <div className="position-absolute" style={{color: "white", bottom: "5%", left: "5%", right: "5%"}}>
                    <h3 className="blog-post-link-title">{title}</h3>
                    <h3 className="blog-post-link-subtitle">By <span style={{fontWeight: 700}}>{author}</span> on <span style={{fontWeight: 700}}>{date}</span></h3>
                </div>
            </Link>
        </Col>
    )
}

export default PostLink;