import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './../../assets/logo.png';
import './Login.css';
import { handleGoogleSignIn, initializeLoginFrameWork } from './loginManager';
const Login = () => {

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initializeLoginFrameWork();

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleRespose(res,true);
    });
  } 

  const handleRespose = (res,redirect) => {
    // setUser(res);
    setLoggedInUser(res);
      if(redirect){
        history.replace(from);
      }
  }
    return (
        <div className="text-center">
          <img src={logo} className="img-fluid mt-5" width="250px" alt="" />
          <div className="log__in border mt-5">
            <h5>Login With</h5>
            <button className="btn" onClick={googleSignIn}>Continue With Google</button>
          </div>
        </div>
    );
};

export default Login;