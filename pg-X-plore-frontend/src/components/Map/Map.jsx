// import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

export default function Map({ data }) {
  const position = [52.4862, -1.8904];
  return (
    <>
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => {
          return <Pin key={item.id} item={item} />; // Added a key prop for better performance
        })}
      </MapContainer>
    </>
  );
}

function Pin({ item }) {
  return (
    <>
      <Marker position={[item.latitude, item.longitude]} className="marker">
        <Popup className="pin">
          <Link to={`/${item.id}`}>{item.price}</Link>
          <img src={item.img} alt="" />
        </Popup>
      </Marker>
    </>
  );
}
