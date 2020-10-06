import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SingleBookedVolunteer = ({ bookedVolunteer }) => {
    return (
        <Col md={6}>
            <div className="booked_volunteer">
                <Row className="align-self-center">
                    <Col md={5}>
                        <img src={require(`../../assets/images/animalShelter.png`)} className="w-100" height="200px" alt="" />
                    </Col>
                    <Col md={7} className="align-self-center">
                        <div className="booked_volunteer__right">
                            <h5>{bookedVolunteer.bookedVolunteer}</h5>
                            <h6> {new Date(bookedVolunteer.date).toDateString('dd/mm/yyyy')} </h6>
                            <button className="btn btn-primary py-3">Cancel</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default SingleBookedVolunteer;