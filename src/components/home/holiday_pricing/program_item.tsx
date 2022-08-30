import React from 'react';
import { Row, Col } from 'react-bootstrap';
import checkMark from '../../../media/home/check_mark (1).png';

interface ProgramItemProps {
    desc: string
}

const ProgramItem = ({desc}: ProgramItemProps) => {
    return (
        <Row>
            <Col md={1} className="text-right pr-0 col-xs-2">
                <img src={checkMark} alt="Blue check mark" loading="lazy" className="check-mark" />
            </Col>
            <Col md={11} className="text-left my-auto pl-0 col-xs-10">
                <h3 className="m-0 program-item-text">{desc}</h3>
            </Col>
        </Row>
    )
}

export default ProgramItem;