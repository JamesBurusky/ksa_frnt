import React from "react";

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      value: props.value,
    };
  }

  getValue() {
    return this.input.current.value;
  }

  render() {
    return (
      <div className="input">
        <h4>{this.props.label}</h4>
        <textarea
          ref={this.input}
          type={this.props.type}
          value={this.state.value}
          rows={5}
          onChange={(e) => {
            this.props.onChangeInput();
            this.setState({ value: e.target.value });
          }}
        ></textarea>
      </div>
    );
  }
}
