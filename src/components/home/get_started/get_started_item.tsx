import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface GetStartedItemProps {
    header: string,
    text: string
}

const GetStartedItem = ({header, text}: GetStartedItemProps) => {
    return (
        <ListGroup.Item className="p-0 mb-3 get-started-list-group-item">
            <h3 className="get-started-item-header">{header}</h3>
            <p className="get-started-item-text">{text}</p>
        </ListGroup.Item>
    );
}

export default GetStartedItem;