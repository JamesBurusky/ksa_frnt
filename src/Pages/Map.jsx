import React, { useState } from "react"
import Header from "../components/Utils/header"

import { MapContainer, TileLayer, Popup, Marker, useMapEvents, MapConsumer, } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import L from "leaflet";
import L from "leaflet";
import "leaflet-geoserver-request/src/L.Geoserver.js";
import {L as ly} from "react-leaflet";


export default class Map extends React.Component {


    constructor(props) {
        super(props)
        //const position = [51.505, -0.09]
    }


    render() {
        return (
            <div>
                <Header />
                <div className="map">
                    <MapContainer center={[-0.72208975, 37.1608226,]} zoom={6} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapConsumer>
                            {(map) => {
                                /*const icon = L.icon({
                                  iconSize: [25, 41],
                                  iconAnchor: [10, 41],
                                  popupAnchor: [2, -40],
                                  iconUrl:
                                    "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
                                  shadowUrl:
                                    "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
                                });
                                icon.addTo(map);*/

                                var wfsLayer = L.Geoserver.wfs("http://192.168.1.231:8080/geoserver/wfs", {
                                    //layers: "topp:states",
                                    layers: "MyWorkspace:kenya_county_boundary", onEachFeature: function (feature, layer) {
                                        //popupOptions = {maxWidth: 200};
                                        layer.bindPopup(feature.properties.county);
                                    }
                                }, );
                                wfsLayer.addTo(map);


                                return null;
                            }}
                        </MapConsumer>
                    </MapContainer>
                </div>

            </div>)
    }
}