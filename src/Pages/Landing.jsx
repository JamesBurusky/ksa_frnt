import React from "react"
import Header from "../components/Utils/header"
import Navbar from "../components/Utils/navbar"
import Section from "../components/Utils/section";
import { useLocation } from "react-router-dom";
import useFetch from "../components/Utils/useFetch";
import "leaflet/dist/leaflet.css";

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

export default function LandingPage(props){

  
  //const { data, isPending, error } = useFetch('events')

 

        return <div>
            <Header />
            <Navbar />
            <div className="carousel">
              <h1>Cascading images</h1>
            </div>
            <Section url="events" title="Events" />
            <Section url="gis" title="Thematic Maps" />
            <Section title="Thematic Maps" />
        </div>
}