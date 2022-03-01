import React from "react";
import logo from "../../assets/imgs/logo1.png";
import Button from "../Utils/button";
import Button2 from "../Utils/button2";
import Input from "../Utils/input";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.error = React.createRef();
  }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  validatePassword = (password) => {
    return password.length > 5
  };

  onChangeInput = () =>{
    this.error.current.textContent = ""
  }

  onClick = () => {
    const body = {
      username: this.email.current.getValue().trim(),
      password: this.password.current.getValue()
    };

    if (!this.validateEmail(body.username))
      return (this.error.current.textContent = "Invalid email address!");
    if (!this.validatePassword(body.password))
      return (this.error.current.textContent = "Invalid password!");

    fetch("/login", {
      method: "post",
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        window.location.href = "/home";
      })
      .catch((err) => {
        this.error.current.textContent = "Authentication failed!!";
      });
  };

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
                  this.props.closeLoginModal();
                }}
              >
                &#xf00d;
              </i>
            </div>

            <h2>Login</h2>
            <h4 ref={this.error} className="error"></h4>
            <div className="form">
              <Input
                ref={this.email}
                label="Email"
                type="email"
                placeholder="Email address"
                onChangeInput={this.onChangeInput}
              />
              <Input
                ref={this.password}
                label="Password"
                type="textPassword"
                placeholder="Email address"
                onChangeInput={this.onChangeInput}
              />
            </div>

            <p>
              Forgot password? <span>Click Here</span>
            </p>

            <Button handleClick={this.onClick} value="Submit" />
            <Button2
              handleClick={this.props.switchLoginRegister}
              value="Register"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
