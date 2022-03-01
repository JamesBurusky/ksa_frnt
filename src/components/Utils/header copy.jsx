import React, { useState } from "react";
import logo from "../../assets/imgs/ksa-logo.png";
import ModalHeader from "./modal_header";
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

export default function Header(props) {
  const [clicked, setClicked] = useState(false)

  const toggleMenu = () => {
    setClicked(!clicked)
  };

  const logout =()=>{
    fetch("http://localhost:3001/auth/logout",{
      method: "get",
      credentials: "include"
    }).then(res =>{return res.json()}).then(data => {
      window.location.href = "/login";
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <div>
      <div className="header" id="header">
        <div className="container">
          <div className="logo">
            <img
              onClick={() => {
                window.location.href = "/home";
              }}
              src={logo}
              alt="Kenya Space Agency Logo"
            />
          </div>

          <div className="nav">
            <NavLink txt="Geoportal" url="/" />
            <NavLink txt="Billing" url="/billing" />
          </div>
          <div className="nav2">
            <button
              onClick={()=>logout()}
            >
              Logout
            </button>
          </div>
          <i
            className="fa fa-bars"
            onClick={() => {
              toggleMenu();
            }}
          ></i>
        </div>
      </div>
      {clicked && <ModalHeader active={props.active} logout={logout} toggleMenu={toggleMenu} />}
    </div>
  );
}
