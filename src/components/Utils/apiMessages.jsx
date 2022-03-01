import React from "react";
import Button from "./button";

export default class ApiMessages extends React.Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();
    this.getMessage = this.getMessage.bind(this);
  }
  getMessage() {
    return this.message.current.textContent;
  }
  render() {
    return (
      <div className="apiloading">
        <div className="message">
          <p ref={this.message}>{this.props.message}</p>
          <Button handleClick={this.props.handleClick} value="Okay" />
        </div>
      </div>
    );
  }
}
