import React from "react";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <div className="signup-container">
      <h1 className="title">Ready to take a free trial?</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>

      <div className="form-container">
        <h2>Sign up for a free account</h2>
        <form className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="form-group button-group">
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
