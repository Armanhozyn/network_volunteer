import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar/MainNavbar';
import HeadingWithSearch from './components/HeadingWithSearch/HeadingWithSearch';
import AllVolunteerCards from './components/AllVolunteerCards/AllVolunteerCards';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookedVolunteer from './components/BookedVolunteer/BookedVolunteer';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>

            <Route path="/login">
              {/* Login Page */}
              <Login></Login>
            </Route>

            <PrivateRoute path="/register/:name">
              {/* Register */}
              <Register></Register>
            </PrivateRoute>

            <PrivateRoute path="/bookedVolunteer">
              {/* Navbar */}
              <MainNavbar></MainNavbar>

              {/* Booked Volunteer */}
              <Container>
                <BookedVolunteer></BookedVolunteer>
              </Container>
            </PrivateRoute>

            <Route exact path="/">
              {/* Navbar */}
              <MainNavbar></MainNavbar>

              <Container>
                {/* Heading With Search Box */}
                <HeadingWithSearch></HeadingWithSearch>

                {/* Cards Are Here */}
                <AllVolunteerCards></AllVolunteerCards>
              </Container>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
