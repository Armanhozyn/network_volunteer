import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "./../../assets/logo.png";
import './Register.css';
const Register = () => {
  const { name } = useParams();
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { handleSubmit,register,errors,watch } = useForm();
  const onSubmit = formData => {
    fetch('https://damp-lowlands-40159.herokuapp.com/registerUrBook', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("your order placed!!");
          history.push('/bookedVolunteer');
        }
      })
  }
  return (
    <div className="register__wrapper">
      <img src={logo} className="img-fluid mt-5" width="250px" alt="" />
      <div className="register border mt-5">

        <Row className="justify-content-center">
          <Col md={6}>
            <h3>Register as a Volunteer</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <input name="name" defaultValue={loggedInUser.name} readOnly className="form-control" ref={register}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input name="email" defaultValue={loggedInUser.email} readOnly className="form-control" ref={register}/>
                {/* <Form.Control type="email" placeholder="Enter email" name="email" readOnly value={loggedInUser.email} /> */}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <input type="date" name="date" placeholder="Enter Date" className="form-control" ref={register({ required: true })}/>
                {errors.date && <span className="error">Date is required</span>}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <input type="text" name="description" placeholder="Enter Description" className="form-control" ref={register({ required: true })}/>
                {errors.description && <span className="error">Description is required</span>}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Organize books at the library</Form.Label>
                <input name="bookedVolunteer" defaultValue={name} readOnly className="form-control" ref={register}/>
              </Form.Group>

              <Button variant="primary" className="btn-block" type="submit">
                Registration
                </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;