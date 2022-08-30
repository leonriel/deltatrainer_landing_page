import React from 'react';
import { Card } from 'react-bootstrap';

interface BubbleProps {
    src: string,
    alt: string,
    title: string,
    text: string
}

const Bubble = ({src, alt, title, text}: BubbleProps) => {
    return (
        <Card className="border-0 mx-auto" style={{ width: '18rem' }}>
            <div className="m-auto" style={{width: "9.0625rem", height: "9.0625rem"}}>
                <Card.Img variant="top" src={src} alt={alt} />
            </div>
            <Card.Body>
                <Card.Text className="text-center mb-1 bubble-header" style={{fontWeight: 600}}>{title}</Card.Text>
                <Card.Text className="text-center" style={{fontSize: "1.0625rem", fontWeight: 300}}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Bubble;