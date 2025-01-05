
import React from "react";
import "./SignUp.css";
import webimg from '../assets/rb_10129.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign up</h1>
        <form>
          <div className="form-group">
    
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
    
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
    
            <input type="password" placeholder="Repeat your password" />
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree all statements in <a href="#">Terms of service</a>
            </label>
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
      </div>
      <div className="signup-image">
        <img src={webimg} alt="Sign up illustration" />
      </div>
    </div>
  );
};

export default SignUp;
