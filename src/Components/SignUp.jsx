import React from "react";
import webimg from '../assets/rb_10129.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
      <div className="container-fluid px-5" style={{ maxWidth: "1080px" }}>
        <div className="row align-items-center justify-content-between gx-5">
          
          {/* Form Section */}
          <div className="col-12 col-md-4">
            <h1 className="display-4 fw-bold mb-4">Sign up</h1>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Repeat your password" />
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree all statements in <a href="#" className="text-primary">Terms of service</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-7 text-center">
            <img
              src={webimg}
              alt="Sign up illustration"
              className="img-fluid"
              style={{
                maxHeight: "400px", // 💥 Bigger image
                width: "100%",
                objectFit: "contain"
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

