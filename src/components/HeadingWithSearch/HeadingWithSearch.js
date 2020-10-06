import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import "./HeadingWithSearch.css";
const HeadingWithSearch = () => {
    return (
        <div className="heading__search">
          <h2> I GROW BY HELPING PEOPLE IN NEED</h2>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="" />
            <Button variant="primary" className="">Search</Button>
          </Form>
        </div>
    );
};

export default HeadingWithSearch;