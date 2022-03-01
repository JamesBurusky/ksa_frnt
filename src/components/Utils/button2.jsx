import React from "react";

export default function Button2(props) {
  return (
    <div className="button2">
      <button onClick={()=>props.handleClick()}>{props.value}</button>
    </div>
  );
}
