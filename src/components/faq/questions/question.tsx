import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface QuestionProps {
    question: string,
    answer: string
}

const Question = ({question, answer}: QuestionProps) => {
    return (
        <ListGroup.Item className="border-0">
            <h5 className="question">{question}</h5>
            <p className="answer">{answer}</p>
        </ListGroup.Item>
    )
}

export default Question;