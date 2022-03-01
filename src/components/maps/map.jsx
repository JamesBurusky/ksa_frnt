import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";

const position = [-0.72208975, 37.1608226];

export default function Map(props) {
  return (
    <div className="map">
      <MapContainer
        style={{
          height: "100%",
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
