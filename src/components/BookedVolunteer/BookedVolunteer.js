import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import SingleBookedVolunteer from '../SingleBookedVolunteer/SingleBookedVolunteer';
import './BookedVolunteer.css';
const BookedVolunteer = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookedVolunteer,setBookedVolunteer] = useState([]);
  useEffect(() => {
    fetch('https://damp-lowlands-40159.herokuapp.com/getBookedVolunteer?email=' + loggedInUser.email, {
      method: "GET",
      headers: {
        'Content-type': 'applicaton/json',
      }
    })
      .then(res => res.json())
      .then(data => setBookedVolunteer(data))
  }, [loggedInUser.email]);
  console.log(bookedVolunteer);
  return (
    <>
      {/* Booked Volunteer */}
      <Row className="mt-5">
        {
          bookedVolunteer.map(bv =>  <SingleBookedVolunteer key={bv._id} bookedVolunteer={bv}></SingleBookedVolunteer>)
        }
       
      </Row>
    </>
  );
};

export default BookedVolunteer;