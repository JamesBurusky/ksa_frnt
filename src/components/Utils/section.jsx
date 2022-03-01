import React, { useState } from "react";
import logo from "../../assets/imgs/ksa-logo.png";
import ModalHeader from "./modal_header";
import { useLocation } from "react-router-dom";
import Box from "./box";
import useFetch from "./useFetch";

export default function Section(props) {
    const { data, isPending, error } = useFetch(props.url)

    //Try to use useState
    return (
        <div onClick={() => {
          window.location.href = "/map";
        }}>
            {isPending && <p>Loading...</p>}
            {error && <p>error</p>}
            {data &&  (
            <div className="section" id="section">
            <h2>{props.title}</h2>
            <p>Visualize the layers</p>
            <div className="boxes" style={{gridTemplateColumns: `repeat(${data.length},1fr)` }}>
            {data.map(item=>{
                return <Box url="api/getcategory/name" title={item.Category} img={item.Thumbnail}/>
            })}12
            
            </div>
            </div>)}
        </div>
    );
}
