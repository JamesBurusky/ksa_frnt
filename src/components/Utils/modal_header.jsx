import React from "react";
import logo from "../../assets/imgs/logo2.png";
import Social from "./social";
import { useLocation } from "react-router-dom";

function NavLink(props) {
  const location = useLocation();
  let link;
  if (props.url === location.pathname) {
    link = (
      <h4
        className="underline"
        onClick={() => {
          window.location.href = props.url;
        }}
      >
        {props.txt}
      </h4>
    );
  } else {
    link = (
      <h4
        onClick={() => {
          window.location.href = props.url;
        }}
      >
        {props.txt}
      </h4>
    );
  }
  return link;
}

export default function ModalHeader(props) {
  return (
    <div className="modalheader">
      <div className="container">
        <div className="md_logo">
          <img
            onClick={() => {
              window.location.href = "/home";
            }}
            src={logo}
            alt="Murang'a Online Soko Logo"
          />
          <i
            className="fa fa-close"
            onClick={() => {
              props.toggleMenu();
            }}
          >
            &#xf00d;
          </i>
        </div>

        <h2>Menus</h2>
        <div className="nav">
        <NavLink txt="Geoportal" url="/" />
            <NavLink txt="Billing" url="/billing" />
          <button
            onClick={() => {
              props.logout()
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
