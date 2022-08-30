import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';


interface PressCardProps {
    logo: string,
    alt: string,
    text: string,
    link: string,
    linkText: string
}

const PressCard = ({logo, alt, text, link, linkText}: PressCardProps) => {

    return (
        <Col className="p-0 mb-4">
            <Card className="rounded-0 m-auto press-card">
                <Container className="text-center pt-4">
                    <img src={logo} alt={alt} loading="lazy" style={{height: "2.0625rem", width: "6.125rem"}} />
                </Container>
                <Card.Body>
                    <Card.Text className="m-auto press-card-text">
                        "{text}"
                    </Card.Text>
                    <hr className="text-center mt-3 mb-2 press-line"></hr>
                    <a className="underlined-link press-card-link" href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PressCard;