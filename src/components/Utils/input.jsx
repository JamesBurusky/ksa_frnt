import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  getValue(){
    return this.input.current.value
  }

  render() {
    return (
      <div className="input">
        <h4>{this.props.label}</h4>
        <input
          ref={this.input}
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange ={()=>{
            this.props.onChangeInput()
          }}
        />
      </div>
    );
  }
}