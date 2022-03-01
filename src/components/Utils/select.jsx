import React from "react";


export default function Select(props) {
 
    return (
      <div className="select">
        <h4>{props.label}</h4>
        <select name="select">
          {props.data && (
            props.data.map(item=>{
              return <option value={item}>{item}</option>;
            })
          )}
        </select>
      </div>
    );
}