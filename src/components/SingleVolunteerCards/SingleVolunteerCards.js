import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleVolunteerCards = ({ task }) => {
    return (
        <Col sm={12} md={6} lg={4} xl={3} className="mb-sm-3">
            <Link to={`/register/${task.name}`}>
                <Card className="border-0">
                    <Card.Img variant="top" className="img-fluid" src={require(`./../../assets/images/${task.pic}`)} />
                    <Card.ImgOverlay bsPrefix="card-img-overlay card_modified_overlay " className="p-0">
                        <Card.Title className="mb-0 text-center bg-primary text-white py-3">{task.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Link>
        </Col>
    );
};

export default SingleVolunteerCards;