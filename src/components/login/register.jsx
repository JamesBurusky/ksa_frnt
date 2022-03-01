import React from "react";
import logo from "../../assets/imgs/logo1.png";
import Button from "../Utils/button";
import Button2 from "../Utils/button2";
import Input from "../Utils/input";

class RegisterModal extends React.Component {

  render() {
    return (
      <div className="modallogin">
        <div className="card">
          <div className="container">
            <div className="md_logo">
              <img
                onClick={() => {
                  window.location.href = "/";
                }}
                src={logo}
                alt="Murang's Online Soko Logo"
              />
              <i
                className="fa fa-close"
                onClick={() => {
                  this.props.closeRegisterModal();
                }}
              >
                &#xf00d;
              </i>
            </div>

            <h2>Register</h2>

            <div className="form">
              <Input
                label="Phone Number *"
                type="tel"
                placeholder="0700 000 000"
              />
              <Input
                label="Email *"
                type="email"
                placeholder="Enter a valid email address"
              />
              <Input
                label="Password *"
                type="textPassword"
                placeholder="Enter a password"
              />
              <Input
                label="Confirm Password *"
                type="textPassword"
                placeholder="Confirm your password"
              />
            </div>

            <p>
              You accept our <span>Terms and Conditions</span>
            </p>

            <Button
              handleClick={() => {
                window.location.href = "/home";
              }}
              value="Submit"
            />
            <Button2
              handleClick={this.props.switchLoginRegister}
              value="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterModal;
