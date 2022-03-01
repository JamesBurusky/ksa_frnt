import { useState } from "react";
import Social from "./social";

export default function FooterItem(props) {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="section">
      <div className="hd">
        <h3>{props.title}</h3>
        {!show && (
          <i
            onClick={() => {
              handleClick();
            }}
            className="fa fa-plus"
          ></i>
        )}
        {show && (
          <i
            onClick={() => {
              handleClick();
            }}
            className="fa fa-minus"
          ></i>
        )}
      </div>
      <hr />
      {show && (
        <>
          <p>{props.i1}</p>
          <p>{props.i2}</p>
          <p>{props.i3}</p>
          <p>{props.i4}</p>
          {props.social && <Social/>}
        </>
      )}
    </div>
  );
}
