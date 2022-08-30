import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

interface HeadshotProps {
    src: string,
    name: string,
    linkedIn: string,
    desc: string
}

const Headshot = ({src, name, linkedIn, desc}: HeadshotProps) => {
    return (
        <div className="border-0 headshot-container">
            <Card className="border-0">
                <Card.Img className="mx-auto" variant="top" src={src} style={{width: "10.125rem"}} alt={`Headshot of ${name}`} />
                <Card.Body className="text-center">
                    <Card.Title className="m-auto" style={{fontWeight: 300, fontSize: "1.15rem"}}><a href={linkedIn} className="linkedin-link" target="_blank" rel="noopener noreferrer">{name}</a></Card.Title>
                    <Card.Text style={{fontWeight: 300, fontSize: "0.9375rem"}}>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Headshot;